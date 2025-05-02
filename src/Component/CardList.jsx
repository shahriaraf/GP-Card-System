import { ArrowRightCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CardList = () => {
  const cardData = [
    {
      id: 1,  // Add an `id` for each card to use in the route
      name: 'Khaled Ahmed',
      number: '01723984765',
      date: '2025-04-20',
      status: 'Pending',
      pic: 'https://i.ibb.co.com/kVPVkMtz/passport-2.jpg',
    },
    {
      id: 2,
      name: 'Nusrat Jahan',
      number: '01392874564',
      date: '2025-04-21',
      status: 'Completed',
      pic: 'https://i.ibb.co.com/C5t5RfKf/passport-1.webp',
    },
    {
      id: 3,
      name: 'Tanvir Ahmed',
      number: '01726537487',
      date: '2025-04-22',
      status: 'Pending',
      pic: 'https://i.ibb.co.com/bhBwk3S/passport-4.jpg',
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
                    {/* Link to the card details page */}
                    <Link to={`/card/${card.id}`} className="text-blue-600 hover:text-blue-800">
                      <ArrowRightCircle size={20} />
                    </Link>
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
