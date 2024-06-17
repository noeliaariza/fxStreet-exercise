import "./App.scss";
import AsideLeft from "./components/AsideLeft/AsideLeft";
import AsideRight from "./components/AsideRight/AsideRight";
import FilterNotices from "./components/FilterNotices/FilterNotices";
import HeaderDesktop from "./components/Header/HeaderDesktop";
import HeaderMobile from "./components/Header/HeaderMobile";
import NoticeList from "./components/NoticeList/NoticeList";
import { useMediaQuery } from "react-responsive";
import { useFetch } from "./useFetch";

function App() {
  const { data, loading, error } = useFetch(
    "https://run.mocky.io/v3/96314262-67b1-455b-a2b2-ef1711d4634c"
  );
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <div className="container">
      <AsideLeft />
      <div className="container__main">
        {isDesktop ? <HeaderDesktop /> : <HeaderMobile />}
        <div className="container__main__secondary">
          <div>
            <FilterNotices />
            {error && <span>Ha ocurrido un error: {error}</span>}
            {loading && <span>Loading...</span>}
            <NoticeList notices={data} />
          </div>
          <AsideRight />
        </div>
      </div>
    </div>
  );
}

export default App;
