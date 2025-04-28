const MemberRegistration = () => {
    return (
      <div className="min-h-screen flex">
        {/* Left Section */}
        <div className="w-5/12 hidden bg-gradient-to-tr from-[#20ADF8] via-[#bbeaff] to-gray-50 md:flex flex-col justify-center items-center px-10">
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
        <div className="w-full md:w-3/5 bg-gray-50 flex flex-col py-25 justify-center px-6 sm:px-12 overflow-y-auto">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">Member Registration</h2>
          <p className="text-sm text-gray-500 mb-6">
            Fill in the details to register a new cardholder.
          </p>
  
          <form className="space-y-4">
  
            {/* Name, Father's Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField label="Name *" placeholder="John Doe" />
              <InputField label="Father's Name *" placeholder="Mr. Doe" />
            </div>
  
            {/* Religion, Gender */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField label="Religion *" placeholder="Islam" />
              <InputField label="Gender *" placeholder="Male / Female" />
            </div>
  
            {/* Occupation, Nationality */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField label="Occupation *" placeholder="Engineer" />
              <InputField label="Nationality *" placeholder="Bangladeshi" />
            </div>
  
            {/* DOB, Voter ID Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField label="Date of Birth *" type="date" />
              <InputField label="Voter ID Number *" placeholder="1234567890" />
            </div>
  
            {/* Mobile Number */}
            <InputField label="Mobile Number *" type="text" placeholder="01XXXXXXXXX" />
  
            {/* Address Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <InputField label="Zila *" placeholder="Gazipur" />
              <InputField label="Upozila *" placeholder="Kaliakair" />
              <InputField label="Union *" placeholder="Boali" />
            </div>
  
            {/* Ward No */}
            <InputField label="Word No *" placeholder="Ward No. 3" />
  
            {/* Upload Picture */}
            <div>
              <label className="block mb-1 text-gray-600 text-sm">Upload Photo *</label>
              <input
                type="file"
                accept="image/*"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-[#20ADF8]"
              />
            </div>
  
            {/* Select Card */}
            <div>
              <label className="block mb-1 text-gray-600 text-sm">Select Card *</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-[#20ADF8]">
                <option>Select Card Type</option>
                <option>Gold Card</option>
                <option>Silver Card</option>
                <option>Platinum Card</option>
              </select>
            </div>
  
            {/* Other Member Information */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Other Member Information</h3>
  
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField label="Member Name *" placeholder="Jane Doe" />
                <InputField label="Member Father's Name *" placeholder="Mr. Smith" />
              </div>
  
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField label="Member Age *" type="number" placeholder="30" />
                <InputField label="Member Gender *" placeholder="Male / Female" />
              </div>
            </div>
  
            {/* Submit */}
            <button className="w-full bg-gradient-to-r from-[#84cdee] via-[#20ADF8] to-[#20ADF8] text-white font-semibold py-2 rounded-full hover:opacity-90 transition">
              Submit
            </button>
          </form>
  
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
  
  // Reusable input field component
  const InputField = ({ label, type = "text", placeholder }) => (
    <div>
      <label className="block mb-1 text-gray-600 text-sm">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-[#20ADF8]"
      />
    </div>
  );
  
  export default MemberRegistration;  