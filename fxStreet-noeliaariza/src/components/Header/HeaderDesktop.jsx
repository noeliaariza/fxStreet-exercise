import "./HeaderDesktop.scss";

function Header() {
  return (
    <div className="header">
      <div className="header__back">
        <div className="header__circle"></div>
        <p></p>
      </div>

      <div>
        <a className="header"></a>
        <div className="header__circle"></div>
        <div className="header__circle"></div>
        <div className="header-profile">
          <div className="header-profile__circle">
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
