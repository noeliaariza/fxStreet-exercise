import "./FilterNotices.scss";

function FilterNotices() {
  return (
    <>
      <div className="filterNotices">
        <div className="filterNotices__latestPopular">
          <a>Latest</a>
          <a>Popular</a>
        </div>
        <div className="filterNotices__showSelect">
          <span>Show:</span>
          <select name="showNotices" id="showNotices">
            <option value="All">All</option>
            <option value="valueOne">Filter one</option>
            <option value="valueTwo">Filter two</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default FilterNotices;
