import ContextualMenu from "../ContextualMenu/ContextualMenu";
import LikeButton from "../LikeButton/LikeButton";
import SaveButton from "../SaveButton/SaveButton";
import "./Notice.scss";

import { TbFileSearch } from "react-icons/tb";
import { TbClock } from "react-icons/tb";
import avatar from "../../assets/images/avatar.png";

function Notice({
  category,
  subCategory,
  date,
  author,
  title,
  content,
  link,
  image,
  avatar,
}) {
  return (
    <div className="notice">
      {/* Notice Header */}
      <div className="notice__header">
        <div className="notice__header__category">
          <div className="notice__header__category--cat">
            <TbFileSearch size={20} color="#304c70" />
            <p>{category}</p>
          </div>

          <p className="notice__header__category--subcat">{subCategory}</p>
        </div>
        <div className="notice__header__date">
          <TbClock size={20} color="#808d91" />
          <span>{date}</span>
        </div>
      </div>

      {/* Avatar - Title */}
      <div className="notice__intro">
        <span>FXStreet Team | FXStreet</span>
        <div className="notice__intro__title">
          <div className="notice__intro__title--avatar">
            <img src={avatar} />
          </div>
          <div className="notice__intro__title--maintitle">
            <p>{title}</p>
          </div>
        </div>
      </div>

      {/* Notice Content */}
      <div className="notice__content">
        <p>{content}</p>
        <div className="notice__content__image">
          <img src={image} alt="Image notice" />
        </div>
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

export default Notice;
