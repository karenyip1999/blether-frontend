import Message from "../Message";
import "../../styles/lists/MessageList.css"

const ChatroomMessageList = ({ chatroomMessages, deleteMessage }) => {
  const chatroomMessageComponents = chatroomMessages.map((message) => {
    return <Message key={message.id} message={message} deleteMessage={deleteMessage}/>;
  });
  return (
    <>
      <h3>Messages</h3>
      <div className="message-column">{chatroomMessageComponents}</div>
    </>
  );
};

export default ChatroomMessageList;