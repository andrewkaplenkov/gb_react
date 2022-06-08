import style from './Input.module.css';

export const Input = ({ value, func }) => (
  <>
    <input
      onChange={func}
      type="text"
      placeholder="Write message"
      className={style.input}
      value={value}
    />
  </>
);
