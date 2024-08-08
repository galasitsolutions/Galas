import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
        <h1 className="font-heading font-bold">Galas</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/career">Career</Link>
          </li>
          <li>
            <Link to="/event">Event</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
