import React from 'react';


function UserCard (props) {
    return (
        <div className='user-card'>
            <div className='card'>
                <img className='profile-pic' src={props.user.avatar_url} />
                <h3>{props.user.name}</h3>
                <p>Username: {props.user.login}</p>
                <p>Hometown: {props.user.location}</p>
                <p>Github Site: <a href={props.user.html_url}>{props.user.html_url}</a></p>
                
             </div>
        </div>
            
             
      
        
    );
}

export default UserCard;