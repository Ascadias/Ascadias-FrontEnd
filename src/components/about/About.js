import React from "react";
import "./About.css";
import Button from "@material-ui/core/Button";
import CVPDF from "./../../assets/media/cv.pdf";
import styles from "../modules/About.module.css";

const About = () => {
  return (
    <div className={styles.about_container}>
      <div className={styles.about}>
        <h3 className={styles.about_h3}>Sobre Mi</h3>
        <p className={styles.about_p}>
          Soy una persona Creativa y Proactiva que le encanta el mundo de la
          tecnología, enfrentarse a nuevos desafíos y mejorarse a si mismo cada
          día. <br />
          Detallista, Perfeccionista y Autodidacta por naturaleza lo cual me
          llevo a incursionar en el sector de la Programación, el Diseño y la
          Creación de contenido, convirtiéndome en un apasionado Full Stack
          Developer
        </p>
        <div className={styles.about_button_container}>
          <Button className={styles.about_cv_button} variant="contained">
            <a
              href={CVPDF}
              target="_blank"
              rel="noreferrer"
              className={styles.about_cv_button_a}
            >
              Mostrar CV
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
