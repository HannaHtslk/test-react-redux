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
    address,
    rentalConditions,
    mileage,
  } = car;

  const array = address.split(',');
  const city = array[1];
  const country = array[2];

  const conditions = rentalConditions.split('\n');
  const age = conditions[0];
  const ageNumber = age.split(' ');

  const formattedMileage = mileage.toLocaleString();

  return (
    <>
      <div className={s.card}>
        <img className={s.img} src={img} alt={make} />
        <div className={s.content}>
          <div className={s.block}>
            <p className={s.title}>
              {make} <span className={s.span}>{model}</span>, {year}
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
            <div className={s.listWrapper}>
              <ul className={s.list}>
                <li className={s.condition}>
                  <p className={s.name}>
                    Minimum age: <span className={s.span}>{ageNumber[2]}</span>
                  </p>
                </li>
                <li className={s.condition}>
                  <p className={s.name}>{conditions[1]}</p>
                </li>
              </ul>
              <ul className={s.list}>
                <li className={s.condition}>
                  <p className={s.name}>{conditions[2]}</p>
                </li>
                <li className={s.condition}>
                  <p className={s.name}>
                    Mileage: <span className={s.span}>{formattedMileage}</span>
                  </p>
                </li>
                <li className={s.condition}>
                  <p className={s.name}>
                    Price: <span className={s.span}>{rentalPrice}</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <Button>Rental car</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarInfo;
