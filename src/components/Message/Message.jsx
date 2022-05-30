import style from './Message.module.css';

export const Message = (props) => {
  return (
    <>
      <ul className={style.message}>
        {props.users.map((el) => {
          return (
            <li key={el.id}>
              <p>{el.name}</p>
              <p>{el.age}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
