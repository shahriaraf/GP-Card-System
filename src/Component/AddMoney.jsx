const AddMoney = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-gray-50 via-[#edf7fc] to-[#84cdee] px-4">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
            Add Money
          </h2>
  
          <form className="space-y-6">
            {/* Amount Field */}
            <div>
              <input
                type="number"
                placeholder="Enter amount (৳)"
                className="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-[#20ADF8]"
                min="1"
                required
              />
            </div>
  
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#84cdee] via-[#20ADF8] to-[#20ADF8] text-white font-semibold py-2 rounded-full hover:opacity-90 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default AddMoney;
  