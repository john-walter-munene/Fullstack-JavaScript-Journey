import React, { useState, createElement } from "react";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import ErrorBoundary from "./ErrorBoundary";

const Channel = () => {
  const [emojiPickerEl, setEmojiPickerEl] = useState(null);

  const openEmojiPicker = () => {
    import(/* webpackChunkName: "emoji-picker" */ "./EmojiPicker")
      .then((module) => module.default)
      .then((emojiPicker) => {
        setEmojiPickerEl(createElement(emojiPicker));
      });
  };

  const closeEmojiPickerHandler = () => {
    setEmojiPickerEl(null);
  };

  return (
    <ErrorBoundary>
      <div>
        <MessageList />
        <MessageInput onClick={openEmojiPicker} />
        {emojiPickerEl}
      </div>
    </ErrorBoundary>
  );
};