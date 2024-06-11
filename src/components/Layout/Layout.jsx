import { Outlet } from 'react-router-dom';
import s from './Layout.module.css';
import NavBar from '../NavBar/NavBar';

const Layout = () => {
  return (
    <>
      <NavBar />
      <div className={s.outletWrapper}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
