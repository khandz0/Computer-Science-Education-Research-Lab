import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Beaker } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "People", path: "/people" },
    // { name: "Research", path: "/research" },
    { name: "Projects", path: "/projects" },
    // { name: "Publications", path: "/publications" },
    // { name: "News", path: "/news" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-30 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center" onClick={closeMenu}>
              <Beaker className="h-8 w-8 text-sjsu-blue" />
              <span className="ml-2 text-xl font-semibold text-sjsu-blue">
                CSE Research Lab
              </span>
            </NavLink>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "text-sjsu-gold bg-sjsu-blue"
                      : "text-sjsu-navy hover:bg-sjsu-lightgray"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              buttonType="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-sjsu-blue hover:text-sjsu-blue-dark hover:bg-sjsu-lightgray focus:outline-none"
              aria-expanded={isOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } bg-white border-t border-gray-200`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? "bg-sjsu-blue text-sjsu-gold"
                    : "text-sjsu-navy hover:bg-sjsu-lightgray"
                }`
              }
              onClick={closeMenu}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
