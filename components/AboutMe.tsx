import React from 'react'
import Image from 'next/image'

import ProfilePicture from '../public/Alex.jpg';
import styles from '../styles/AbouteMe.module.css';

function AboutMe() {
  return (
    <section className={styles["about-me"]} id="about-me">
      <div className={styles.container}>
        <div className={styles.description}>
          <article>
            <h1>{'->'} Sobre mim</h1>
            <p>
              Eu sou o Alexsandro e eu adoro programar e desenvolver qualquer
              coisa com tecnologia. Percebi meu interesse por tecnologia ainda
              no ensino médio, mas por morar no interior não achei que
              conseguiria seguir esse caminho. Com a pandemia e a ampliação do
              trabalho remoto percebi que eu teria uma chance de correr atrás do
              meu sonho.
            </p>
            <p>
              Em 2021 conheci a Trybe e comecei o curso de Desenvolvimento Web
              Full Stack com 1600 horas de duração ao longo de um ano, que além
              de hardskills ensina sobre as softskills que um profissional
              precisa para ser bem qualificado.
            </p>
            <p>
              Terminei o curso em dezembro de 2022 depois de passar por varias
              avaliações de competência com projetos práticos ao final de cada
              bloco de aprendizagem para validar o conhecimento adquirido ao
              longo do curso.
            </p>
            <p>
              Algumas tecnologias que eu domino e que aprendi ao longo do curso
              e tenho proficiência:
            </p>
            <ul>
              <li>Javascript</li>
              <li>Typescrypt</li>
              <li>React</li>
              <li>Jest</li>
              <li>Node.js</li>
              <li>Docker</li>
              <li>MySql</li>
              <li>Mongodb</li>
            </ul>
          </article>
        </div>
        <div className={styles.picture}>
          <div className={styles["img-container"]}>
            <Image src={ProfilePicture} alt="Foto do Alexsandro" className={styles.img} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;