import React from 'react'
import './Cover.css';
import coverVideo from '../../media/coverVideo.mp4';

const Cover = () => {
  return (
    <div className='cover-container'>
        <video className='video' src={coverVideo} autoPlay loop muted />
        <h1> Edwin Ayerbe Rojas </h1>
        <p> Developer | Fontend | Entrepeneur </p>
    </div>
  )
}

export default Cover;