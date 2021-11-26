import React from "react";
import styles from "../modules/Skills.module.css";

const Skills = () => {
  return (
    <div className={styles.skills_container}>
      <div className={styles.skills}>
        <h2 className={styles.skills_h2}>Habilidades</h2>
        <div className={styles.skills_technology}>
          <h3 className={styles.skills_h3}>Técnicas</h3>
          <h3 className={styles.skills_h3}>Blandas</h3>
        </div>
      </div>
    </div>
  );
};

export default Skills;
