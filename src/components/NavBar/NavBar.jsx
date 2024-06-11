import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css';
import clsx from 'clsx';

const NavBar = () => {
  const activeClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <NavLink className={activeClass} to="/">
          Home
        </NavLink>
        <NavLink className={activeClass} to="/catalog">
          Catalog
        </NavLink>
        <NavLink className={activeClass} to="/favorites">
          Favorites
        </NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
