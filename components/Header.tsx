import styles from '../styles/Header.module.css';

function Header() {
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
                <a href="#about-me">About</a>
              </li>
            </ul>
          </div>
        </nav>
        <nav className={styles.mobile}>
          <button>X</button>
          <div className={styles['toggle-container']}>
            <div className={styles.blur}></div>
            <ul>
              <li>
                <a href="#home">Início</a>
              </li>
              <li>
                <a href="#about-me">About</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header