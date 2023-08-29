import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}> 
      <div className={`${styles.container} ${styles.flexCol} ${styles.justifyCenter} ${styles.hFull}`}>
        <p className={styles.textPink}>Hello World!,I am</p>
        <h1 className={styles.textHeading}>APSARA S </h1>
        <h2 className={styles.textSubheading}>I'm a Full Stack Developer.</h2>
        <p className={styles.textDescription}>
        Welcome to my digital realm, where I bring ideas to life and build captivating web experiences. 🚀
        </p>
      </div>
      </div>
  );
};

export default Home;
