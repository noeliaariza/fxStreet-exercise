import ContextualMenu from "../ContextualMenu/ContextualMenu";
import LikeButton from "../LikeButton/LikeButton";
import SaveButton from "../SaveButton/SaveButton";
import "./Notice.scss";
import noticeImage from "../../assets/images/image_webinar.png";

function Notice() {
  return (
    <div className="notice">
      {/* Header */}
      <div className="notice-header">
        <div className="notice-header__category">
          <span className="">Categoría</span>
          <span className="">Subcategoría</span>
        </div>
        <div className="notice-header__date">
          <span>Fecha</span>
        </div>
      </div>

      {/* Avatar - Title */}
      <div className="notice-title">
        <div className="notice-title__avatar">
          <img src="" />
        </div>
        <div className="notice-title__text">
          <span>FXStreet Team | FXStreet</span>
          <p>Título de la notícia</p>
        </div>
      </div>

      {/* Notice Content */}
      <p>
        Cryptocurrency markets have experienced unprecedented growth in recent
        years. The rise of Bitcoin, Ethereum, and other altcoins has reshaped
        the financial landscape, driving both excitement and uncertainty.
        Analyzing the markets behavior and the factors influencing these trends
        is crucial.
        <a href="https://www.linktosomething.com">
          This link refers to an external resource
        </a>
        . Furthermore, the implications of decentralized finance (DeFi) and
        blockchain technology have sparked widespread discussion and innovation
        in fintech circles.
      </p>
      <img src={noticeImage} alt="Image notice" />

      {/* Like - Save Button */}
      <div className="like-save-section">
        <LikeButton />
        <SaveButton />
        <ContextualMenu />
      </div>
    </div>
  );
}

export default Notice;
