import "./ContextualMenu.scss";

import { BsThreeDots } from "react-icons/bs";

function SaveButton() {
  return (
    <div className="iconSave-container">
      <a>
        <BsThreeDots className="" size={25} color="#8c8d91" />
      </a>
    </div>
  );
}

export default SaveButton;
