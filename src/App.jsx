//import { useState } from "react";
import "./App.scss";
import AsideLeft from "./components/AsideLeft/AsideLeft";
import AsideRight from "./components/AsideRight/AsideRight";
import FilterNotices from "./components/FilterNotices/FilterNotices";
import HeaderDesktop from "./components/Header/HeaderDesktop";
import HeaderMobile from "./components/Header/HeaderMobile";
import NoticeList from "./components/NoticeList/NoticeList";
import { useMediaQuery } from "react-responsive";

function App() {
  //const [count, setCount] = useState(0);
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <div className="container">
      <AsideLeft />
      <div className="container__main">
        {isDesktop ? <HeaderDesktop /> : <HeaderMobile />}
        <div className="container__main__secondary">
          <div>
            <FilterNotices />
            <NoticeList />
          </div>
          <AsideRight />
        </div>
      </div>
    </div>
  );
}

export default App;
