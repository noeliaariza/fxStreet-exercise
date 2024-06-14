import "./AsideRight.scss";
import { MdCircle } from "react-icons/md";

function asideRight() {
  return (
    <div className="aside-right">
      <div className="aside-right__widget">
        <a></a>
        <a className="secondary-link"></a>
      </div>
      <button className="aside-right__button">
        <span></span>
        <MdCircle size={18} color="#304c70" />
      </button>
    </div>
  );
}

export default asideRight;
