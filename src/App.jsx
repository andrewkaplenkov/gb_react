import { Message } from './components/Message/Message';
import { Input } from './components/Input/Input';
import { Counter } from './components/Counter/Counter';
import { useState } from 'react';

export const App = () => {
  const arr = [
    { id: 0, name: 'Abdullah', age: 24 },
    { id: 1, name: 'Sarah', age: 19 },
    { id: 2, name: 'Cindy', age: 22 },
  ];

  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <button onClick={handleShow}>{show ? 'Show list' : 'Hide'}</button>
      {show || <Message users={arr} />}
      <hr />
      <Input />
      <hr />
      <Counter />
    </>
  );
};
