import React from 'react';
import styles from './Skills.module.css';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';


const Skills = () => {
  return (
    <div className={styles.skills}>
      <div className={styles.container}>
        <div>
          <p className={styles.heading}>Skills</p>
          <p className={styles.subHeading}>These are the technologies I've worked with</p>
        </div>

        <div className={styles.gridContainer}>
          <div className={`${styles.skillBox} ${styles.shadow}`}>
            <img className={styles.skillImage} src={HTML} alt="HTML icon" />
            <p className={styles.skillName}>HTML</p>
          </div>
          <div className={`${styles.skillBox} ${styles.shadow}`}>
            <img className={styles.skillImage} src={CSS} alt="CSS icon" />
            <p className={styles.skillName}>CSS</p>
          </div>
          <div className={`${styles.skillBox} ${styles.shadow}`}>
            <img className={styles.skillImage} src={JavaScript} alt="JavaScript icon" />
            <p className={styles.skillName}>JavaScript</p>
          </div>
          <div className={`${styles.skillBox} ${styles.shadow}`}>
            <img className={styles.skillImage} src={ReactImg} alt="React icon" />
            <p className={styles.skillName}>React</p>
          </div>
          <div className={`${styles.skillBox} ${styles.shadow}`}>
            <img className={styles.skillImage} src={GitHub} alt="GitHub icon" />
            <p className={styles.skillName}>GitHub</p>
          </div>
          <div className={`${styles.skillBox} ${styles.shadow}`}>
            <img className={styles.skillImage} src={Tailwind} alt="Tailwind icon" />
            <p className={styles.skillName}>Tailwind</p>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
