import React from 'react';
import '../../App.css';
import ReactPlayer from 'react-player';

function csgo(){
    return  (
        <div className='csgo'>
        
       
            <div className="video">
            <ReactPlayer className='video' 
                
            controls url= 'https://youtu.be/2OyZaqWrG00' />
            </div>
            <h1 >CSGO</h1>
        
    </div>
    );
}

export default  csgo;