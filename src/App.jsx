import "./App.scss";
import AsideLeft from "./components/AsideLeft/AsideLeft";
import AsideRight from "./components/AsideRight/AsideRight";
import FilterNotices from "./components/FilterNotices/FilterNotices";
import HeaderDesktop from "./components/Header/HeaderDesktop";
import HeaderMobile from "./components/Header/HeaderMobile";
import NoticeList from "./components/NoticeList/NoticeList";
import { useMediaQuery } from "react-responsive";
import { useFetch } from "./useFetch";
import { useState } from "react";

function App() {
  const { data, loading, error } = useFetch(
    "https://run.mocky.io/v3/96314262-67b1-455b-a2b2-ef1711d4634c"
  );
  const [filter, setFilter] = useState("All");

  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const notices = data || [];

  const filteredNotices = notices.filter((notice) =>
    filter === "Popular" ? notice.isPopular : true
  );

  return (
    <div className="container">
      <AsideLeft />
      <div className="container__main">
        {isDesktop ? <HeaderDesktop /> : <HeaderMobile />}
        <div className="container__main__secondary">
          <div>
            <FilterNotices setFilter={setFilter} />
            {error && <span>Ha ocurrido un error: {error}</span>}
            {loading && <span>Loading...</span>}
            <NoticeList notices={filteredNotices} />
          </div>
          <AsideRight />
        </div>
      </div>
    </div>
  );
}

export default App;
