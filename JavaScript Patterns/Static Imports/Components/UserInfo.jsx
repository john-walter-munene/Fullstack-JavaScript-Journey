import "./styles.css";

// Statically import Chatlist, ChatInput and UserInfo
import UserInfo from "./components/UserInfo";
import ChatList from "./components/ChatList";
import ChatInput from "./components/ChatInput";

const App = () => {
  return (
    <div className="App">
      <UserInfo />
      <ChatList />
      <ChatInput />
    </div>
  );
};

export default App;