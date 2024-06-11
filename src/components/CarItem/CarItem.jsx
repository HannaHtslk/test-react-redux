import s from './CarItem.module.css';

const CarItem = () => {
  return (
    <div className={s.card}>
      <div className={s.imgWrapper}>
        <img className={s.img} src="../../../public/bg.webp" alt="testPhoto" />
      </div>
      <div></div>
    </div>
  );
};

export default CarItem;
