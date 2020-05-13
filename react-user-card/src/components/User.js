import React from 'react';
import Followers from './Followers';
import UserCard from './UserCard';

function User (props) {
    return (
        <div className='user'>
            <UserCard user={props.user} />
            <Followers followers={props.followers} />
        </div>
    );
    
    
}

export default User;