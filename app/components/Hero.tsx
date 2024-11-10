import React from 'react'

export default function Hero() {
  return (
    <div className='hero'>
      <video autoPlay loop muted className='hero-video'>
        <source src="/hero-vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='hero-content'>
        <h1>Your Journey Begins Here</h1>
        <p>Explore the world with us and start your adventure today</p>
      </div>
    </div>
  
  )
}
