import React from 'react'
import { Button } from './Button'
import './HeroSection.css'; 
import '../App.css'; 



function HeroSection() {
  return (
    <div className='hero-container'>
 <video src='\videos\video-3.mp4' autoPlay loop muted />
       <h1>Abdelrahman Elsamalouty</h1>
      <p>Web Developer, average KFC enjoyer , etc.</p>
      <div className='hero-btns'>
        <Button className = 'btns' buttonStyle= 'btn--outline'
        buttonSize= 'btn--large'>HIRE ME</Button>
        <Button className = 'btns' buttonStyle= 'btn--primary'
        buttonSize= 'btn--large'>HIRE ME BUT COOLER <i className='far fa-play-circle'/>
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
