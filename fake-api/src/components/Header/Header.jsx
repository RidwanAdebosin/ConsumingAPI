import "./Header.css";
const Header = () => {
  return (
    <>
      <header>
        <nav className="leftNav">
          <h1>Jundu</h1>
        </nav>
        <nav className="rightNav">
          <a>Login</a>
          <a>Register</a>
        </nav>
      </header>
    </>
  );
};

export default Header;
