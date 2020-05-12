import React from 'react';

function FollowerCard (props) {

    return (
        <div className='card'>
            <img className='profile-pic' src={props.follower.avatar_url} />
            <p>Username: {props.follower.login}</p>
            <p>Github Site: {props.follower.html_url}</p>
            
        </div>
    );
}

export default FollowerCard;