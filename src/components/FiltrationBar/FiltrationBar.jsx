import { useSelector } from 'react-redux';
import { selectBrands } from '../../redux/cars/slice';

import s from './FiltrationBar.module.css';
import Select from 'react-select';
import { FiltrationBarStyles } from './FiltrationBarStyles';
import { useState } from 'react';

const FiltrationBar = ({ onFilter }) => {
  const carBrands = useSelector(selectBrands);
  const [selectedBrand, setSelectedBrand] = useState(null);

  const carOptions = carBrands.map(brand => ({ value: brand, label: brand }));

  const handleChange = selectedOption => {
    setSelectedBrand(selectedOption);
  };

  const handleSubmit = () => {
    if (selectedBrand) {
      onFilter(selectedBrand.value);
    }
  };

  return (
    <div className={s.searchWrapper}>
      <Select
        options={carOptions}
        onChange={handleChange}
        styles={FiltrationBarStyles}
        placeholder={'Enter the text'}
      />
      <button onClick={handleSubmit} className={s.submitBtn} type="submit">
        Search
      </button>
    </div>
  );
};

export default FiltrationBar;
