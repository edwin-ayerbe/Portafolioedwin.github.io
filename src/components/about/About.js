import React from 'react'
import './About.css';
import edwinAyerbe from '../../media/edwinAyerbe.jpeg'

const About = () => {
  return (
    <div className='about-container'>
        <div className='about-desc'>
            <h3>Let me tell you something about me</h3>
        <p>I am 23 years old. I like to learn new things in the world of technology. I have a degree in "maintenance of computer equipment and design and implementation of structured cabling". In the year 2021 I started to learn about web development on my own by learning html, css, javascript, react, react native. Every time I want to improve myself by learning something new every day.</p>
        </div>
        <div className='about-ing'>
            <img src={edwinAyerbe} alt=''/>
        </div>
    </div>
  )
}

export default About