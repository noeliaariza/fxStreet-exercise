import { FiArrowLeft } from "react-icons/fi";
import "./HideContent.scss";

function HideContent() {
  return (
    <div className="hide-content">
      <div className="hide-content__title">
        <FiArrowLeft />
        <span>Tell us why:</span>
      </div>
      <form>
        <label>
          <input type="radio" name="reasons" value="not-interested-author" />
          I’m not interested in this author
        </label>
        <label>
          <input type="radio" name="reasons" value="not-interested-topic" />
          I’m not interested in this topic
        </label>
        <label>
          <input type="radio" name="reasons" value="too-many-posts" />
          I’ve seen too many posts on this topic
        </label>
        <label>
          <input type="radio" name="reasons" value="incorrect-info" />
          The information is incorrect
        </label>
        <label>
          <input type="radio" name="reasons" value="seen-before" />
          I’ve seen this post before
        </label>
        <label>
          <input type="radio" name="reasons" value="other-reasons" />
          Other reasons
        </label>
      </form>
      <div className="hide-content__button-container">
        <button className="hide-content__button-container__button">
          Hide Content
        </button>
      </div>
    </div>
  );
}

export default HideContent;
