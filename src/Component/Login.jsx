import { useState } from "react";

const Login = () => {
  const [activeTab, setActiveTab] = useState("otp");

  return (
    <div className="min-h-screen flex">
      {/* Left Section */}
      <div className="w-1/2 hidden bg-gradient-to-tr from-[#20ADF8] via-[#bbeaff] to-gray-50 md:flex flex-col justify-center items-center px-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Welcome to <br />
          <span className="text-5xl font-extrabold">GP-Card-System</span>
        </h1>
        <img
          src="https://eshop.banglalink.net/static/media/Mobile.030dc57f23fdbaf3ed9c.png"
          alt="Devices"
          className="w-96"
        />
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 mt-30 md:mt-0 bg-gray-50 flex flex-col py-6 justify-center px-12">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">Login</h2>
        <p className="text-sm text-gray-500 mb-6">
          Enter your Mobile number/Email to Log in.
        </p>

        {/* Tabs */}
        <div className="flex gap-2 bg-gray-200 rounded-full p-1 w-fit mb-6">
          <button
            onClick={() => setActiveTab("otp")}
            className={`px-6 py-1 rounded-full font-semibold ${
              activeTab === "otp"
                ? "bg-gradient-to-r from-[#84cdee] via-[#20ADF8] to-[#20ADF8] shadow text-white"
                : "text-gray-500"
            }`}
          >
            OTP
          </button>
          <button
            onClick={() => setActiveTab("password")}
            className={`px-6 py-1 rounded-full font-semibold ${
              activeTab === "password"
                ? "bg-gradient-to-r from-[#84cdee] via-[#20ADF8] to-[#20ADF8] shadow text-white"
                : "text-gray-500"
            }`}
          >
            Password
          </button>
        </div>

        {/* Input */}
        <div className="mb-4">
          <label className="block mb-1 text-gray-600 text-sm">
            Mobile Number/Email *
          </label>
          <input
            type="text"
            placeholder="01xxxxxxxxx or user@website.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-[#20ADF8]"
          />
        </div>

        {/* Stay signed in */}
        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            id="staySignedIn"
            className="mr-2 accent-[#20ADF8]"
          />
          <label htmlFor="staySignedIn" className="text-sm text-gray-600">
            Stay signed in
          </label>
        </div>

        {/* Button */}
        <button className="w-full bg-gradient-to-r from-[#84cdee] via-[#20ADF8] to-[#20ADF8] text-white font-semibold py-2 rounded-full cursor-not-allowed">
          Send OTP
        </button>

        {/* Footer Links */}
        <div className="mt-8 text-sm text-gray-500 text-center space-x-4">
          <a href="#" className="hover:underline hover:text-[#20ADF8]">
            Terms & Conditions
          </a>
          <span>•</span>
          <a href="#" className="hover:underline hover:text-[#20ADF8]">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
