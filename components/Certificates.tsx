import React from 'react'

import styles from '../styles/Certificates.module.css'

function Certificates() {
  const images = [
    {
      img: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/48938492',
      url: 'https://www.credential.net/c0f38491-ccd2-4015-abe6-a7d2dc489628#gs.nnnrwb'
    },
    {
      img: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/53470344',
      url: 'https://www.credential.net/ff9c845c-fd09-408b-95cf-14f5ecb4366e#gs.nnnpn8'
    },
    {
      img: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/60747524',
      url: 'https://www.credential.net/e65336e4-a1d6-4bb4-ac19-5812ba7a2205#gs.nnkn8y'
    },
    {
      img: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/66831590',
      url: 'https://www.credential.net/97400391-3c3a-438f-b9be-2f3b6ef56098#gs.nkf2eh'
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
                <picture>
                  <img src={certificate.img} alt="Certificado" />
                </picture>
              </a>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Certificates