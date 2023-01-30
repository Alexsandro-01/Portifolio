import Image from 'next/image';
import React from 'react'

import styles from '../styles/Certificates.module.css'
import fundamentos from '../public/images/certificates/fundamentos.png';
import frontEnd from '../public/images/certificates/front-end.png'
import backEnd from '../public/images/certificates/back-end.png'
import cienciaDaComputacao from '../public/images/certificates/ciencia-da-computacao.png'
import certificadoDeConclusao from '../public/images/certificates/certificado-de-conclusao.png'

function Certificates() {
  const images = [
    {
      img: fundamentos,
      url: 'https://www.credential.net/c0f38491-ccd2-4015-abe6-a7d2dc489628#gs.nnnrwb'
    },
    {
      img: frontEnd,
      url: 'https://www.credential.net/ff9c845c-fd09-408b-95cf-14f5ecb4366e#gs.nnnpn8'
    },
    {
      img: backEnd,
      url: 'https://www.credential.net/e65336e4-a1d6-4bb4-ac19-5812ba7a2205#gs.nnkn8y'
    },
    {
      img: cienciaDaComputacao,
      url: 'https://www.credential.net/97400391-3c3a-438f-b9be-2f3b6ef56098#gs.nkf2eh'
    },
    {
      img: certificadoDeConclusao,
      url: 'https://www.credential.net/c4a084ed-7f15-4a17-97a3-e4063adddfa7'
    }
  ];

  return (
    <section className={styles.certificates} id='certificates'>
      <h1>{'->'} Certificados</h1>
      <div className={styles['list-images']}>
        {
          images.map((certificate, index) => (
            <div key={index} className={styles['img-card']}>
              <a href={certificate.url} target="_blank" rel="noreferrer">
                  <Image src={certificate.img} alt="Certificado" />
              </a>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Certificates