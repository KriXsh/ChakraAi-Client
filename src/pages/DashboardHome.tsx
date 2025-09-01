import React, { useState, useEffect, useRef } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {
  LayoutDashboard, BookText, Bot, User, FileText, ChevronDown, Bell, Wallet, KeyRound, Copy, Eye, EyeOff, Search, Send,
  Settings
} from 'lucide-react';
import ChakraLogo from '../assets/logo/ChakraLogo';

/*
  IMPORTANT: For the new syntax highlighter (highlight.js) to work,
  please add the following two lines to the <head> section of your main public/index.html file:

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/vs2015.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
*/

// This tells TypeScript that 'hljs' is a global variable provided by the script tag
declare const hljs: any;


// --- MOCK DATA ---
const apiUsageData = [
    { name: '7 days ago', calls: 2400 },
    { name: '6 days ago', calls: 1398 },
    { name: '5 days ago', calls: 9800 },
    { name: '4 days ago', calls: 3908 },
    { name: '3 days ago', calls: 4800 },
    { name: '2 days ago', calls: 3800 },
    { name: 'Yesterday', calls: 4300 },
];

const apiLogsData = [
    { id: 'req_1', method: 'POST', endpoint: '/vehicle/rc-v6', status: 200, time: '2 mins ago', latency: '120ms' },
    { id: 'req_2', method: 'POST', endpoint: '/aadhaar/verify-no-otp', status: 200, time: '5 mins ago', latency: '250ms' },
    { id: 'req_3', method: 'POST', endpoint: '/pan/verify-basic', status: 404, time: '8 mins ago', latency: '90ms' },
    { id: 'req_4', method: 'POST', endpoint: '/vehicle/rc-v6', status: 200, time: '15 mins ago', latency: '110ms' },
    { id: 'req_5', method: 'POST', endpoint: '/pan/verify-basic', status: 500, time: '22 mins ago', latency: '500ms' },
];

const curlRequest = `curl --location 'https://api.chakra.dev/v1/vehicle/rc' \\
--header 'Content-Type: application/json' \\
--header 'Authorization: Bearer {YOUR_API_KEY}' \\
--data '{
    "vehicleNumber": "MH12AB1234"
}'`;

const jsonResponse = `{
  "status": "success",
  "data": {
    "registrationNumber": "MH12AB1234",
    "ownerName": "John Doe",
    "model": "Example Model S",
    "color": "Midnight Blue",
    ...
  }
}`;

// --- HELPER & REUSABLE COMPONENTS ---

const CodeBlock = ({ code, language }: { code: string; language:string }) => {
    const codeRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (codeRef.current && typeof hljs !== 'undefined') {
            hljs.highlightElement(codeRef.current);
        }
    }, [code, language]);

    return (
        <div className="bg-[#1E1E1E] rounded-lg overflow-hidden my-4 relative shadow-lg text-white">
            <div className="flex justify-between items-center px-4 py-2 bg-gray-700/50 text-xs text-gray-300">
                <span>{language === 'json' ? 'Example Response' : 'Example Request'}</span>
                <button
                    onClick={() => navigator.clipboard.writeText(code)}
                    className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors">
                    <Copy size={14} /> Copy
                </button>
            </div>
            <pre className="p-0 m-0">
                <code ref={codeRef} className={`language-${language} p-4 block text-sm`}>
                    {code}
                </code>
            </pre>
        </div>
    );
};


