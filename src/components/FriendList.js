import React from 'react';

function FriendList({ friends, selectFriend, selectedFriend }) {
    return (
        <div className="friend-list">
            <h2>Friends</h2>
            <ul>
                {friends.map((friend) => (
                    <li
                        key={friend.id}
                        className={friend.id === selectedFriend ? 'selected' : ''}
                        onClick={() => selectFriend(friend.id)}
                    >
                        {friend.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FriendList;
