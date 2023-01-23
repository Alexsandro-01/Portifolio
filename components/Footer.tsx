import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa'

import styles from '../styles/Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <nav>
        <ul className={styles.social}>
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
              rel="noreferrer"
            >
              <FaEnvelope />
            </a>
          </li>
        </ul>
      </nav>
      <p>
        Desenvolvido por <span>&copy; <a href='https://www.linkedin.com/in/alexsandro-pinheiro-dev/' target="_blank" rel='noreferrer' >Alexsandro</a></span> inspirado por <a href='https://brittanychiang.com/' target="_blank" rel="noreferrer">Brittany Chiang</a>
      </p>
    </footer>
  )
}

export default Footer