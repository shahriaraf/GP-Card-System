import { useEffect, useState } from "react";
import { Menu, X, User } from "lucide-react";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = ["Home", "Login", "Register", "Discount", "Card Application"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 py-4 flex justify-between items-center relative">
        {/* Logo */}
        <div className="flex justify-center items-center gap-2">
          
        <h1 className="text-2xl md:text-4xl font-bold text-[#20ADF8]">
          <span>GP</span> <span>Card</span>
        </h1>
        <div className="border h-5 md:h-8 border-gray-400"></div>
        <img className="w-7 h-7 md:w-10 md:h-10" src="https://i.ibb.co.com/pjhGfYkP/grameenphone-logo-png-seeklogo-611778-removebg-preview.png" alt="" />

        </div>
     
        {/* Right side - Menu Button + User */}
        <div className="flex items-center space-x-4">
          {/* Menu Button */}
          <button onClick={toggleDrawer} className="p-2">
            {isDrawerOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* User Icon */}
          <div className="relative">
            <button onClick={toggleUserMenu} className="p-2">
              <User size={28} />
            </button>

            {/* User Dropdown */}
            <div
              className={`absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg overflow-hidden transition-all duration-300 transform ${
                isUserMenuOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
              }`}
            >
              <a
                href="/profile"
                className="block px-4 py-3 text-gray-700 hover:bg-[#20ADF8] hover:text-white transition"
                onClick={() => setIsUserMenuOpen(false)}
              >
                Profile
              </a>
              <a
                href="/user-dashboard"
                className="block px-4 py-3 text-gray-700 hover:bg-[#20ADF8] hover:text-white transition"
                onClick={() => setIsUserMenuOpen(false)}
              >
                Dashboard
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-1/2 md:w-64 bg-gray-50 shadow-lg z-40 transform transition-transform duration-300 ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold text-[#20ADF8]">Menu</h2>
          <button onClick={toggleDrawer}>
            <X size={24} />
          </button>
        </div>
        <div className="p-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`/${link.toLowerCase()}`}
              className="block text-gray-700 font-medium hover:text-[#20ADF8] transition"
              onClick={() => setIsDrawerOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      {/* Drawer Backdrop */}
      {isDrawerOpen && (
        <div
          onClick={toggleDrawer}
          className="fixed inset-0 bg-black opacity-30 z-30"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
