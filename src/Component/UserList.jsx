import React from "react";
import UserData from "../Data/UserData";

const UserList = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Demo NID Users</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {UserData.map((user, index) => (
          <div key={index} className="p-4 border rounded shadow-md">
            <img src={user.photo} alt={user.nameEnglish} className="w-24 h-24 rounded-full mx-auto mb-2" />
            <h3 className="text-xl font-semibold text-center">{user.nameEnglish}</h3>
            <p className="text-center text-sm text-gray-600">{user.nameBengali}</p>
            <ul className="mt-2 text-sm">
              <li><strong>NID:</strong> {user.nidNumber}</li>
              <li><strong>DOB:</strong> {user.dateOfBirth}</li>
              <li><strong>Gender:</strong> {user.gender}</li>
              <li><strong>Mobile:</strong> {user.mobileNumber}</li>
              <li><strong>Address:</strong> {user.address}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
