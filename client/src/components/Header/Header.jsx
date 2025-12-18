import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Nhat Chu</h1>
      <p className="header__subtitle">Full-Stack Developer</p>
      <p className="header__description">
        Hello everyone! I'm a full stack developer based in Dallas, Texas. I
        specialize in building web applications using the React library.
      </p>
      <button className="header__play-btn">Continue</button>
    </header>
  );
}
export default Header;
