import "./LikeButton.scss";
import { useState } from "react";
import { IoMdHeart } from "react-icons/io";

function LikeButton() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="icon-container" onClick={handleClick}>
      <IoMdHeart
        className={`icon ${clicked ? "icon--clicked" : ""}`}
        size={25}
      />
      <span>Like</span>
    </div>
  );
}

export default LikeButton;
