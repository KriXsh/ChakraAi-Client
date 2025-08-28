import React from 'react';
import { LayoutDashboard, Car, User, BookOpen, UploadCloud, TerminalSquare, BarChart2, CreditCard, Bell } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface DashboardLayoutProps {
  children: React.ReactNode;
  userType: 'consumer' | 'enterprise';
}

const navConfig = {
  consumer: [
    { title: 'Main Menu', items: [
        { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
        { name: 'My Garage', href: '/garage', icon: Car },
      ]
    },
    { title: 'Support', items: [
        { name: 'My Account', href: '/account', icon: User },
        { name: 'Documentation', href: '/docs', icon: BookOpen },
      ]
    }
  ],
  enterprise: [
    { title: 'APIs Menu', items: [
        { name: 'Overview', href: '/enterprise', icon: LayoutDashboard },
        { name: 'Bulk Verification', href: '/enterprise/bulk', icon: UploadCloud },
        { name: 'API Playground', href: '/enterprise/api', icon: TerminalSquare },
      ]
    },
    { title: 'Data & Billing', items: [
        { name: 'Analytics', href: '/enterprise/analytics', icon: BarChart2 },
        { name: 'Billing', href: '/enterprise/billing', icon: CreditCard },
      ]
    }
  ]
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, userType }) => {
  const location = useLocation();
  const navigation = navConfig[userType];

  return (
    <div className="flex h-screen bg-slate-100">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 bg-slate-900 text-white flex flex-col">
        <div className="h-16 flex items-center justify-center">
          <h1 className="text-2xl font-bold tracking-wider">CHAKRA</h1>
        </div>
        <nav className="flex-1 px-4 py-2 space-y-4">
          {navigation.map((section) => (
            <div key={section.title}>
              <h2 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">{section.title}</h2>
              <div className="mt-2 space-y-1">
                {section.items.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium text-gray-300 transition-colors relative ${
                      location.pathname === item.href
                        ? 'bg-blue-500/10 text-white'
                        : 'hover:bg-slate-700'
                    }`}
                  >
                    {location.pathname === item.href && <span className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-r-full"></span>}
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
          <h1 className="text-xl font-semibold text-gray-800">Welcome, Krishnendu!</h1>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
              API Wallet: <span className="font-bold text-gray-900">₹2,424</span>
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600">
              <Bell className="w-5 h-5" />
            </button>
            <div className="w-9 h-9 bg-gray-800 rounded-full"></div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;