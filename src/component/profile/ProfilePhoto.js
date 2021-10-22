import React from 'react'

import hamza from './hamza.jpg'
const ProfilePhoto = () => {
    return (
        <div className="photo">
         <img src={hamza} alt="hamza" style={{width:"300px",height:"300px", borderRadius:"200px"}}></img>
        </div>
    )
}

export default ProfilePhoto
