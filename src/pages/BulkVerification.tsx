import React from 'react';
import { UploadCloud, File } from 'lucide-react';
import DashboardLayout from '../components/layout/DashboardLayout';

const pastUploads = [
  { id: 1, file: 'fleet_q3_2025.csv', date: '25 Aug 2025', status: 'Completed', records: 1500 },
  { id: 2, file: 'new_loans_august.csv', date: '15 Aug 2025', status: 'Completed', records: 250 },
];

const BulkVerification: React.FC = () => {
  return (
    <DashboardLayout userType="enterprise">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Bulk Vehicle Verification</h1>
      <p className="text-gray-600 mb-8">Upload a CSV file to verify multiple vehicles at once.</p>

      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center bg-slate-50 hover:border-blue-500 transition-colors">
          <UploadCloud className="w-12 h-12 mx-auto text-gray-400" />
          <p className="mt-4 font-semibold text-gray-800">Drag & drop a CSV file here</p>
          <p className="text-gray-500 text-sm mt-1">or click to browse</p>
          <button className="mt-6 bg-gray-900 text-white py-2 px-5 rounded-lg font-semibold hover:bg-gray-800">Upload File</button>
        </div>
      </div>

      <div className="mt-8 bg-white border border-gray-200 rounded-xl">
        <h2 className="text-lg font-bold text-gray-800 p-4 border-b border-gray-200">Upload History</h2>
        <table className="w-full text-left">
          <thead className="text-sm text-gray-500 bg-slate-50">
            <tr>
              <th className="p-4 font-medium">FILE NAME</th>
              <th className="p-4 font-medium">DATE</th>
              <th className="p-4 font-medium">RECORDS</th>
              <th className="p-4 font-medium">STATUS</th>
              <th className="p-4 font-medium text-right">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {pastUploads.map((upload) => (
              <tr key={upload.id} className="border-t border-gray-200">
                <td className="p-4 font-medium flex items-center gap-2"><File className="w-5 h-5 text-gray-500" /> {upload.file}</td>
                <td className="p-4 text-gray-600">{upload.date}</td>
                <td className="p-4 text-gray-600">{upload.records}</td>
                <td className="p-4">
                  <span className="bg-green-100 text-green-700 font-medium px-2 py-1 rounded-full text-xs">{upload.status}</span>
                </td>
                <td className="p-4 text-right">
                  <button className="text-blue-600 font-semibold hover:underline">Download Report</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default BulkVerification;