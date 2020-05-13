import React from 'react';
import FollowerCard from './FollowerCard';

function Followers (props) {
    return (
            <div className='followers-section'>
                <h3>Dominique's Followers:</h3>
                <div className='followers'>
                    {props.followers.map(follower => (
                        <FollowerCard follower={follower} key={follower.id}/>
                    ))}
                   
                </div>
                
                
            </div>
            
        )
    
}

export default Followers;