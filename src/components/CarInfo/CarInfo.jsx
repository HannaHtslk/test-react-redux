import Button from '../Button/Button';
import s from './CarInfo.module.css';

const CarInfo = ({ car }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
    rentalConditions,
    mileage,
  } = car;

  const array = address.split(',');
  const city = array[1];
  const country = array[2];
  const benefit = accessories[0];
  return (
    <>
      <div className={s.card}>
        <img className={s.img} src={img} alt={make} />
        <div className={s.content}>
          <div className={s.model}>
            <p className={s.title}>
              {make}, {year}
            </p>
            <p className={s.title}>{rentalPrice}</p>
          </div>
          <div className={s.details}>
            <div>
              <ul className={s.list}>
                <li className={s.item}>
                  <p className={s.feature}>{city}</p>
                </li>
                <li className={s.item}>
                  <p className={s.feature}>{country}</p>
                </li>
                <li className={s.item}>
                  <p className={s.feature}>Id: {id}</p>
                </li>
                <li className={s.item}>
                  <p className={s.feature}>Year: {year}</p>
                </li>
                <li className={s.item}>
                  <p className={s.feature}>Type: {type}</p>
                </li>
              </ul>
              <ul className={s.list}>
                <li className={s.item}>
                  <p className={s.feature}>
                    Fuel Consumption: {fuelConsumption}
                  </p>
                </li>

                <li className={s.item}>
                  <p className={s.feature}>Engine Size: {engineSize}</p>
                </li>
              </ul>
            </div>
            <Button>Rental car</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarInfo;
