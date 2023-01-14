import React from 'react'

import styles from '../styles/Hello.module.css';

function Hello() {
  return (
    <section className={styles.home}>
      <article>
        <p className={styles.destak}>Boas vindas! Eu sou o</p>
        <h1>Alexsandro Pinheiro</h1>
        <p>
          Um programador Jr curioso, recém formado no curso de Desenvolvimento Web
          Full Stack da Trybe. Busco combinar o que aprendi no curso para criar códigos
          inovadores e continuar aprendendo cada vez mais enquanto desbravo o
          mundo da tecnologia.
        </p>
      </article>
  </section>
  )
}

export default Hello;