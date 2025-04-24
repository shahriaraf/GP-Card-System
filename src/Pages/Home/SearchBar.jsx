import { useState } from "react";
import { Search, X } from "lucide-react";
import demoUsers from "../../Data/UserData"; // update path if needed

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const filteredUsers = demoUsers.filter((user) =>
    user.nameEnglish.toLowerCase().includes(search.toLowerCase()) ||
    user.nameBengali.includes(search)
  );

  return (
    <div className="bg-gray-50 pt-20 pb-30 relative">
      <div className="p-10 bg-gray-100 max-w-6xl m-auto rounded-2xl">
        <h1 className="text-3xl md:text-5xl text-center font-semibold mb-4 text-gray-900">
          Search For Your Offer
        </h1>
        <p className="text-center text-lg md:text-xl font-semibold mb-10 text-gray-700">
          Recharge your prepaid account or pay bill of your postpaid account here.
        </p>

        {/* Search Form */}
        <form
          className="flex items-center gap-2 w-full max-w-md mx-auto mb-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="আপনার নাম খুজুন..."
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#20ADF8]"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-[#84cdee] via-[#20ADF8] to-[#20ADF8] hover:bg-[#20ADF8] text-white px-6 py-3 rounded-full flex items-center gap-1"
          >
            <Search className="w-5 h-5" />
            <span className="hidden sm:inline text-lg">Search</span>
          </button>
        </form>

        {/* Search Results */}
        {search && (
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md divide-y">
            {filteredUsers.map((user, i) => (
              <div
                key={i}
                onClick={() => setSelectedUser(user)}
                className="flex items-center p-3 hover:bg-gray-200 cursor-pointer transition"
              >
                <img
                  src={user.photo}
                  alt={user.nameEnglish}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-semibold">{user.nameEnglish}</p>
                  <p className="text-sm text-gray-500">{user.nameBengali}</p>
                </div>
              </div>
            ))}
            {filteredUsers.length === 0 && (
              <div className="p-4 text-center text-gray-500">No user found.</div>
            )}
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-transparent backdrop-blur-md bg-opacity-50 z-50 flex items-center justify-center px-4">
          <div className="bg-gray-50 border-2 border-gray-600 p-6 rounded-2xl shadow-lg max-w-lg w-full relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
              onClick={() => setSelectedUser(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <div className="text-center">
              <img
                src={selectedUser.photo}
                alt={selectedUser.nameEnglish}
                className="w-24 h-24 mx-auto border border-gray-600 mb-3"
              />
              <h2 className="text-2xl font-bold mb-1">{selectedUser.nameEnglish}</h2>
              <h3 className="text-lg font-medium text-gray-700 mb-4">{selectedUser.nameBengali}</h3>
              
              <ul className="text-left text-md text-gray-800 space-y-1">
                <li><strong>NID:</strong> {selectedUser.nidNumber}</li>
                <li><strong>Date of Birth:</strong> {selectedUser.dateOfBirth}</li>
                <li><strong>Gender:</strong> {selectedUser.gender}</li>
                <li><strong>Mobile:</strong> {selectedUser.mobileNumber}</li>
                <li><strong>Father's Name:</strong> {selectedUser.fatherNameBengali}</li>
                <li><strong>Mother's Name:</strong> {selectedUser.motherNameBengali}</li>
                <li><strong>Address:</strong> {selectedUser.address}</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
