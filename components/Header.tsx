import { useEffect, useState } from 'react';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';

import styles from '../styles/Header.module.css';

function Header() {
  const [toggle, setToggle] = useState('toggle-container-closed');
  const [theme, setTheme] = useState('dark');

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

  function toggleTheme(localTheme: string | undefined) {
    const body = document.querySelector('body') as HTMLElement;
    
    if (localTheme) {
      body.className = localTheme;  
    }
    
    if (!localTheme) {
      body.className = theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', body.className)
    }

    setTheme(body.className)
  }


  useEffect(() => {
    const localTheme = localStorage.getItem('theme');

    if (localTheme) {
      toggleTheme(localTheme);
    }
  }, [])

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
                <label
                  className={styles.switch}
                  htmlFor='changeTheme'
                  aria-label='toogle theme'
                >
                  <input
                    type="checkbox"
                    checked={theme === 'dark'}
                    onChange={() => toggleTheme(undefined)}
                    id="changeTheme"
                  />
                    <span className={styles.slider}>
                      {
                        theme === 'dark' ? (<FaMoon />) : (<FaSun />)
                      }
                    </span>
                </label>
              </li>
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
            aria-label="toogle menu"
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
                <label
                  className={styles.switch}
                  htmlFor='changeTheme'
                  aria-label='toogle theme'
                >
                  <input
                    type="checkbox"
                    checked={theme === 'dark'}
                    onChange={() => toggleTheme(undefined)}
                    id="changeTheme"
                  />
                    <span className={styles.slider}>
                      {
                        theme === 'dark' ? (<FaMoon />) : (<FaSun />)
                      }
                    </span>
                </label>
              </li>
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