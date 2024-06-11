import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css';

const NavBar = () => {
  return (
    <header className={s.header}>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
