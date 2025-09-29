import { useState } from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false); // Close mobile menu after click

  const sections = ["home", "about", "skills", "experience", "projects", "contact"];

  return (
    <nav className="bg-[#0f1419] shadow-lg sticky top-0 z-50 border-b border-gray-700">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-white">Akashi Portfolio</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <Link
                key={section}
                to={section}
                smooth={true}
                duration={500}
                className="text-gray-300 hover:text-blue-400 transition cursor-pointer"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

      
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-2 border-t border-gray-700 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              {sections.map((section) => (
                <Link
                  key={section}
                  to={section}
                  smooth={true}
                  duration={500}
                  onClick={closeMenu} 
                  className="text-gray-300 hover:text-blue-400 transition py-2 px-4 hover:bg-gray-800 rounded-md cursor-pointer"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
