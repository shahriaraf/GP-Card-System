const CardApplication = () => {
    return (
      <div className="min-h-screen flex">
        {/* Left Section */}
        <div className="w-5/12 hidden md:flex flex-col justify-center items-center bg-gradient-to-tr from-[#20ADF8] via-[#bbeaff] to-gray-50 px-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Card Application<br />
            <span className="text-5xl font-extrabold">GP Card</span>
          </h1>
          <img
            src="https://eshop.banglalink.net/static/media/Mobile.030dc57f23fdbaf3ed9c.png"
            alt="Devices"
            className="w-96"
          />
        </div>
  
        {/* Right Section */}
        <div className="w-full md:w-3/5 bg-gray-50 flex flex-col py-25 px-6 sm:px-12 overflow-y-auto">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">Card Application Form</h2>
          <p className="text-sm text-gray-500 mb-6">Fill in all the required information.</p>
  
          <form className="space-y-4">
  
            {/* Personal Info */}
            <InputField label="Name *" />
            <InputField label="Father's Name *" />
            <InputField label="Mother's Name *" />
  
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField label="Date of Birth *" type="date" />
              <InputField label="NID No *" />
            </div>
  
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField label="Mobile No *" />
              <InputField label="Occupation *" />
            </div>
  
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField label="Gender *" placeholder="Male / Female / Other" />
              <InputField label="Religion *" />
            </div>
  
            <div>
              <label className="block mb-1 text-gray-600 text-sm">Upload Photo *</label>
              <input
                type="file"
                accept="image/*"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#20ADF8]"
              />
            </div>
  
            {/* Other Member Info */}
            <h3 className="text-lg font-semibold text-gray-700 mt-8">Other Member</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField label="Name" />
              <InputField label="Father's Name" />
              <InputField label="Mother's Name" />
              <InputField label="Gender" />
              <InputField label="Age" />
              <InputField label="Occupation" />
            </div>
  
            {/* Card Details */}
            <h3 className="text-lg font-semibold text-gray-700 mt-8">Card Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField label="Card No *" />
              <InputField label="Fee (৳) *" type="number" />
              <InputField label="Expired Date *" type="date" />
              <InputField label="Type *" placeholder="Regular / Premium" />
            </div>
  
            {/* Verifier Info */}
            <h3 className="text-lg font-semibold text-gray-700 mt-8">Verifier Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <InputField label="Verifier's ID No *" />
              <InputField label="Verifier's Name *" />
              <InputField label="Verifier's Mobile No *" />
            </div>
  
            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#84cdee] via-[#20ADF8] to-[#20ADF8] text-white font-semibold py-2 rounded-full hover:opacity-90 transition mt-6"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  // Reusable Input Field Component
  const InputField = ({ label, type = "text", placeholder }) => (
    <div>
      <label className="block mb-1 text-gray-600 text-sm">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#20ADF8]"
      />
    </div>
  );
  
  export default CardApplication;
  