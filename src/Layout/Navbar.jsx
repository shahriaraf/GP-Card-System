import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = ["Home", "লগইন", "নিবন্ধন", "ডিসকাউন্ট পয়েন্ট"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 py-4 flex justify-between items-center">
        <h1 className="text-2xl md:text-4xl font-bold text-[#20ADF8]">
          <span>GP</span> <span>Card</span> <span>System</span>
        </h1>

        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`/${link.toLowerCase()}`}
              className={`text-md font-medium transition ${
                scrolled ? "text-gray-800 hover:text-[#20ADF8]" : "text-gray-800 hover:text-[#20ADF8]"
              }`}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden pt-2">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow-md">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`/${link.toLowerCase()}`}
              className="block text-gray-700 font-medium hover:text-[#20ADF8] transition"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
