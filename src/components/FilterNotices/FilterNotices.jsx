import "./FilterNotices.scss";
import { CiFilter } from "react-icons/ci";

function FilterNotices({ setFilter }) {
  return (
    <>
      <div className="filter-notices-main">
        <div className="filter-notices-main__part01">
          <a onClick={() => setFilter("All")} className="active">
            Latest
          </a>
          <a onClick={() => setFilter("Popular")}>Popular</a>
        </div>
        <div className="filter-notices__select desktop-only">
          <span>Show:</span>
          <select
            name="showNotices"
            id="showNotices"
            className="filter-notices__select__form"
          >
            <option value="All">All</option>
            <option value="valueOne">Filter one</option>
            <option value="valueTwo">Filter two</option>
          </select>
        </div>
        <CiFilter size={21} color="#8c8d91" className="mobile-only" />
      </div>
    </>
  );
}

export default FilterNotices;
