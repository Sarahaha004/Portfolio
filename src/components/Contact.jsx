import React from 'react';
import styles from './Contact.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
          <div className={styles.pb8}>
          <p className={styles.heading}>Contact</p>
            <div className={styles.icons}>
            <a
              href="https://github.com/Sarahaha004"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className={styles.icon} />
            </a>
            <a
              href="https://www.linkedin.com/in/apsara-s-178905242/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className={styles.icon} />
            </a>
          </div>
          
            <p className={styles.subHeading}>
              Shoot me an email 🚀 - kssapsara@gmail.com
            </p>
          </div>
      </div>
    </div>
  );
};

export default Contact;
