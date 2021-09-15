import React from 'react';
import '../../App.css';
import ReactPlayer from 'react-player';
import videojs from 'video.js';
import output from '../../video/output.mp4'

function forza(){
    return  (
        <div className='forza'>
        
       
            <div className="video">
           <video
                id="my-video1"
                class="video-js vjs-theme-fantasy"
                controls
                preload="auto"
                poster="POSTER.png"
                data-setup='{ "playbackRates": [0.2, 0.5,0.7, 1,1.2, 1.5,1.7, 2] }'
              >
                <source src="../../video/output.mp4" type="video/mp4" />

                <p class="vjs-no-js">
                  To view this video please enable JavaScript, and consider
                  upgrading to a web browser that
                  <a
                    href="https://videojs.com/html5-video-support/"
                    target="_blank"
                    >supports HTML5 video
                    </a>
                </p>
              </video>
            </div>
            <h1 >FORZA</h1>
        
    </div>
    );
}

export default  forza;
   
    
        
    
