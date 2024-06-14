import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/favorites/slice';
import s from './Favorites.module.css';

import FavList from '../../components/FavList/FavList';
import NoFav from '../../components/NoFav/NoFav';
const Favorites = () => {
  const favorites = useSelector(selectFavorites);
  console.log(favorites);
  return (
    <div className={s.container}>
      {favorites.length > 0 ? <FavList favorites={favorites} /> : <NoFav />}
    </div>
  );
};

export default Favorites;

// {
//   transactions ? (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className={`${s.div} ${s.scroll}`}
//     >
//       <TransactionsList />
//     </motion.div>
//   ) : (
//     <EmptyHistory />
//   );
// }
// <CreateButton />;
