import { BiSolidHide } from "react-icons/bi";
import { RiEqualizerLine } from "react-icons/ri";
import "./HideImprove.scss";
import HideContent from "../HideContent/HideContent";
import { useState } from "react";

function HideImprove() {
  const [showHideContent, setShowHideContent] = useState(false);

  const handleHideClick = () => {
    setShowHideContent(true);
  };

  return (
    <div className="hide-improve">
      <button className="hide-improve__button" onClick={handleHideClick}>
        <BiSolidHide size={20} />
        <span>Hide</span>
      </button>
      <button className="hide-improve__button">
        <RiEqualizerLine size={20} />
        <span>Improve my feed</span>
      </button>
      {showHideContent && <HideContent />}
    </div>
  );
}

export default HideImprove;
