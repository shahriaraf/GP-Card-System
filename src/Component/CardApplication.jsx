
import DateOfBirth from "./DateOfBirth";
import CardDetails from "./CardDetails";


const CardApplication = () => {


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
                <h2 className="text-3xl font-bold mb-2 text-gray-800">Card Application</h2>
                <p className="text-sm text-gray-500 mb-6">Fill in the details to register a new cardholder.</p>

                <form className="space-y-4">
                    {/* Name, Father's Name, Mother's Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                            <label className="block mb-1 text-gray-600 text-sm">Name <span className="text-red-500">*</span></label>
                            <input type="text" placeholder="John Doe" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                        </div>
                        <div>
                            <label className="block mb-1 text-gray-600 text-sm">Father's Name <span className="text-red-500">*</span></label>
                            <input type="text" placeholder="Mr. Doe" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                        </div>
                        <div>
                            <label className="block mb-1 text-gray-600 text-sm">Mother's Name <span className="text-red-500">*</span></label>
                            <input type="text" placeholder="Mrs. Doe" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                        </div>
                    </div>

                    {/* DOB, NID No, Mobile No */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <DateOfBirth></DateOfBirth>
                        <div>
                            <label className="block mb-1 text-gray-600 text-sm">NID Number <span className="text-red-500">*</span></label>
                            <input type="text" placeholder="1234567890" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                        </div>
                        <div>
                            <label className="block mb-1 text-gray-600 text-sm">Mobile Number <span className="text-red-500">*</span></label>
                            <input type="text" placeholder="01XXXXXXXXX" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                        </div>
                    </div>

                    {/* Occupation, Gender, Religion */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                            <label className="block mb-1 text-gray-600 text-sm">Occupation <span className="text-red-500">*</span></label>
                            <select className="w-full px-4 py-2 border border-gray-300 rounded-md">
                                <option value="">Select Occupation</option>
                                <option>Engineer</option>
                                <option>Doctor</option>
                                <option>Teacher</option>
                                <option>Farmer</option>
                                <option>Student</option>
                                <option>Businessman</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-1 text-gray-600 text-sm">Gender <span className="text-red-500">*</span></label>
                            <select className="w-full px-4 py-2 border border-gray-300 rounded-md">
                                <option value="">Select Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-1 text-gray-600 text-sm">Religion <span className="text-red-500">*</span></label>
                            <select className="w-full px-4 py-2 border border-gray-300 rounded-md">
                                <option value="">Select Religion</option>
                                <option>Islam</option>
                                <option>Hinduism</option>
                                <option>Christianity</option>
                                <option>Buddhism</option>
                                <option>Other</option>
                            </select>
                        </div>
                    </div>

                    {/* Photo Upload */}
                    <div>
                        <label className="block mb-1 text-gray-600 text-sm">Upload Photo <span className="text-red-500">*</span></label>
                        <input type="file" accept="image/*" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                    </div>

                    <CardDetails></CardDetails>

                    {/* Other Member Information */}
                    <div className="mt-8">
                        <h3 className="text-xl font-bold mb-4 text-gray-800">Other Member Information</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block mb-1 text-gray-600 text-sm">Member Name <span className="text-red-500">*</span></label>
                                <input type="text" placeholder="Jane Doe" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-600 text-sm">Member Father's Name <span className="text-red-500">*</span></label>
                                <input type="text" placeholder="Mr. Smith" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                            <div>
                                <label className="block mb-1 text-gray-600 text-sm">Member Age <span className="text-red-500">*</span></label>
                                <input type="number" placeholder="30" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                            </div>
                            <div>
                                <label className="block mb-1 text-gray-600 text-sm">Member Occupation <span className="text-red-500">*</span></label>
                                <select className="w-full px-4 py-2 border border-gray-300 rounded-md">
                                    <option value="">Select Occupation</option>
                                    <option>Engineer</option>
                                    <option>Doctor</option>
                                    <option>Teacher</option>
                                    <option>Farmer</option>
                                    <option>Student</option>
                                    <option>Businessman</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button className="w-full bg-gradient-to-r from-[#84cdee] via-[#20ADF8] to-[#20ADF8] text-white font-semibold py-2 rounded-full hover:opacity-90 transition">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CardApplication;
