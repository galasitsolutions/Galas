import { useState, memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Hamburger from "../ui/Hamburger";
import Button from "../ui/Button";
import galas from "../../assets/img/icons/galas-it-solutions.png";
import useGsapMenuAnimation from "../../hooks/useGsapMenuAnimation";

const Nav = ({ links }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuRef, barMidRef] = useGsapMenuAnimation(isMenuOpen);

  const handleToggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center relative">
      <div className="flex items-center justify-between lg:flex-row lg:w-full">
        {/* Logo */}
        <Link to="/" aria-label="Homepage" className="flex items-center">
          <img
            className="w-auto h-10 sm:h-12"
            src={galas}
            alt="Galas IT Solutions"
          />
        </Link>

        {/* Hamburger Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            id="toggle"
            aria-label="Toggle menu"
            onClick={handleToggleMenu}
            className={`text-gray-700 hover:text-blue-500 focus:outline-none ${
              isMenuOpen ? "open" : ""
            }`}
          >
            <Hamburger barMidRef={barMidRef} />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav
          ref={menuRef}
          className={`lg:flex lg:items-center absolute top-24 left-0 w-full lg:w-auto bg-[#151515] lg:relative lg:top-0 transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "nav-menu-open" : "nav-menu-closed"
          }`}
          role="navigation"
          aria-label="Main Navigation"
        >
          <ul className="flex flex-col text-center lg:flex-row gap-4 lg:gap-8 lg:space-y-0 space-y-4">
            {links.map(({ path, label }) => (
              <li
                key={path}
                className="transition-colors duration-300 hover:text-blue-500"
              >
                <Link
                  className="nav-link w-[10%] lg:w-auto m-auto lg:m-0"
                  to={path}
                >
                  {label}
                </Link>
              </li>
            ))}
            {/* Mobile Button */}
            <li className="lg:hidden px-4 pb-4">
            <Link to={"/#contact"} >
                <Button text="Let's Talk" />
              </Link>
            </li>
          </ul>
        </nav>

        {/* Desktop Button */}
        <div className="hidden lg:block">
        <Link to={"/#contact"} >
            <Button text="Let's Talk" />
          </Link>
        </div>
      </div>
    </div>
  );
};

Nav.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// Assign a display name for easier debugging
Nav.displayName = "Nav";

export default memo(Nav);
