import { FC, useCallback } from 'react';
import { useEffect } from 'react';
import { Form } from 'components/Form/Form';
import { MessageList } from 'components/MessageList';
import { author } from 'src/constants';
import { Message, Messages } from 'src/common-types';
import { ChatList } from 'src/components/Chats';
import { Chat } from 'src/common-types';
import { Navigate, useParams } from 'react-router-dom';

interface ChatPageProps {
  chats: Chat[];
  addChat: (chat: Chat) => void;
  messages: Messages;
  addMessage: (id: string, msg: Message) => void;
  deleteChat: (name: string) => void;
}

export const ChatPage: FC<ChatPageProps> = ({
  chats,
  addChat,
  messages,
  addMessage,
  deleteChat,
}) => {
  const { chatId } = useParams();

  useEffect(() => {
    if (
      chatId &&
      messages[chatId]?.length > 0 &&
      messages[chatId][messages[chatId].length - 1].author === author.user
    ) {
      const timeout = setTimeout(() => {
        addMessage(chatId, {
          author: author.bot,
          text: 'Response from Bot',
        });
      }, 1000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [chatId, messages]);

  const handleAddMessage = useCallback(
    (message: Message) => {
      if (chatId) {
        addMessage(chatId, message);
      }
    },
    [chatId, addMessage]
  );

  if (chatId && !messages[chatId]) {
    return <Navigate to="/chats" replace />;
  }

  return (
    <>
      <ChatList chats={chats} addChat={addChat} deleteChat={deleteChat} />
      <MessageList messages={chatId ? messages[chatId] : []} />
      <Form addMessage={handleAddMessage} />
    </>
  );
};
