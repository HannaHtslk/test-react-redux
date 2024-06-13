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

  return (
    <>
      <div className={s.card}>
        <img className={s.img} src={img} alt={make} />
        <div className={s.content}>
          <div className={s.block}>
            <p className={s.title}>
              {make} {model}, {year}
            </p>

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
            <h4 className={s.descr}>{description}</h4>
          </div>
          <div className={s.block}>
            <h4 className={s.heading}>Accessories and functionalities</h4>
            <div className={s.listWrapper}>
              <ul className={s.list}>
                <li className={s.item}>
                  <p className={s.feature}>{accessories[0]}</p>
                </li>
                <li className={s.item}>
                  <p className={s.feature}>{accessories[1]}</p>
                </li>
                <li className={s.item}>
                  <p className={s.feature}> {accessories[2]}</p>
                </li>
              </ul>
              <ul className={s.list}>
                <li className={s.item}>
                  <p className={s.feature}> {functionalities[0]}</p>
                </li>
                <li className={s.item}>
                  <p className={s.feature}> {functionalities[1]}</p>
                </li>
                <li className={s.item}>
                  <p className={s.feature}>{functionalities[2]}</p>
                </li>
              </ul>
            </div>
          </div>
          <div className={s.block}>
            <h4 className={s.heading}>Rental Conditions</h4>
            <div>
              <ul className={s.list}>
                <li>
                  <p>Minimum age:</p>
                </li>
                <li></li>
              </ul>
              <ul className={s.list}>
                <li>
                  <p>{functionalities[0]}</p>
                </li>
                <li>
                  <p>Mileage: {mileage}</p>
                </li>
                <li>
                  <p>Price: {rentalPrice}</p>
                </li>
              </ul>
            </div>
          </div>
          <Button>Rental car</Button>
        </div>
      </div>
    </>
  );
};

export default CarInfo;
