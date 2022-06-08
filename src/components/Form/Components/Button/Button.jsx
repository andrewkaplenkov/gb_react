import style from './Button.module.css';

export const Button = ({ label, click }) => (
  <>
    <button onClick={click} label={label} className={style.button}>
      {label}
    </button>
  </>
);
