import React from 'react'
import {FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaEnvelope} from 'react-icons/fa';

import styles from '../styles/Home.module.css';

function Social() {
  return (
    <nav className={styles.nav}>
      <ul>
      <li></li>
      <li>
        <a href="https://github.com/Alexsandro-01" target="_blank" rel='noreferrer'>
          <FaGithub />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/alexsandro-pinheiro-dev/"
          target="_blank"
          rel='noreferrer'
        >
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/1_alex_sandro"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="https://wa.link/7lix6q" target="_blank" rel='noreferrer'>
          <FaWhatsapp />
        </a>
      </li>
      <li>
        <a
          href="mailto:alexsandrofire@hotmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </a>
      </li>
      <li></li>
    </ul>
    </nav>
  )
}

export default Social