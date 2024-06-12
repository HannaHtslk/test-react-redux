import Button from '../Button/Button';
import s from './CarItem.module.css';

const CarItem = () => {
  return (
    <div className={s.card}>
      <img className={s.img} src="../../../public/bg.webp" alt="testPhoto" />
      <div className={s.content}>
        <div className={s.model}>
          <p className={s.title}>BMW, 2009</p> <p className={s.title}>$50</p>
        </div>
        <div className={s.details}>
          <ul className={s.list}>
            <li className={s.item}>
              <p className={s.feature}>Kharkiv</p>
            </li>
            <li className={s.item}>
              <p className={s.feature}>Ukraine</p>
            </li>
            <li className={s.item}>
              <p className={s.feature}>Elite Car Rentals</p>
            </li>

            <li className={s.item}>
              <p className={s.feature}>Premium SUV</p>
            </li>
            <li className={s.item}>
              <p className={s.feature}>Navigator L</p>
            </li>
            <li className={s.item}>
              <p className={s.feature}>9596</p>
            </li>
            <li className={s.item}>
              <p className={s.feature}>Leather seats</p>
            </li>
          </ul>
          <Button>Learn more</Button>
        </div>
      </div>
    </div>
  );
};

export default CarItem;
