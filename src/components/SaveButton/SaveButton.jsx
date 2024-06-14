import "./SaveButton.scss";
import { useState } from "react";
import { IoMdBookmark } from "react-icons/io";

function SaveButton() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="iconSave-container" onClick={handleClick}>
      <IoMdBookmark
        className={`iconSave ${clicked ? "iconSave--clicked" : ""}`}
        size={25}
      />
      <span>Save</span>
    </div>
  );
}

export default SaveButton;
