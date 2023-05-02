import './App.css';
import nodeEmoji from 'node-emoji';
import { useState } from 'react';

export default function App() {
  // 1. Create a state variable and setter, with
  // a default value of a random emoji
  const [emoji, setEmoji] = useState(nodeEmoji.random().emoji);
  const [emojiName, setEmojiName] = useState('');
  const hasError = emojiName !== '' && !nodeEmoji.hasEmoji(emojiName);

  // const [hasError, setHasError] = useState(false);

  return (
    <div className="App">
      <div>
        {/* 2. Show the emoji on the screen */}
        {emoji}
        <br />
        <button
          onClick={() => {
            // 3. Generate and set a new value for the emoji
            const newEmoji = nodeEmoji.random().emoji;
            setEmoji(newEmoji);
          }}
        >
          Generate
        </button>
        <br />
        <input
          value={emojiName}
          onChange={(event) => {
            setEmojiName(event.currentTarget.value);
            if (nodeEmoji.hasEmoji(event.currentTarget.value)) {
              // setHasError(false);
              setEmoji(nodeEmoji.find(event.currentTarget.value).emoji);
              // } else {
              //   setHasError(true);
            }
          }}
        />{' '}
        {hasError && 'x'}
      </div>
    </div>
  );
}
