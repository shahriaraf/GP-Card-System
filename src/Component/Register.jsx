import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-[#20ADF8]"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-[#20ADF8]"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-[#20ADF8]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#84cdee] via-[#20ADF8] to-[#20ADF8] hover:bg-[#20ADF8] text-white py-2 rounded-md transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/লগইন" className="text-[#20ADF8] hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
