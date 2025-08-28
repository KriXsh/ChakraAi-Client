import React from 'react';
import { Play } from 'lucide-react';
import DashboardLayout from '../components/layout/DashboardLayout';

const apiResponse = `{
  "status": "success",
  "vehicle": {
    "registration": "MH01AB1234",
    "make": "Maruti Suzuki",
    "model": "Swift",
    "risk_score": 25,
    "estimated_value": {
      "min": 450000,
      "max": 520000
    }
  }
}`;

const ApiPlayground: React.FC = () => {
  return (
    <DashboardLayout userType="enterprise">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">API Playground</h1>
      <p className="text-gray-600 mb-8">Test our API endpoints in real-time.</p>

      <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Request Panel */}
            <div>
              <h2 className="text-lg font-bold text-gray-800">Request</h2>
              <p className="text-sm text-gray-500 mb-4">POST /v1/verify</p>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Registration Number</label>
                  <input type="text" defaultValue="MH01AB1234" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500" />
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <input type="checkbox" id="risk" defaultChecked className="h-4 w-4 rounded text-blue-600 focus:ring-blue-500" />
                  <label htmlFor="risk" className="text-sm text-gray-700">Include Risk Score</label>
                </div>
                 <div className="flex items-center gap-3">
                  <input type="checkbox" id="value" defaultChecked className="h-4 w-4 rounded text-blue-600 focus:ring-blue-500" />
                  <label htmlFor="value" className="text-sm text-gray-700">Include Valuation</label>
                </div>
              </div>
              <button className="w-full mt-6 bg-gray-900 text-white py-2.5 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-gray-800">
                <Play className="w-5 h-5" /> Run Request
              </button>
            </div>

            {/* Response Panel */}
            <div className="bg-gray-900 rounded-xl p-6 h-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400 text-sm font-medium">RESPONSE</span>
                <span className="bg-green-500/20 text-green-400 text-xs font-mono px-2 py-1 rounded">200 OK</span>
              </div>
              <pre className="text-sm overflow-x-auto text-green-300 flex-1">{apiResponse}</pre>
            </div>
          </div>
      </div>
    </DashboardLayout>
  );
};

export default ApiPlayground;