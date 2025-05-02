import { ArrowRightCircle } from 'lucide-react';



const CardList = () => {
  const cardData = [
    {
      name: 'Shoumo Araf',
      number: 'GP-1001',
      date: '2025-04-20',
      status: 'Pending',
      pic: 'https://i.pravatar.cc/40?img=1',
    },
    {
      name: 'Anika Rahman',
      number: 'GP-1002',
      date: '2025-04-21',
      status: 'Completed',
      pic: 'https://i.pravatar.cc/40?img=2',
    },
    {
      name: 'Tanvir Hasan',
      number: 'GP-1003',
      date: '2025-04-22',
      status: 'Pending',
      pic: 'https://i.pravatar.cc/40?img=3',
    },
  ];

  return (
    <div className="w-full px-4 pt-30 sm:px-6 lg:px-12 py-10 bg-gradient-to-tr from-gray-50 via-[#edf7fc] to-[#84cdee]">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
        Card Registration List
      </h2>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="w-full overflow-x-auto">
          <table className="min-w-[700px] w-full text-left text-sm text-gray-700">
            <thead className="bg-blue-100 text-gray-700 uppercase text-xs">
              <tr>
                <th className="px-4 py-3">SL</th>
                <th className="px-4 py-3">Pic</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Number</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-center">View More</th>
              </tr>
            </thead>
            <tbody>
              {cardData.map((card, idx) => (
                <tr key={idx} className="border-t border-gray-200 hover:bg-gray-50 transition">
                  <td className="px-4 py-3">{idx + 1}</td>
                  <td className="px-4 py-3">
                    <img
                      src={card.pic}
                      alt={card.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </td>
                  <td className="px-4 py-3">{card.name}</td>
                  <td className="px-4 py-3">{card.number}</td>
                  <td className="px-4 py-3">{card.date}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        card.status === 'Completed'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {card.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <button className="text-blue-600 hover:text-blue-800">
                      <ArrowRightCircle size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CardList;
