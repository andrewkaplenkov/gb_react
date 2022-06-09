import { useEffect, useState } from 'react';
import { MessageList } from './components/Message/MessageList';
import { Form } from './components/Form/Form';
import { author as AUTHOR } from './constants';
import { FC } from 'react';
import { Message } from './common-types';
import { ChatList } from './components/Chats/Chats';
import style from './App.module.css';

const defaultMessages = [
  {
    author: AUTHOR.user,
    text: 'TEST MESSAGE',
  },
];

export const App: FC = () => {
  const [messages, setMessages] = useState<Message[]>(defaultMessages);

  const addMessage = (newMessage: Message) => {
    setMessages([...messages, newMessage]);
  };

  useEffect(() => {
    if (
      messages.length &&
      messages[messages.length - 1].author === AUTHOR.user
    ) {
      const timeOut = setTimeout(() => {
        addMessage({
          author: AUTHOR.bot,
          text: 'response from BOT',
        });
      }, 1000);

      return () => {
        clearTimeout(timeOut);
      };
    }
  }, [messages]);

  return (
    <div className={style.wrapper}>
      <ChatList />
      <div className={style.msgBlock}>
        <MessageList messages={messages} />
        <Form addMessage={addMessage} />
      </div>
    </div>
  );
};
