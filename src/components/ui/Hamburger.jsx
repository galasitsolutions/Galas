export default function Hamburger() {
  return (
    <div
      className="menu-icon flex flex-col justify-between items-center"
      id="toggle"
      aria-hidden="true"
      aria-label="Toggle Menu"
    >
      <span className="bar"></span>
      <span className="bar bar-mid"></span>
      <span className="bar"></span>
    </div>
  );
}
