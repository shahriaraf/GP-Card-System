import { FaMoneyBillWave, FaMobileAlt, FaUniversity, FaRegFileAlt, FaShoppingCart, FaUserShield, FaUmbrellaBeach, FaGraduationCap, FaPhoneAlt } from 'react-icons/fa';
import { SiPayoneer } from 'react-icons/si';
import { MdOutlineCreditCard, MdAttachMoney } from 'react-icons/md';

const services = [
  { icon: <FaMoneyBillWave className="text-blue-500 text-4xl" />, title: "Transfer" },
  { icon: <FaRegFileAlt className="text-purple-500 text-4xl" />, title: "Utility" },
  { icon: <FaMobileAlt className="text-green-500 text-4xl" />, title: "Recharge" },
  { icon: <MdAttachMoney className="text-pink-500 text-4xl" />, title: "MFS" },
  { icon: <SiPayoneer className="text-black text-4xl" />, title: "Payoneer" },
  { icon: <MdOutlineCreditCard className="text-purple-500 text-4xl" />, title: "Card Services" },
  { icon: <FaUserShield className="text-green-500 text-4xl" />, title: "A/C Services" },
  { icon: <FaUmbrellaBeach className="text-purple-500 text-4xl" />, title: "Insurance Pay" },
  { icon: <FaUniversity className="text-purple-500 text-4xl" />, title: "Govt. Fee" },
  { icon: <FaGraduationCap className="text-blue-500 text-4xl" />, title: "Tuition Fee" },
  { icon: <FaShoppingCart className="text-purple-500 text-4xl" />, title: "e-Commerce" },
  { icon: <FaPhoneAlt className="text-orange-500 text-4xl" />, title: "Contact Center" },
];

const UserDashboard = () => {
  return (
    <div className="bg-gradient-to-tr from-gray-50 via-[#bee9ff] to-[#3fc1fd] min-h-screen pt-30 pb-10 px-4">

      {/* Top Section */}
      <div className="bg-sky-500 rounded-2xl text-white p-6 relative overflow-hidden mb-8">
        <h2 className="text-lg font-semibold mb-2">Welcome to</h2>
        <h1 className="text-2xl font-bold">GP Card</h1>

        {/* Balance Card */}
        <div className="mt-6 bg-sky-600 p-4 rounded-xl flex items-center justify-between">
          <div>
            <p className="text-sm md:text-xl font-semibold">04934004459</p>
            <a href="#" className="text-sm underline mt-1 block">All Account Info</a>
          </div>
          <button className="bg-white text-sky-600 px-2 py-1 md:px-6 md:py-3 rounded-full font-bold text-sm">
            Tap for Balance
          </button>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-3 gap-3">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center text-center p-4 bg-gray-50 border border-gray-400 hover:bg-sky-200 transition-all cursor-pointer"
          >
            {service.icon}
            <p className="text-sm mt-3 font-medium text-gray-700">{service.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