const ApiKeyManager = () => {
    const [apiKey, setApiKey] = useState('chakra_live_xxxxxxxxxxxxxxxxxxxx1234');
    const [isKeyVisible, setIsKeyVisible] = useState(false);

    const generateNewKey = () => {
        const newKey = `chakra_live_${[...Array(24)].map(() => Math.random().toString(36)[2]).join('')}${Math.floor(Math.random()*9000+1000)}`;
        setApiKey(newKey);
    };
    
    return (
        <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">API Key</h3>
            <p className="text-sm text-gray-500 mt-1">Your secret key for accessing the Chakra API.</p>
            <div className="mt-4 flex items-center gap-2 p-3 bg-gray-50 border rounded-lg">
                <KeyRound className="text-gray-400" size={20} />
                <input
                    type={isKeyVisible ? 'text' : 'password'}
                    readOnly
                    value={apiKey}
                    className="flex-1 bg-transparent font-mono text-sm focus:outline-none"
                />
                <button onClick={() => setIsKeyVisible(!isKeyVisible)} className="p-1 text-gray-500 hover:text-gray-800">
                    {isKeyVisible ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
                <button onClick={() => navigator.clipboard.writeText(apiKey)} className="p-1 text-gray-500 hover:text-gray-800">
                    <Copy size={18} />
                </button>
            </div>
            <button onClick={generateNewKey} className="mt-4 text-sm font-semibold text-indigo-600 hover:text-indigo-800">
                Generate New Key
            </button>
        </div>
    );
};

// --- PAGE COMPONENTS (TABS) ---

const DashboardPage = () => (
    <>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Overview of your API usage and account health.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="text-sm font-medium text-gray-500">Total API Calls (24h)</h3>
                <p className="text-3xl font-bold mt-2 text-gray-900">12,543</p>
                <p className="text-sm text-green-600 mt-1">+12.5%</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="text-sm font-medium text-gray-500">Success Rate</h3>
                <p className="text-3xl font-bold mt-2 text-gray-900">99.8%</p>
                <p className="text-sm text-gray-500 mt-1">Last 24 hours</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="text-sm font-medium text-gray-500">Avg. Latency</h3>
                <p className="text-3xl font-bold mt-2 text-gray-900">112ms</p>
                <p className="text-sm text-red-600 mt-1">+8ms</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="text-sm font-medium text-gray-500">Errors</h3>
                <p className="text-3xl font-bold mt-2 text-gray-900">21</p>
                <p className="text-sm text-gray-500 mt-1">Last 24 hours</p>
            </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-xl border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">API Hits Per Day</h2>
            <div className="h-80 mt-4">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={apiUsageData}>
                        <defs>
                            <linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                        <XAxis dataKey="name" stroke="#6b7280" fontSize={12} />
                        <YAxis stroke="#6b7280" fontSize={12} />
                        <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '0.5rem' }} />
                        <Area type="monotone" dataKey="calls" stroke="#6366f1" fill="url(#colorCalls)" strokeWidth={2} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    </>
);

