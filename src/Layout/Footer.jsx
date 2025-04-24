const Footer = () => {
    return (
      <footer className="bg-[#1d1d1d] text-white py-10 px-4 text-center">
        <div className="flex flex-col items-center gap-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Grameenphone_Logo_GP_Logo.svg/1075px-Grameenphone_Logo_GP_Logo.svg.png"
            alt="Banglalink Logo"
            className="w-16"
          />
  
          <p className="text-sm max-w-xl">
            <span className="text-[#20ADF8] font-medium">pr@grameenphone.net</span> Tigers' Den, House 4 (SW), Bir Uttam Mir Shawkat Sharak Gulshan 1, Dhaka 1212, Bangladesh
          </p>
  
          <p className="text-sm flex items-center gap-2">
          <i className="fa-solid fa-phone text-[#20ADF8]"></i> <span className="text-white">+8801711304121</span>
          </p>
  
          <p className="text-sm flex items-center gap-2">
            ✉️ <span className="text-white">infogrameenphone.net</span>
          </p>
        </div>
  
        <hr className="border-gray-600 my-6 w-full max-w-4xl mx-auto" />
  
        <p className="text-xs text-gray-400">
          © 2025 - Grameenphone Digital Communication Limited - All rights reserved
        </p>
      </footer>
    );
  };
  
  export default Footer;
  