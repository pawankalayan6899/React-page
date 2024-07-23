import React from 'react';
import { FaBars, FaBell, FaDownload, FaUserCircle, FaArrowUp, FaArrowDown } from 'react-icons/fa';

const App = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="flex items-center justify-center h-16 bg-gray-800">
          <span className="text-2xl font-bold">Vajra</span>
        </div>
        <nav className="flex-1 px-4 py-8 space-y-4">
          <button className="block px-4 py-2 text-white bg-gray-900 hover:bg-gray-700 rounded">Dashboard</button>
          <button className="block px-4 py-2 text-white bg-gray-900 hover:bg-gray-700 rounded">Assets</button>
          <button className="block px-4 py-2 text-white bg-gray-900 hover:bg-gray-700 rounded">Incidents</button>
          <button className="block px-4 py-2 text-white bg-gray-900 hover:bg-gray-700 rounded">Services</button>
          <button className="block px-4 py-2 text-white bg-gray-900 hover:bg-gray-700 rounded">Request</button>
          <button className="block px-4 py-2 text-white bg-gray-900 hover:bg-gray-700 rounded">Users</button>
          <button className="block px-4 py-2 text-white bg-gray-900 hover:bg-gray-700 rounded">Reports</button>
        </nav>
        <div className="px-4 py-8 space-y-4">
          <button className="block w-full px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded">Contact us</button>
          <button className="block w-full px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded">Log Out</button>
        </div>
      </aside>
      <main className="flex-1 p-8">
        <header className="flex items-center justify-between pb-4 mb-4 border-b">
          <h1 className="text-3xl font-bold">Incidents</h1>
          <div className="flex items-center space-x-4">
            <button className="flex items-center px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
              <FaUserCircle className="mr-2" />
              Non Bio Medical
            </button>
            <button className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
              Vijayanagar
            </button>
            <button className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
              <FaBell />
            </button>
            <button className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
              <FaBars />
            </button>
          </div>
        </header>
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="p-4 bg-white shadow rounded">
            <p className="text-2xl font-bold">04</p>
            <p>Incident reported</p>
          </div>
          <div className="p-4 bg-white shadow rounded">
            <p className="text-2xl font-bold">06</p>
            <p>Check In</p>
          </div>
          <div className="p-4 bg-white shadow rounded">
            <p className="text-2xl font-bold">03 / 05</p>
            <p>Services open</p>
          </div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <input type="text" placeholder="Search" className="px-4 py-2 border rounded" />
          <div className="flex items-center space-x-4">
            <select className="px-4 py-2 border rounded">
              <option>September</option>
            </select>
            <select className="px-4 py-2 border rounded">
              <option>2023</option>
            </select>
            <div className="flex items-center space-x-2">
              <button className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400">
                <FaArrowUp />
              </button>
              <button className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400">
                <FaArrowDown />
              </button>
              <button className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400">
                <FaDownload />
              </button>
            </div>
            <button className="px-4 py-2 bg-blue-500 text-white rounded">Add incident</button>
          </div>
        </div>
        <table className="w-full bg-white shadow rounded">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Asset</th>
              <th className="px-4 py-2 text-left">Code</th>
              <th className="px-4 py-2 text-left">Department</th>
              <th className="px-4 py-2 text-left">Date & Time</th>
              <th className="px-4 py-2 text-left">Down Time</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Report</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 5 }).map((_, index) => (
              <tr key={index}>
                <td className="px-4 py-2">Ge ECG Machine</td>
                <td className="px-4 py-2">AG-7645698</td>
                <td className="px-4 py-2">Blood Center</td>
                <td className="px-4 py-2">03/04/2023 @ 12.30</td>
                <td className="px-4 py-2">10 hr : 24 m : 32 s</td>
                <td className="px-4 py-2">
                  {index % 2 === 0 ? (
                    <span className="px-2 py-1 bg-green-200 text-green-800 rounded">Cleared</span>
                  ) : (
                    <span className="px-2 py-1 bg-orange-200 text-orange-800 rounded">Open</span>
                  )}
                </td>
                <td className="px-4 py-2">
                  <FaDownload />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default App;
