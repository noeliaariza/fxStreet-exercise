import './NoticeList.scss';
import Notice from '../Notice/Notice';
import PropTypes from 'prop-types';

function NoticeList({ notices }) {
  if (!Array.isArray(notices)) {
    return <span>Invalid data</span>;
  }
  return (
    <div className='notices-list'>
      <ul className='notices-list__ul'>
        <li>
          {notices?.map((notice) => (
            <Notice
              key={notice.id}
              category={notice.feed}
              subCategory={notice.subFeed}
              date={notice.publicationTime}
              title={notice.title}
              content={notice.content}
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
        imageUrl: PropTypes.string,
        name: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export default NoticeList;
