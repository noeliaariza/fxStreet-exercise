import "./HeaderMobile.scss";
import logo_mobile from "../../assets/images/logo_fx_mobile.svg";
import { MdCircle } from "react-icons/md";

function HeaderMobile() {
  return (
    <div className="header-mobile">
      <div className="header-mobile__logo">
        <img src={logo_mobile} />
      </div>
      <div className="header-mobile__right">
        <span>
          <MdCircle size={18} color="#dddedf" />
        </span>
        <span>
          <MdCircle size={18} color="#dddedf" />
        </span>
      </div>
    </div>
  );
}

export default HeaderMobile;
