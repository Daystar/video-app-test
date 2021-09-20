import React from 'react';
import '../../App.css';
import ReactPlayer from 'react-player';


function forza(){
    return  (
        <div className='forza'>
        
       <div className="video">
            <ReactPlayer className='video' 
                
            controls url= 'https://youtu.be/WWRPhdkQyIY?t=497' />
            </div>
         
            <h1 >FORZA</h1>
        
    </div>
    );
}

export default  forza;
   
    
        
    
