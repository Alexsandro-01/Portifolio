import React, { useEffect, useState } from 'react';
import OthersCard from './OthersCard';

import { TGithubResponse } from '../types/TGithubResponse';
import styles from '../styles/OthersProjects.module.css';

function OthersProjects({ repos }: { repos: TGithubResponse[] }) {

  return (
    <section className={styles.projects} id='projects'>
      <h1>Outros Projetos</h1>
      <div className={styles['list-projects']}>
        {
          repos.map((repo) => (
            <OthersCard key={repo.name} repo={repo} />
          ))
        }
      </div>
    </section>
  )
}

export default OthersProjects