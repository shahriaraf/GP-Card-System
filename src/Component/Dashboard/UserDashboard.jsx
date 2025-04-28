import {
    FaIdCard, FaClipboardList, FaMoneyBillWave, FaUsers,
    FaUserShield, FaUserCog, FaUser, FaCogs,
    FaGlobe, FaSignOutAlt, FaMoneyCheckAlt
} from 'react-icons/fa';
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const services = [
    { icon: <FaIdCard className="text-blue-500 text-4xl" />, title: "Card Registration", link: "card-registration"},
    { icon: <FaClipboardList className="text-black text-4xl" />, title: "Card List", link: "card-list" },
    { icon: <FaBangladeshiTakaSign className="text-green-700 text-4xl" />, title: "Add Money", link: "add-money" },
    { icon: <FaMoneyBillWave className="text-green-700 text-4xl" />, title: "Transaction Information", link: "transaction-information" },
    { icon: <FaMoneyCheckAlt className="text-green-700 text-4xl" />, title: "Balance Transfer", link: "balance-transfer" },
    { icon: <FaUsers className="text-blue-700 text-4xl" />, title: "My Team", link: "my-team" },
    { icon: <FaUserShield className="text-emerald-500 text-4xl" />, title: "Report", link: "report" },
    { icon: <FaUserCog className="text-blue-700 text-4xl" />, title: "User Manage", link: "user-manage" },
    { icon: <FaUser className="text-blue-700 text-4xl" />, title: "My Profile", link: "my-profile" },
    { icon: <FaCogs className="text-gray-500 text-4xl" />, title: "Settings", link: "settings" },
    { icon: <FaGlobe className="text-sky-500 text-4xl" />, title: "Web Settings", link: "web-settings" },
    { icon: <FaSignOutAlt className="text-red-600 text-4xl" />, title: "Log Out", link: "log-out" },
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
                    <Link to={`/${service.link.toLowerCase()}`} key={idx}>
                        <div
                            key={idx}
                            className="flex flex-col items-center justify-center text-center p-4 bg-gray-50 border border-gray-400 hover:bg-sky-200 transition-all cursor-pointer"
                        >
                            {service.icon}
                            <p className="text-sm mt-3 font-medium text-gray-700">{service.title}</p>
                        </div>
                    </Link>

                ))}
            </div>
        </div>
    );
};

export default UserDashboard;
