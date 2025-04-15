import React, { useState } from 'react';
import FriendList from './components/FriendList';
import ChatWindow from './components/ChatWindow';
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

  const selectedFriendName = friends.find((friend) => friend.id === selectedFriend)?.name || '';

  return (
      <div className="app">
        <FriendList friends={friends} selectFriend={selectFriend} />
        {selectedFriend && (
            <ChatWindow
                friendId={selectedFriend}
                friendName={selectedFriendName}
                messages={messages[selectedFriend] || []}
                sendMessage={sendMessage}
            />
        )}
      </div>
  );
}

export default App;