const ApiDocsPage = () => {
    const [activeCategory, setActiveCategory] = useState('Vehicle');
    const categories = ['Vehicle', 'Aadhaar', 'Pan'];

    return (
        <div className="flex h-full">
            <aside className="w-64 bg-white border-r border-gray-200 p-4">
                <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">API Categories</h2>
                <nav className="space-y-2">
                    {categories.map(cat => (
                        <button key={cat} onClick={() => setActiveCategory(cat)}
                            className={`w-full text-left px-4 py-2.5 text-sm font-medium rounded-md transition-colors ${activeCategory === cat ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-100'}`}>
                            {cat} APIs
                        </button>
                    ))}
                </nav>
            </aside>
            <main className="flex-1 p-8 overflow-y-auto">
                <h1 className="text-3xl font-bold text-gray-900">{activeCategory} APIs</h1>
                <p className="text-gray-600 mt-1">Test endpoints for the {activeCategory} category.</p>

                <div className="mt-8 p-6 border border-gray-200 rounded-xl bg-white/50">
                    <span className="text-sm font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">POST</span>
                    <h4 className="inline-block ml-4 text-xl font-semibold text-gray-800">
                        {activeCategory === 'Vehicle' && 'Vehicle RC Verification'}
                        {activeCategory === 'Aadhaar' && 'Aadhaar Basic Verification'}
                        {activeCategory === 'Pan' && 'PAN Basic Verification'}
                    </h4>
                    <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                {activeCategory === 'Vehicle' && 'Vehicle Number'}
                                {activeCategory === 'Aadhaar' && 'Aadhaar Number'}
                                {activeCategory === 'Pan' && 'PAN Number'}
                            </label>
                            <input type="text" placeholder="Enter number..." className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                            <button className="mt-6 w-full bg-indigo-600 text-white font-semibold py-2.5 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Send Request
                            </button>
                        </div>
                        <div>
                            <CodeBlock code={curlRequest} language="bash" />
                            <CodeBlock code={jsonResponse} language="json" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

const AiChatPage = () => {
    const [messages, setMessages] = useState([
        { from: 'ai', text: 'Hello! How can I help you with vehicle information today?' },
    ]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (!input.trim()) return;
        const newMessages = [...messages, { from: 'user', text: input }];
        setMessages(newMessages);
        setInput('');
        // Simulate AI response
        setTimeout(() => {
            setMessages([...newMessages, { from: 'ai', text: 'Searching for information on that vehicle... One moment.' }]);
        }, 1000);
    };

    return (
        <div className="flex flex-col h-full items-center">
            <div className="w-full max-w-3xl h-full flex flex-col bg-white border border-gray-200 rounded-xl shadow-sm">
                 <div className="p-4 border-b">
                    <h1 className="text-xl font-bold text-gray-900">AI Vehicle Assistant</h1>
                    <p className="text-sm text-gray-500">Ask me anything about vehicle registrations, models, or history.</p>
                </div>
                <div className="flex-1 p-6 space-y-4 overflow-y-auto">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.from === 'ai' ? 'justify-start' : 'justify-end'}`}>
                            <div className={`max-w-md px-4 py-2.5 rounded-2xl ${msg.from === 'ai' ? 'bg-gray-100 text-gray-800' : 'bg-indigo-600 text-white'}`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="p-4 border-t bg-white">
                    <div className="relative">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="e.g., 'Get details for MH12AB1234'"
                            className="w-full pl-4 pr-12 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <button onClick={handleSend} className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                            <Send size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProfilePage = () => (
    <>
        <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
        <p className="text-gray-600 mt-1">Manage your personal information and security settings.</p>

        <div className="mt-8 max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">User Details</h3>
                <div className="mt-4 space-y-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700">Full Name</label>
                        <input type="text" defaultValue="Krishnendu" className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">Email Address</label>
                        <input type="email" defaultValue="krishnendu@example.com" disabled className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-500" />
                    </div>
                    <button className="w-full bg-indigo-600 text-white font-semibold py-2.5 px-4 rounded-md hover:bg-indigo-700">Update Details</button>
                </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Change Password</h3>
                <div className="mt-4 space-y-4">
                     <div>
                        <label className="text-sm font-medium text-gray-700">Current Password</label>
                        <input type="password" placeholder="••••••••" className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">New Password</label>
                        <input type="password" placeholder="••••••••" className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md" />
                    </div>
                    <button className="w-full bg-indigo-600 text-white font-semibold py-2.5 px-4 rounded-md hover:bg-indigo-700">Change Password</button>
                </div>
            </div>
            <div className="md:col-span-2">
                <ApiKeyManager />
            </div>
        </div>
    </>
);

const ApiLogsPage = () => (
    <>
        <h1 className="text-3xl font-bold text-gray-900">API Logs</h1>
        <p className="text-gray-600 mt-1">A real-time stream of your API requests.</p>
        
        <div className="mt-6 bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">Timestamp</th>
                            <th scope="col" className="px-6 py-3">Method</th>
                            <th scope="col" className="px-6 py-3">Endpoint</th>
                            <th scope="col" className="px-6 py-3">Status</th>
                            <th scope="col" className="px-6 py-3">Latency</th>
                        </tr>
                    </thead>
                    <tbody>
                        {apiLogsData.map((log) => (
                            <tr key={log.id} className="bg-white border-b hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium text-gray-900">{log.time}</td>
                                <td className="px-6 py-4">
                                    <span className="font-mono text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">{log.method}</span>
                                </td>
                                <td className="px-6 py-4 font-mono text-indigo-600">{log.endpoint}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                                        log.status === 200 ? 'bg-green-100 text-green-800' :
                                        log.status === 404 ? 'bg-yellow-100 text-yellow-800' :
                                        'bg-red-100 text-red-800'
                                    }`}>
                                        {log.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">{log.latency}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </>
);

// --- NAVIGATION & MAIN APP LAYOUT ---
type Page = 'Dashboard' | 'API Docs' | 'AI Chat' | 'My Profile' | 'API Logs';

const Sidebar = ({ activePage, setActivePage }: { activePage: Page; setActivePage: (page: Page) => void }) => {
    const navItems: { name: Page; icon: React.ElementType }[] = [
        { name: 'Dashboard', icon: LayoutDashboard },
        { name: 'API Docs', icon: BookText },
        { name: 'AI Chat', icon: Bot },
        { name: 'My Profile', icon: User },
        { name: 'API Logs', icon: FileText },
    ];

    return (
        <aside className="w-64 flex flex-col text-white bg-gradient-to-b from-gray-900 to-indigo-900">
          
            <div className="px-6 py-5">
                <h1 className="text-2xl font-bold text-white tracking-wider">Chakra</h1>
            </div>
            <nav className="flex-1 px-4 space-y-2">
                {navItems.map(({ name, icon: Icon }) => (
                    <button key={name} onClick={() => setActivePage(name)}
                        className={`flex items-center w-full gap-3 px-4 py-2.5 text-sm font-medium rounded-md transition-colors ${
                            activePage === name ? 'bg-white/10 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white'
                        }`}>
                        <Icon size={18} />
                        <span>{name}</span>
                    </button>
                ))}
            </nav>
            {/* <div className="p-4 border-t border-white/10">
                 <button className="flex items-center w-full gap-3 px-4 py-2.5 text-sm font-medium rounded-md text-gray-300 hover:bg-white/5 hover:text-white">
                    <Settings size={18} />
                    <span>Settings</span>
                 </button>
            </div> */}
        </aside>
    );
};

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    return (
        <header className="flex items-center justify-end px-8 py-4 bg-white border-b border-gray-200">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 border rounded-lg">
                    <Wallet size={18} className="text-blue-500" />
                    <span className="text-sm font-semibold text-gray-800">2,97,033</span>
                </div>
                <Bell size={22} className="text-gray-500 cursor-pointer hover:text-gray-800" />
                <div className="relative">
                    <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center gap-2">
                        <img src="https://i.pravatar.cc/40" alt="User" className="w-9 h-9 rounded-full" />
                        <ChevronDown size={18} className="text-gray-500" />
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-3 w-48 bg-white rounded-md shadow-lg border z-50">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                            <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50">Logout</a>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}


export default function DashboardHome() {
    const [activePage, setActivePage] = useState<Page>('Dashboard');

    const renderContent = () => {
        // API Docs page has a different internal layout, so we handle it separately.
        if (activePage === 'API Docs') {
            return <ApiDocsPage />;
        }

        let pageComponent;
        switch (activePage) {
            case 'Dashboard': pageComponent = <DashboardPage />; break;
            case 'AI Chat': pageComponent = <AiChatPage />; break;
            case 'My Profile': pageComponent = <ProfilePage />; break;
            case 'API Logs': pageComponent = <ApiLogsPage />; break;
            default: pageComponent = <DashboardPage />;
        }
        // Wrap other pages in a standard padding container
        return <div className="p-8">{pageComponent}</div>
    };

    return (
        <div className="flex h-screen bg-gray-50 font-sans">
            <Sidebar activePage={activePage} setActivePage={setActivePage} />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header />
                <main className="flex-1 overflow-y-auto">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
}

