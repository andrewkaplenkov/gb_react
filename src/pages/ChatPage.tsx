import { FC } from 'react';
import { useEffect } from 'react';
import { Form } from 'components/Form/Form';
import { MessageList } from 'components/MessageList';
import { ChatList } from 'src/components/Chats';
import { Navigate, useParams } from 'react-router-dom';
import { shallowEqual, useSelector } from 'react-redux';
import { selectMessages } from 'src/store/messages/selectors';

export const ChatPage: FC = () => {
  const { chatId } = useParams();

  const messages = useSelector(selectMessages, shallowEqual);

  //   useEffect(() => {
  //     if (
  //       chatId &&
  //       messages[chatId]?.length > 0 &&
  //       messages[chatId][messages[chatId].length - 1].author === author.user
  //     ) {
  //       const timeout = setTimeout(() => {
  //         addMessage(chatId, {
  //           author: author.bot,
  //           text: 'Response from Bot',
  //         });
  //       }, 1000);

  //       return () => {
  //         clearTimeout(timeout);
  //       };
  //     }
  //   }, [chatId, messages]);

  if (chatId && !messages[chatId]) {
    return <Navigate to="/chats" replace />;
  }

  return (
    <>
      <ChatList />
      <MessageList messages={chatId ? messages[chatId] : []} />
      <Form />
    </>
  );
};
