import React, { useState, useEffect, Fragment } from 'react';
import Axios from 'axios';
import './About.css';

const About = () => {

    const [information, setInformation] = useState({});
    useEffect(() =>{
        Axios.get('https://ascadias.herokuapp.com/about')
        .then(
            res => setInformation(res.data[0])
        )
    }, [setInformation]);

    return (
        <Fragment className='about'>
           <Fragment className='about__img'>
                <img
                className='about__img-img'
                src={information.photo}
                alt='profile photo'
                ></img>
           </Fragment>
           <Fragment className='about__desc'>
               <h1>{information.name}</h1>
               <h2>{information.profession}</h2>
               <p>{information.about_me}</p>
               <ul className='skills'>
                   {information.skills && information.skills.map((skill, index) =>
                       <li className='skills__li'>{skill}</li>
                   )}
               </ul>
           </Fragment>
        </Fragment>
    );
}

export default About;
