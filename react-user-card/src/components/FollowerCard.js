import React from 'react';

function FollowerCard (props) {

    return (
        <div className='follower-card'>
            <img className='profile-pic' src={props.follower.avatar_url} />
            <h3>{props.follower.name}</h3>
            <p>Username: {props.follower.login}</p>
            <p>Hometown: {props.follower.location}</p>
            <p>Github Site: {props.follower.html_url}</p>
            
        </div>
    );
}

export default FollowerCard;