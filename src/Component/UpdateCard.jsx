import DateOfBirth from "./DateOfBirth";
import CardDetails from "./CardDetails";
import Swal from "sweetalert2";
import { useRef } from "react";
import { useParams } from "react-router-dom";

const UpdateCard = () => {

    const { id } = useParams();  // Get the card ID from the URL params

// You could fetch this data from an API or have it preloaded.
const cardData = [
  {
    id: 1,
    name: 'Khaled Ahmed',
    number: '01723984765',
    date: '2025-04-20',
    status: 'Pending',
  },
  {
    id: 2,
    name: 'Nusrat Jahan',
    number: '01392874564',
    date: '2025-04-21',
    status: 'Completed',
  },
  {
    id: 3,
    name: 'Tanvir Ahmed',
    number: '01726537487',
    date: '2025-04-22',
    status: 'Pending',
  },
];

const card = cardData.find((card) => card.id === parseInt(id));  // Find the card by ID




  const formRef = useRef(null);

  // Function to show SweetAlert2 modal
  const showConfirmationModal = () => {
    Swal.fire({
      title: 'Confirm Submission',
      text: 'Are you sure all the details are correct before updating?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, Confirm',
      cancelButtonText: 'No, Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        formRef.current.reset();
        Swal.fire(
          'Submitted!',
          'Your information has been successfully updated.',
          'success'
        );
        
        // Handle form submission here, such as sending data to an API
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Update has been cancelled. You can review your data again.',
          'info'
        );
      }
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    showConfirmationModal(); // Show confirmation modal when the user submits the form
  };



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
        <h2 className="text-3xl font-bold mb-2 text-gray-800">Update {card.name}'s Details</h2>
        <p className="text-sm text-gray-500 mb-6">Fill in the details to update your data.</p>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          {/* Name and Father's Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-gray-600 text-sm">Name <span className="text-red-500">*</span></label>
              <input type="text" placeholder="John Doe" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
            </div>
            <div>
              <label className="block mb-1 text-gray-600 text-sm">Father's Name <span className="text-red-500">*</span></label>
              <input type="text" placeholder="Mr. Doe" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
            </div>
          </div>

          {/* Religion and Gender */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            <div>
              <label className="block mb-1 text-gray-600 text-sm">Gender <span className="text-red-500">*</span></label>
              <div className="flex gap-4 mt-2">
                <label className="flex items-center gap-2">
                  <input type="radio" name="gender" value="Male" className="text-[#20ADF8]" />
                  Male
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="gender" value="Female" className="text-[#20ADF8]" />
                  Female
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="gender" value="Other" className="text-[#20ADF8]" />
                  Other
                </label>
              </div>
            </div>
          </div>

          {/* Occupation and Nationality */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              <label className="block mb-1 text-gray-600 text-sm">Nationality <span className="text-red-500">*</span></label>
              <input type="text" placeholder="Bangladeshi" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
            </div>
          </div>

          {/* DOB and Voter ID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <DateOfBirth></DateOfBirth>
            <div>
              <label className="block mb-1 text-gray-600 text-sm">Voter ID Number <span className="text-red-500">*</span></label>
              <input type="text" placeholder="1234567890" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
            </div>
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block mb-1 text-gray-600 text-sm">Mobile Number <span className="text-red-500">*</span></label>
            <input type="text" placeholder="01XXXXXXXXX" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
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

          {/* Word No - select type */}
          <div>
            <label className="block mb-1 text-gray-600 text-sm">Word No <span className="text-red-500">*</span></label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-md">
              <option value="">Select Word No</option>
              {[...Array(9)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  Word No {i + 1}
                </option>
              ))}
            </select>
          </div>

          {/* Upload Picture */}
          <div>
            <label className="block mb-1 text-gray-600 text-sm">Upload Photo <span className="text-red-500">*</span></label>
            <input type="file" accept="image/*" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
          </div>

          {/* Select Card - checkbox but only one selectable */}
          <CardDetails></CardDetails>

          {/* Other Member Info */}
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
                <label className="block mb-1 text-gray-600 text-sm">Gender <span className="text-red-500">*</span></label>
                <div className="flex gap-4 mt-2">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="gender" value="Male" className="text-[#20ADF8]" />
                    Male
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="gender" value="Female" className="text-[#20ADF8]" />
                    Female
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="gender" value="Other" className="text-[#20ADF8]" />
                    Other
                  </label>
                </div>
              </div>
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
    </div>
  );
};

export default UpdateCard;