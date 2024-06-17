import "./NoticeList.scss";
import Notice from "../Notice/Notice";
import noticeImage from "../../assets/images/image_webinar.png";
import PropTypes from "prop-types";

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
              title={notice.title}
              content={notice.content}
              image={noticeImage}
              avatar={notice.author.imageUrl}
              authorName={notice.author.name}
            />
          ))}
        </li>
      </ul>
    </div>
  );
}

NoticeList.propTypes = {
  notices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      feed: PropTypes.string.isRequired,
      subFeed: PropTypes.string.isRequired,
      publicationTime: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      author: PropTypes.shape({
        imageUrl: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export default NoticeList;
