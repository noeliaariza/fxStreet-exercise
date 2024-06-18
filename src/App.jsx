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
  // Recibe datos del fetch
  const { data, loading, error } = useFetch(
    "https://fxsfrontend.fxstreet.workers.dev/"
  );
  // variable para recoger data, y si no recibe datos, carga array vacío
  const notices = data || [];

  // para manejar mediqueries y renderizar un componente u otro según res. de pantalla
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  // useState para setear filter de inicio a valor Latest
  const [filter, setFilter] = useState("All");

  // método filter para filtrar por valor Popular
  const filteredNotices = notices.filter((notice) =>
    filter === "Popular" ? notice.isPopular : true
  );
  // método de array para ordenar por fecha
  const sortedNotices = filteredNotices.sort(
    (a, b) => new Date(b.publicationTime) - new Date(a.publicationTime)
  );

  //condicional para solo mostrar 2 en latest y 1 en popular
  let displayedNotices;
  if (filter === "Popular") {
    displayedNotices = sortedNotices.slice(0, 1);
  } else {
    displayedNotices = sortedNotices.slice(0, 2);
  }

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
            <NoticeList notices={displayedNotices} />
          </div>
          <AsideRight />
        </div>
      </div>
    </div>
  );
}

export default App;
