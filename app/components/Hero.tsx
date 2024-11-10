import React from 'react'

export default function Hero() {
  return (
    <div className='hero'>
      <video autoPlay loop muted className='hero-video'>
        <source src="/hero-vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='hero-content'>
        <h1>Welcome to My Website</h1>
        <p>Your introduction text goes here.</p>
      </div>
    </div>
  
  )
}
