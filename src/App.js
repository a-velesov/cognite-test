import React, { useState } from 'react';
import './App.css';

function App() {
  const [friends] = useState([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ]);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [messages, setMessages] = useState({});

  const selectFriend = (friendId) => {
    setSelectedFriend(friendId);
    if (!messages[friendId]) {
      setMessages({ ...messages, [friendId]: [] });
    }
  };

  const sendMessage = (friendId, message) => {
    const newMessages = { ...messages };
    newMessages[friendId].push(message);
    setMessages(newMessages);
  };

  return (
      <div className="app">
        <div className="friend-list">
          <h2>Friends</h2>
          <ul>
            {friends.map((friend) => (
                <li key={friend.id} onClick={() => selectFriend(friend.id)}>
                  {friend.name}
                </li>
            ))}
          </ul>
        </div>
        {selectedFriend && (
            <div className="chat-window">
              <h2>Chat with {selectedFriend}</h2>
              <div className="messages">
                {messages[selectedFriend].map((msg, index) => (
                    <div key={index}>{msg}</div>
                ))}
              </div>
              <input type="text" />
              <button>Send</button>
            </div>
        )}
      </div>
  );
}

export default App;
