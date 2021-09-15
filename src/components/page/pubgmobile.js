import React from 'react';
import '../../App.css';
import ReactPlayer from 'react-player';

function pubgmobile(){
    return  (
        <div className='pubgmobile'>
        
       
            <div className="video">
            <ReactPlayer className='video' 
                
            controls url= 'https://youtu.be/rpg0WhsEhBU?t=57' />
            </div>
            <h1 >PUBGMOBILE</h1>
        
    </div>
    );
}

export default  pubgmobile;