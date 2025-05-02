import React from 'react';
import { useParams, Link } from 'react-router-dom';

const UserDetails = () => {
  const { id } = useParams();  // Get the card ID from the URL params

  // You could fetch this data from an API or have it preloaded.
  const cardData = [
    {
      id: 1,
      name: 'Khaled Ahmed',
      number: '01723984765',
      date: '2025-04-20',
      status: 'Pending',
      pic: 'https://i.ibb.co.com/kVPVkMtz/passport-2.jpg',
      details: 'Detailed information about Khaled Ahmed...',
    },
    {
      id: 2,
      name: 'Nusrat Jahan',
      number: '01392874564',
      date: '2025-04-21',
      status: 'Completed',
      pic: 'https://i.ibb.co.com/C5t5RfKf/passport-1.webp',
      details: 'Detailed information about Nusrat Jahan...',
    },
    {
      id: 3,
      name: 'Tanvir Ahmed',
      number: '01726537487',
      date: '2025-04-22',
      status: 'Pending',
      pic: 'https://i.ibb.co.com/bhBwk3S/passport-4.jpg',
      details: 'Detailed information about Tanvir Ahmed...',
    },
  ];

  const card = cardData.find((card) => card.id === parseInt(id));  // Find the card by ID

  return (
    <div className="pt-30 pb-30 text-center bg-gradient-to-tr from-gray-50 via-[#bee9ff] to-[#3fc1fd]">
      {card ? (
        <>
        <div className='flex items-center justify-center'>
        <img
            src={card.pic}
            alt={card.name}
            className="w-32 h-full md:w-64 md:h-full flex rounded-md object-cover mb-4"
          />
        </div>
         
          <h2 className="text-2xl font-bold">{card.name}</h2>
          <p className="text-lg text-gray-600">Number: {card.number}</p>
          <p className="text-lg text-gray-600">Date: {card.date}</p>
          <p className="text-lg text-gray-600">Status: {card.status}</p>

          {/* Update button */}
          <Link to={`/update/${card.id}`} className="mt-4 inline-block bg-gradient-to-r from-[#84cdee] via-[#20ADF8] to-[#20ADF8] text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Update Details
          </Link>
        </>
      ) : (
        <p>Card not found!</p>
      )}
    </div>
  );
};

export default UserDetails;
