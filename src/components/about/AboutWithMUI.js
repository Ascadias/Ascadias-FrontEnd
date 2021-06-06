import React from 'react';
import './About.css';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const About = () => {
    return (
        <React.Fragment className="about">
            <Grid container>
                <Grid item className="about__desc">
                    <h3>Déjame Hablarte Sobre Mi</h3>
                    <p>Soy un Desarrollador Web FullStack Junior, Especializado en Javascript</p>
                </Grid>
                <Grid item className="about__button">                
                        <Button
                            className="cv-button"
                            variant="contained"
                            color="Primary"
                            onClick={() => { alert('Descargar') }}
                        >
                            Descarga mi CV
                        </Button>
                    </Grid>
                <Grid item className="about__img">
                    <img
                        src="https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_960_720.jpg"
                        alt="about"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default About
