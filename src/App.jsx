import './App.scss';
import AsideLeft from './components/AsideLeft/AsideLeft';
import AsideRight from './components/AsideRight/AsideRight';
import FilterNotices from './components/FilterNotices/FilterNotices';
import HeaderDesktop from './components/Header/HeaderDesktop';
import HeaderMobile from './components/Header/HeaderMobile';
import NoticeList from './components/NoticeList/NoticeList';
import { useMediaQuery } from 'react-responsive';
import { useFetch } from './useFetch';
import { useState } from 'react';

function App() {
  // Cambia la URL para apuntar al archivo JSON local
  const { data, loading, error } = useFetch(
    '/fxStreet-exercise/data/notices_data.json'
  );

  const notices = data || [];

  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const [filter, setFilter] = useState('All');

  const filteredNotices = notices.filter((notice) =>
    filter === 'Popular' ? notice.isPopular : true
  );

  const sortedNotices = filteredNotices.sort(
    (a, b) => new Date(b.publicationTime) - new Date(a.publicationTime)
  );

  let displayedNotices;
  if (filter === 'Popular') {
    displayedNotices = sortedNotices.slice(0, 1);
  } else {
    displayedNotices = sortedNotices.slice(0, 2);
  }

  return (
    <div className='container'>
      <AsideLeft />
      <div className='container__main'>
        {isDesktop ? <HeaderDesktop /> : <HeaderMobile />}
        <div className='container__main__secondary'>
          <div>
            <FilterNotices setFilter={setFilter} />
            {error && (
              <span>
                Ha ocurrido un error: {error.message || 'Error desconocido'}
              </span>
            )}
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
