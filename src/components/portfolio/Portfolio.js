import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import './Portfolio.css';

const Portfolio = () => {

    const [projects, setProjects] = useState({});
    useEffect(() =>{
        axios.get('https://ascadias.herokuapp.com/portfolio')
        .then(
            res => setProjects(res.data)
        )
    }, [setProjects]);

    return (
        <Fragment className='portfolio'>
            {projects.length > 0 && projects.map((project, index) =>
                <Fragment className='portfolio__projects'>
                    <h1 classname='project__name'>{project.name}</h1>
                    <img
                    className='project__img'
                    alt='project img'
                    src={project.image}
                    ></img>
                    <p className='project__desc'>{project.descripcion}</p>
                    <a
                    className='project__link'
                    href={project.link}
                    >Visitar</a>
                </Fragment>
            )}
        </Fragment>
    );
}

export default Portfolio;
