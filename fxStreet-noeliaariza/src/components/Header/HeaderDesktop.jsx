import "./HeaderDesktop.scss";
import { MdCircle } from "react-icons/md";

function Header() {
  return (
    <nav className="header">
      <div className="header__back">
        <MdCircle size={18} color="#304c70" />
        <a></a>
      </div>
      <ul className="header__menu">
        <li>
          <a className="highlight"></a>
        </li>
        <li>
          <MdCircle size={18} color="#8c8d91" />
        </li>
        <li>
          <MdCircle size={18} color="#8c8d91" />
        </li>
        <li>
          <MdCircle size={18} color="#8c8d91" />
          <a></a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
