import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";
import Hamburger from "./Hamburger";
import Button from "./Button";

const Nav = ({ links }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => setIsMenuOpen((prevState) => !prevState);

  return (
    <div className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center ">
      <div className="flex h-12 items-center  justify-between lg:flex-row  lg:w-full">
        <Link to="/" aria-label="Homepage">
          <img
            className="w-auto h-10 sm:h-12"
            src="https://galasitsolutions.com/src/assets/img/logo/galas-it-solutions.png"
            alt="Galas IT Solutions"
          />
        </Link>

        <div className="lg:hidden flex">
          <button
            aria-label="Toggle menu"
            onClick={handleToggleMenu}
            className="text-gray-700 hover:text-blue-500 focus:outline-none"
          >
            <Hamburger isOpen={isMenuOpen} />
          </button>
        </div>

        <nav
          className={`lg:relative lg:flex lg:items-center  ${
            isMenuOpen ? "block" : "hidden"
          } lg:block`}
          role="navigation"
          aria-label="Main Navigation"
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-12 lg:space-y-0 space-y-4">
            {links.map(({ path, label }) => (
              <li
                key={path}
                className="transition-colors duration-300 hover:text-blue-500"
              >
                <Link className="nav-link" to={path}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Link to="#contact">
            <Button text="Lets Talk" />
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

export default Nav;
