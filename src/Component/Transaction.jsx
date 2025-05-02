import React from 'react';

const transactions = [
  {
    id: 1,
    type: 'Cash In',
    amount: 1200,
    description: 'Received from client project',
    date: '2025-05-02',
    time: '10:30 AM',
  },
  {
    id: 2,
    type: 'Cash Out',
    amount: 500,
    description: 'Office rent payment',
    date: '2025-05-01',
    time: '03:45 PM',
  },
  {
    id: 3,
    type: 'Cash In',
    amount: 750,
    description: 'Freelance payment',
    date: '2025-04-28',
    time: '11:20 AM',
  },
  {
    id: 4,
    type: 'Cash Out',
    amount: 200,
    description: 'Domain renewal',
    date: '2025-04-27',
    time: '09:10 AM',
  },
];

const Transaction = () => {
  return (
    <div className="w-full pt-30 px-4 sm:px-6 lg:px-12 py-10 bg-gradient-to-tr from-gray-50 via-[#edf7fc] to-[#d8efff]">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
        Transaction History
      </h2>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="w-full overflow-x-auto">
          <table className="min-w-[700px] w-full text-left text-sm text-gray-700">
            <thead className="bg-blue-100 text-gray-700 uppercase text-xs">
              <tr>
                <th className="px-4 py-3">SL</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Description</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Time</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, idx) => (
                <tr
                  key={tx.id}
                  className="border-t border-gray-200 hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-3">{idx + 1}</td>
                  <td className={`px-4 py-3 font-semibold ${tx.type === 'Cash In' ? 'text-green-600' : 'text-red-600'}`}>
                    {tx.type}
                  </td>
                  <td className="px-4 py-3">{tx.amount} BDT</td>
                  <td className="px-4 py-3">{tx.description}</td>
                  <td className="px-4 py-3">{tx.date}</td>
                  <td className="px-4 py-3">{tx.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
