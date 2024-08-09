import Nav from "../ui/Nav";

const Header = () => {
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/blog", label: "Blog" },
    { path: "/career", label: "Career" },
    { path: "/event", label: "Event" },
  ];

  return (
    <header className="sticky top-0 left-0 z-50" role="banner">
      <Nav links={navLinks} />
    </header>
  );
};

export default Header;
