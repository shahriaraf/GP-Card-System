import { useState } from "react";
import { ArrowRightCircle } from "lucide-react";
import { Link } from "react-router-dom";

const UserManagement = () => {


     const [day, setDay] = useState('');
      const [month, setMonth] = useState('');
      const [year, setYear] = useState('');
    
      const days = Array.from({ length: 31 }, (_, i) => i + 1);
      const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];
      const currentYear = new Date().getFullYear();
      const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
    const [tab, setTab] = useState("pending");

    const pendingData = [
        {
            id: 1,
            name: "Rafiq Hossain",
            number: "01700000001",
            zila: "Dhaka",
            upozila: "Dhanmondi",
            union: "Union-1",
            ward: "Ward-5",
            date: "2025-04-25",
        },
        {
            id: 2,
            name: "Malek Hossain",
            number: "01334955231",
            zila: "Sylhet",
            upozila: "Dhanmondi",
            union: "Union-4",
            ward: "Ward-7",
            date: "2025-05-21",
        },
        {
            id: 3,
            name: "Nur Ahmed",
            number: "01784847343",
            zila: "Dhaka",
            upozila: "Mirpur",
            union: "Union-4",
            ward: "Ward-2",
            date: "2025-04-03",
        },
        {
            id: 4,
            name: "Amina Begom",
            number: "01798458743",
            zila: "Gazipur",
            upozila: "Lalia",
            union: "Union-3",
            ward: "Ward-4",
            date: "2025-04-20",
        },
        // Add more
    ];

    const activeData = [
        {
            id: 1,
            joinDate: "2025-03-10",
            name: "Karim Uddin",
            number: "01700000011",
            userType: "Reguler",
            zila: "Chattogram",
            upozila: "Pahartali",
            status: "Active",
        },
        {
            id: 2,
            joinDate: "2025-03-20",
            name: "Malek Hossain",
            number: "01334955231",
            userType: "Reguler",
            zila: "Sylhet",
            upozila: "Dhanmondi",
            union: "Union-4",
            ward: "Ward-7",
            date: "2025-05-21",
            status: "Active",
        },
        {
            id: 3,
            joinDate: "2025-03-15",
            name: "Nur Ahmed",
            number: "01784847343",
            userType: "Premium",
            zila: "Dhaka",
            upozila: "Mirpur",
            union: "Union-4",
            ward: "Ward-2",
            date: "2025-04-03",
            status: "Active",
        },
        {
            id: 4,
            joinDate: "2025-03-12",
            name: "Amina Begom",
            number: "01798458743",
            userType: "Basic",
            zila: "Gazipur",
            upozila: "Lalia",
            union: "Union-3",
            ward: "Ward-4",
            date: "2025-04-20",
            status: "Dective",
        }
        // Add more
    ];

    const [search, setSearch] = useState("");

    const filteredActive = activeData.filter((user) =>
        user.number.includes(search)
    );

    return (
        <div className="px-4 pt-30 bg-gradient-to-tr from-gray-50 via-[#edf7fc] to-[#84cdee]">
            <div className="mb-6 flex justify-center gap-3">
                {["pending", "active", "create"].map((item) => (
                    <button
                        key={item}
                        onClick={() => setTab(item)}
                        className={`px-5 py-2 rounded-full font-semibold ${tab === item
                            ? 'bg-[#20ADF8] text-white border-[#20ADF8]'
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-100'
                            }`}
                    >
                        {item[0].toUpperCase() + item.slice(1)} List
                    </button>
                ))}
            </div>

            {/* Pending List */}
            {tab === "pending" && (
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <table className="min-w-[1000px] w-full text-left text-sm text-gray-700">
                        <thead className="bg-blue-100 text-xs uppercase">
                            <tr>
                                <th className="px-4 py-3">SL</th>
                                <th className="px-4 py-3">Name</th>
                                <th className="px-4 py-3">Number</th>
                                <th className="px-4 py-3">Zila</th>
                                <th className="px-4 py-3">Upozila</th>
                                <th className="px-4 py-3">Union</th>
                                <th className="px-4 py-3">Ward</th>
                                <th className="px-4 py-3">Date</th>
                                <th className="px-4 py-3">Edit</th>
                                <th className="px-4 py-3">Approve</th>
                                <th className="px-4 py-3">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pendingData.map((user, i) => (
                                <tr key={i} className="border-t hover:bg-gray-50">
                                    <td className="px-4 py-3">{i + 1}</td>
                                    <td className="px-4 py-3">{user.name}</td>
                                    <td className="px-4 py-3">{user.number}</td>
                                    <td className="px-4 py-3">{user.zila}</td>
                                    <td className="px-4 py-3">{user.upozila}</td>
                                    <td className="px-4 py-3">{user.union}</td>
                                    <td className="px-4 py-3">{user.ward}</td>
                                    <td className="px-4 py-3">{user.date}</td>
                                    <td className="px-4 py-3 text-amber-500 cursor-pointer"><button className="py-1 px-3 bg-amber-100 rounded-full">Edit</button></td>
                                    <td className="px-4 py-3 text-green-600 cursor-pointer"><button className="py-1 px-3 bg-green-100 rounded-full">Approve</button></td>
                                    <td className="px-4 py-3 text-red-500 cursor-pointer"><button className="py-1 px-3 bg-red-100 rounded-full">Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Active List */}
            {tab === "active" && (
                <div>
                    <div className="mb-4">
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search by Number"
                            className="border px-4 py-2 rounded-lg w-full max-w-md"
                        />
                    </div>
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <table className="min-w-[1000px] w-full text-left text-sm text-gray-700">
                            <thead className="bg-blue-100 text-xs uppercase">
                                <tr>
                                    <th className="px-4 py-3">SL</th>
                                    <th className="px-4 py-3">Join Date</th>
                                    <th className="px-4 py-3">Name</th>
                                    <th className="px-4 py-3">Number</th>
                                    <th className="px-4 py-3">User Type</th>
                                    <th className="px-4 py-3">Zila</th>
                                    <th className="px-4 py-3">Upozila</th>
                                    <th className="px-4 py-3">View</th>
                                    <th className="px-4 py-3">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredActive.map((user, i) => (
                                    <tr key={i} className="border-t hover:bg-gray-50">
                                        <td className="px-4 py-3">{i + 1}</td>
                                        <td className="px-4 py-3">{user.joinDate}</td>
                                        <td className="px-4 py-3">{user.name}</td>
                                        <td className="px-4 py-3">{user.number}</td>
                                        <td className="px-4 py-3">{user.userType}</td>
                                        <td className="px-4 py-3">{user.zila}</td>
                                        <td className="px-4 py-3">{user.upozila}</td>
                                        <td className="px-4 py-3 text-center">
                                            <Link to={`/user/${user.id}`} className="text-blue-600">
                                                <ArrowRightCircle size={20} />
                                            </Link>
                                        </td>
                                        <td className="px-4 py-3">
                                            <span
                                                className={`px-2 py-1 rounded-full text-xs font-medium ${user.status === "Active"
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-red-100 text-red-700"
                                                    }`}
                                            >
                                                {user.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* Create Form */}
            {tab === "create" && (
                <div className="w-full md:w-full bg-gray-50 flex flex-col py-25 justify-center px-6 sm:px-12 overflow-y-auto rounded-2xl">
                    <h2 className="text-3xl font-bold mb-2 text-gray-800">Create User</h2>
                    <p className="text-sm text-gray-500 mb-6">Fill in the details to register a new user.</p>

                    <form className="space-y-4">
                        {/* Name and Father's Name */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block mb-1 text-gray-600 text-sm">Name <span className="text-red-500">*</span></label>
                                <input type="text" placeholder="John Doe" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                            </div>
                        </div>

                        {/* Mobile Number */}
                        <div>
                            <label className="block mb-1 text-gray-600 text-sm">Mobile Number <span className="text-red-500">*</span></label>
                            <input type="text" placeholder="01XXXXXXXXX" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                        </div>
                        <div>
                            <label className="block mb-1 text-gray-600 text-sm">User Type<span className="text-red-500">*</span></label>
                            <div className="flex gap-4 mt-2">
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="User Type" value="Basic" className="text-[#20ADF8]" />
                                    Basic
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="User Type" value="Reguler" className="text-[#20ADF8]" />
                                    Reguler
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="User Type" value="Premium" className="text-[#20ADF8]" />
                                    Premium
                                </label>
                            </div>
                        </div>


                        {/* Address Info */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div>
                                <label className="block mb-1 text-gray-600 text-sm">Zila <span className="text-red-500">*</span></label>
                                <input type="text" placeholder="Enter Zila" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-600 text-sm">Upozila <span className="text-red-500">*</span></label>
                                <input type="text" placeholder="Enter Upozila" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-600 text-sm">Union <span className="text-red-500">*</span></label>
                                <input type="text" placeholder="Enter Union" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                            </div>
                        </div>
                        <div>
                            <label className="block mb-1 text-gray-600 text-sm">
                                Joining Date <span className="text-red-500">*</span>
                            </label>
                            <div className="flex gap-2">
                                {/* Day Select */}
                                <select
                                    value={day}
                                    onChange={(e) => setDay(e.target.value)}
                                    className="w-1/3 px-3 py-2 border border-gray-300 rounded-md"
                                >
                                    <option value="">Day</option>
                                    {days.map((d) => (
                                        <option key={d} value={d}>{d}</option>
                                    ))}
                                </select>

                                {/* Month Select */}
                                <select
                                    value={month}
                                    onChange={(e) => setMonth(e.target.value)}
                                    className="w-1/3 px-3 py-2 border border-gray-300 rounded-md"
                                >
                                    <option value="">Month</option>
                                    {months.map((m, i) => (
                                        <option key={i} value={m}>{m}</option>
                                    ))}
                                </select>

                                {/* Year Select */}
                                <select
                                    value={year}
                                    onChange={(e) => setYear(e.target.value)}
                                    className="w-1/3 px-3 py-2 border border-gray-300 rounded-md"
                                >
                                    <option value="">Year</option>
                                    {years.map((y) => (
                                        <option key={y} value={y}>{y}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button className="w-full bg-gradient-to-r from-[#84cdee] via-[#20ADF8] to-[#20ADF8] text-white font-semibold py-2 rounded-full hover:opacity-90 transition">
                            Submit
                        </button>
                    </form>

                    {/* Footer Links */}
                    <div className="mt-8 text-sm text-gray-500 text-center space-x-4">
                        <a href="#" className="hover:underline hover:text-[#20ADF8]">Terms & Conditions</a>
                        <span>•</span>
                        <a href="#" className="hover:underline hover:text-[#20ADF8]">Privacy Policy</a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserManagement;
