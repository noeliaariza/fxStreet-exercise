import "./NoticeList.scss";
import Notice from "../Notice/Notice";

function NoticeList() {
  return (
    <div className="noticesList">
      <ul className="noticesList__ul">
        <li>
          <Notice />
        </li>
      </ul>
    </div>
  );
}

export default NoticeList;
