import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Alexsandro</title>
        <meta name="description" content="Portifólio do Alexsandro Pinheiro" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
    <div className="wrapper">
      <div className="logo">
        <h1>A</h1>
      </div>
      <nav className="wide">
        <div>
          {/* <!-- <button>X</button> --> */}
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
      <nav className="mobile">
        <button>X</button>
        <div className='toogle-container'>
          <div className="blur"></div>
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
      <main className={styles.main}>
       
      </main>
    </>
  )
}
