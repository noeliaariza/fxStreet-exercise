import "./NoticeList.scss";
import Notice from "../Notice/Notice";
import noticeImage from "../../assets/images/image_webinar.png";

function NoticeList({ notices }) {
  return (
    <div className="notices-list">
      <ul className="notices-list__ul">
        <li>
          {notices?.map((notice) => (
            <Notice
              key={notice.id}
              category={notice.feed}
              subCategory={notice.subFeed}
              date={notice.publicationTime}
              author={notice.author}
              title={notice.title}
              content={notice.content}
              link={notice.link}
              image={noticeImage}
              avatar={notice.author.imageUrl}
            />
          ))}
        </li>
      </ul>
    </div>
  );
}

export default NoticeList;
