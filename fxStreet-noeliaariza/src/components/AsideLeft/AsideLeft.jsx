import "./AsideLeft.scss";
import logo from "../../assets/images/logo_fx.svg";

function AsideLeft() {
  return (
    <div className="aside-left">
      <img
        className="aside-left__logo"
        src={logo}
        alt="Fx Street Premium Logo"
      />

      <ul className="aside-left__nav">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export default AsideLeft;
