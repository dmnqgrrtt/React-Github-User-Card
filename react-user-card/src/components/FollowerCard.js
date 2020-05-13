import React from 'react';

function FollowerCard (props) {

    return (
        <div className='card'>
            <img className='profile-pic' src={props.follower.avatar_url} />
            <p>Username: {props.follower.login}</p>
            <p>Github Site: <a href={props.follower.html_url}>{props.follower.html_url}</a></p>
            
        </div>
    );
}

export default FollowerCard;