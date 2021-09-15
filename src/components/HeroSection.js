import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
    return (
        <div className ='hero-container'>
            <video src ="/videos/video-2.mp4" autoPlay loop muted />
            <h1>
                HELLO LOOK HERE!!!</h1>
                <p> Videos are not playing</p>
                <div className="hero-btns">
                    <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'>Get Started</Button>
                      <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'>Watch Videos <i className='far fa-play-circle' /> </Button>
                </div>
            
        </div>
    )
}

export default HeroSection
