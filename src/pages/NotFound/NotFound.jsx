import { Link } from 'react-router-dom';
import s from './NotFound.module.css';
const NotFound = () => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Page not found</h2>
      <Link className={s.link} to="/">
        Home
      </Link>
    </div>
  );
};

export default NotFound;
