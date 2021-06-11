import React from 'react';
import './About.css';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const About = () => {
    return (
        <div className="about">
            <div className="about__desc">
                <h3>Déjame Hablarte Sobre Mi</h3>
                <p>Hola, mi nombre es <b>Marcelo Fernandez</b>, tengo 21 años.
                Soy estudiante autodidacta en <b>Desarrollo Web Full Stack</b>,
                 me considero una persona creativa y proactiva, adoro aprender nuevas tecnologías,
                  superarme a mi mismo y mejorar mis proyectos en base a las cosas que vaya aprendiendo en mi camino:)</p>

                <h3>Conocimientos</h3>
                    <ul>
                        <li>• HTML5</li>
                        <li>• NextJS</li>
                        <li>• Firebase</li>
                        <li>• CSS3</li>
                        <li>• NodeJS</li>
                        <li>• UI / UX</li>
                        <li>• JavaScript</li>
                        <li>• Express</li>
                        <li>• Git / GitHub</li>
                        <li>• React</li>
                        <li>• MySQL</li>
                        <li>• VS Code</li>
                        <li>• Redux</li>
                        <li>• MongoDB</li>
                        <li>• Photoshop</li>
                    </ul>
                    
                <div container className="button-container">
                    <Grid item>                
                        <Button
                            className="cv-button"
                            variant="contained"
                            color="Primary"
                            onClick={() => { alert('Descargar') }}
                        >
                            Descarga mi CV
                        </Button>
                    </Grid>
                    
                </div>
            </div>
            <div className="about__img">
                <img
                    src="https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_960_720.jpg"
                    alt="about"
                    />
            </div>
        </div>
    )
}

export default About
