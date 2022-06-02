import { useState } from 'react';
import { author as AUTHOR } from '../../constants';

export const Form = ({ addMessage }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addMessage({
      author: AUTHOR.user,
      text: value,
    });
    setValue('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write message"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button>Send message</button>
      </form>
    </>
  );
};
