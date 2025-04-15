import React from 'react';

function FriendList({ friends, selectFriend }) {
    return (
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
    );
}

export default FriendList;
