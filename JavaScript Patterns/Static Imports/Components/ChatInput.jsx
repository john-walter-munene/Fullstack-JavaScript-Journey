import React from "react";
import Send from "./icons/Send";
import Emoji from "./icons/Emoji";

import Picker from "./EmojiPicker";

const ChatInput = () => {
  const [pickerOpen, togglePicker] = React.useReducer(state => !state, false);

  return (
    <div className="chat-input-container">
      <input type="text" placeholder="Type a message..." />
      <Emoji onClick={togglePicker} />
      {pickerOpen && <Picker />}
      <Send />
    </div>
  );
};

console.log("ChatInput loaded", Date.now());

export default ChatInput;