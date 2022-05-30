import { useState } from 'react';

export const Input = () => {
  const [message, setMessage] = useState('Some text');
  const userInput = (e) => {
    setMessage(e.target.value);
  };

  return (
    <>
      <input value={message} onChange={userInput} />
      <p>{message}</p>
    </>
  );
};
