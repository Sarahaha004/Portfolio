import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.headingContainer}>
          <div className={styles.heading}>
            <p>About</p>
          </div>
          <div></div>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.contentText}>
            <p>Hello, World! I'm an Aspiring React Wizard! 🚀</p>
          </div>
          <div>
            <p className={styles.content}>
            🌱 I'm a passionate beginner React developer on a mission to craft immersive user interfaces and turn dreams into reality.
            <br/>
            <br/>
          🎓 I am currently pursuing my undergraduate degree in
             Information Technology at Rajalakshmi Engineering College,Chennai.
              <br/>
              <br/>
              🚴‍♂️🎶When I'm not immersed in code, you can find me exploring the great outdoors,or losing myself in the world of music.
              I believe that the best ideas often come when you step away from the screen and allow your mind to wander, and let the rhythm of melodies fuel your creativity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
