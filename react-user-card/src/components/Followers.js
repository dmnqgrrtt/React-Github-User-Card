import React from 'react';
import FollowerCard from './FollowerCard';

function Followers (props) {
    return (
            <div className='followers-section'>
                <h4>Followers:</h4>
                {props.followers.map(follower => (
                    <FollowerCard follower={follower} key={follower.id}/>
                ))}
                
            </div>
            
        )
    
}

export default Followers;