import React from "react";
import "./styles.css";

// Statically import Chatlist, ChatInput and UserInfo
import UserInfo from "./components/UserInfo";
import ChatList from "./Components/ChatList";
import ChatInput from "./Components/ChatInput";

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