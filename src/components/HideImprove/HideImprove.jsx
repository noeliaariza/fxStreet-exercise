import { BiSolidHide } from "react-icons/bi";
import { RiEqualizerLine } from "react-icons/ri";
import "./HideImprove.scss";

function HideImprove() {
  return (
    <div className="HideImprove">
      <button>
        <BiSolidHide size={20} />
        <span>Hide</span>
      </button>
      <button>
        <RiEqualizerLine size={20} />
        <span>Improve my feed</span>
      </button>
    </div>
  );
}

export default HideImprove;
