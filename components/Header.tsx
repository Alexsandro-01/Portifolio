import { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';

import styles from '../styles/Header.module.css';

function Header() {
  const [toggle, setToggle] = useState('toggle-container-closed');

  function toggleMenu() {
    const html = document.querySelector('html') as HTMLElement;
    let changeToggle = '';

    if (toggle === 'toggle-container') {
      changeToggle = 'toggle-container-closed';
      html.style.overflow = 'auto';

    } else {
      changeToggle = 'toggle-container'
      html.style.overflow = 'hidden';
    }

    setToggle(changeToggle);
  }

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <h1>A</h1>
        </div>
        <nav className={styles.wide}>
          <div>
            <ul>
              <li>
                <a href="#home">Início</a>
              </li>
              <li>
                <a href="#about-me">Sobre</a>
              </li>
              <li>
                <a href="#projects">Projetos</a>
              </li>
              <li>
                <a href="#certificates">Certificados</a>
              </li>
            </ul>
          </div>
        </nav>
        <nav className={styles.mobile}>
          <button
            onClick={toggleMenu}
          >
            {
              toggle === 'toggle-container-closed' ? (
                <FaBars />
              ) : (
                <FaTimes />
              )
            }
          </button>
          <div className={styles[toggle]}>
            <div className={styles.blur} onClick={toggleMenu}></div>
            <ul>
              <li>
                <a
                  href="#home"
                  onClick={toggleMenu}
                >Início</a>
              </li>
              <li>
                <a
                  href="#about-me"
                  onClick={toggleMenu}
                >Sobre</a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={toggleMenu}
                >Projetos</a>
              </li>
              <li>
                <a
                  href="#certificates"
                  onClick={toggleMenu}
                >Certificados</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header