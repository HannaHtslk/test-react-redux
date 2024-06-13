import s from './Button.module.css';

const Button = ({ children, openModal }) => {
  return (
    <button onClick={openModal} className={s.button} type="button">
      {children}
    </button>
  );
};

export default Button;
