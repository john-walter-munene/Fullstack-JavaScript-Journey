import React from "react";
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

// These get loaded in teh order: 
// UserInfo loading 1773917472229
// ChatList loading 1773917472231
// EmojiPicker loading 1773917472244
// ChatInput loading 1773917472245
// App loading  1773917472246

// Note that they all get loaded immediately but some could be loaded at run time, for instance only load the emoji picker 
// or gif picker when user needs to use them.