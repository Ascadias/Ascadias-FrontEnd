import React from 'react';
import './Cover.css';
import coverVideo from '../../assets/media/coverVideo.mp4';
import Logo from '../logo/Logo';

const cover = () => {
    return (
        <div className="cover-container">
            <video className="video" src={coverVideo} autoPlay loop muted />
            <Logo/>
            <h1>Julio Fernandez</h1>
            <p>Desarrollador Full Stack en JavaScript</p>
        </div>
    )
}

export default cover
