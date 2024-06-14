//import { useState } from "react";
import AsideLeft from "./components/AsideLeft/AsideLeft";
import AsideRight from "./components/AsideRight/AsideRight";
import FilterNotices from "./components/FilterNotices/FilterNotices";
import Header from "./components/Header/Header";
import NoticeList from "./components/NoticeList/NoticeList";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <AsideLeft />
      <Header />
      <AsideRight />
      <FilterNotices />
      <NoticeList />
    </>
  );
}

export default App;
