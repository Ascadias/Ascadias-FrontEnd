import React from 'react'
import './Footer.css'
import Facebook from '../../assets/media/icons/facebook.svg';
import Linkedin from '../../assets/media/icons/linkedin.svg';
import Twitter from '../../assets/media/icons/twitter.svg';
import Youtube from '../../assets/media/icons/youtube.svg';
import Github from '../../assets/media/icons/github.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-info">
                <h1>Marcelo Fernandez</h1>
                <p>Buenos Aires, Argentina.</p>
            </div>
            <div className="footer-contact">
                <h3>Contáctame</h3>
                <p>Para más información...</p>
            </div>
            <div className="footer-sns">
                <div className="design-by">
                    Aplicación web diseñada por Marcelo Fernandez
                </div>
                <div className="sns-links">
                    <a href="https://www.linkedin.com/in/jmarce99/" target="_blank" rel="noreferrer">
                        <img src={Linkedin} height="18" alt="Linkedin icon"></img>
                    </a>
                    <a href="https://twitter.com/j_marce99" target="_blank" rel="noreferrer">
                        <img src={Twitter} height="18" alt="Twitter icon"></img>
                    </a>
                    <a href="https://www.facebook.com/j.marce99/" target="_blank" rel="noreferrer">

                        <img src={Facebook} height="18" alt="Facebook icon"></img>
                    </a>
                    <a href="https://github.com/Ascadias" tarket="_blank" rel="noreferrer">
                        <img src={Github} height="20" alt="GitHub mark"></img>
                    </a>
                    <a href="" target="_blank" rel="noreferrer">
                        <img src={Youtube} height="16" alt="YouTube icon"></img>
                    </a>

                </div>
            </div>
        </footer>
    )
}

export default Footer
