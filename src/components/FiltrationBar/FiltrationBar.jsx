import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useSelector } from 'react-redux';
import { selectBrands } from '../../redux/cars/slice';
// import * as Yup from 'yup';
import s from './FiltrationBar.module.css';

const FiltrationBar = ({ onFilter }) => {
  const carBrand = useSelector(selectBrands);

  const initialValues = {
    carBrand: '',
  };

  // const validationSchema = Yup.object({
  //   carBrand: Yup.string().required('Please select a car brand'),
  // });

  const onSubmit = values => {
    onFilter(values.carBrand);
  };

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className={s.searchWrapper}>
        <div className={s.form}>
          <label className={s.label} htmlFor="carBrand">
            Car Brand
          </label>
          <Field className={s.select} as="select" id="carBrand" name="carBrand">
            <option className={s.make} value="" disabled>
              Enter the text
            </option>
            {carBrand.map(brand => (
              <option className={s.make} key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </Field>
          <ErrorMessage name="carBrand" component="div" className="error" />
        </div>

        <button className={s.submitBtn} type="submit">
          Search
        </button>
      </Form>
    </Formik>
  );
};

export default FiltrationBar;
