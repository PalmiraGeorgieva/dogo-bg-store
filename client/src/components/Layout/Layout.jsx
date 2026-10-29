import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.css';
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton';

function Layout() {
  return (
    <div className="layout">
      <Header />
      <main className='main-content'>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default Layout;