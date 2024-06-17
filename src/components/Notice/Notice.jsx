import ContextualMenu from "../ContextualMenu/ContextualMenu";
import LikeButton from "../LikeButton/LikeButton";
import SaveButton from "../SaveButton/SaveButton";
import "./Notice.scss";

import { TbFileSearch } from "react-icons/tb";
import { TbClock } from "react-icons/tb";
import { useMediaQuery } from "react-responsive";
import { MdArrowRight } from "react-icons/md";
import { format } from "date-fns";
import DOMPurify from "dompurify";
import PropTypes from "prop-types";

function Notice({
  category,
  subCategory,
  date,
  title,
  content,
  avatar,
  authorName,
}) {
  const formattedDate = format(new Date(date), "MMM d, hh:mm a");
  const sanitizedContent = DOMPurify.sanitize(content);
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <div className="notice">
      {/* Notice Header */}
      <div className="notice__header">
        <div className="notice__header__category">
          <div className="notice__header__category--cat">
            <TbFileSearch size={20} color="#304c70" />
            <p>{category}</p>
          </div>
          {isDesktop && <MdArrowRight size={20} color="#7598c4" />}
          <span className="notice__header__category--subcat">
            {subCategory}
          </span>
        </div>
        <div className="notice__header__date">
          <TbClock size={20} color="#808d91" />
          <span>{formattedDate}</span>
        </div>
      </div>

      {/* Avatar - Title */}
      <div className="notice__intro">
        <span>FXStreet Team | FXStreet</span>
        <div className="notice__intro__title">
          <div className="notice__intro__title--avatar">
            <img src={avatar} alt={authorName} />
          </div>
          <div className="notice__intro__title--maintitle">
            <p>{title}</p>
          </div>
        </div>
      </div>

      {/* Notice Content */}
      <div className="notice__content">
        <p dangerouslySetInnerHTML={{ __html: sanitizedContent }}></p>
        {/* <div className="notice__content__image">
          <img src={image} alt={title} />
        </div> */}
      </div>

      {/* Like - Save Button */}
      <div className="notice__like-save-section">
        <LikeButton />
        <SaveButton />
        <ContextualMenu />
      </div>
    </div>
  );
}

Notice.propTypes = {
  category: PropTypes.string.isRequired,
  subCategory: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
};

export default Notice;
