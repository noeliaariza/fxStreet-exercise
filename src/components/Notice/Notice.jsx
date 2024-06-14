import ContextualMenu from "../ContextualMenu/ContextualMenu";
import LikeButton from "../LikeButton/LikeButton";
import SaveButton from "../SaveButton/SaveButton";
import "./Notice.scss";
import noticeImage from "../../assets/images/image_webinar.png";
import { TbFileSearch } from "react-icons/tb";
import { TbClock } from "react-icons/tb";
import avatar from "../../assets/images/avatar.png";

function Notice() {
  return (
    <div className="notice">
      {/* Notice Header */}
      <div className="notice__header">
        <div className="notice__header__category">
          <div className="notice__header__category--cat">
            <TbFileSearch size={20} color="#304c70" />
            <p>Categoría</p>
          </div>

          <p className="notice__header__category--subcat">Subcategoría</p>
        </div>
        <div className="notice__header__date">
          <TbClock size={20} color="#808d91" />
          <span>May 23, 10:44</span>
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
            <p>The economy of bitcoins</p>
          </div>
        </div>
      </div>

      {/* Notice Content */}
      <div className="notice__content">
        <p>
          Cryptocurrency markets have experienced unprecedented growth in recent
          years. The rise of Bitcoin, Ethereum, and other altcoins has reshaped
          the financial landscape, driving both excitement and uncertainty.
          Analyzing the markets behavior and the factors influencing these
          trends is crucial.
          <a href="https://www.linktosomething.com">
            This link refers to an external resource
          </a>
          . Furthermore, the implications of decentralized finance (DeFi) and
          blockchain technology have sparked widespread discussion and
          innovation in fintech circles.
        </p>
        <div className="notice__content__image">
          <img src={noticeImage} alt="Image notice" />
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
