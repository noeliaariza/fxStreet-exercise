import "./NoticeList.scss";
import Notice from "../Notice/Notice";

function NoticeList() {
  return (
    <div className="notices-list">
      <ul className="notices-list__ul">
        <li>
          <Notice />
        </li>
      </ul>
    </div>
  );
}

export default NoticeList;
