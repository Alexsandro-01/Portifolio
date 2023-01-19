import React, { useEffect, useState } from 'react';
import OthersCard from './OthersCard';

import { TGithubResponse } from '../types/TGithubResponse';
import styles from '../styles/OthersProjects.module.css';

function OthersProjects() {
  const [repos, setRepos] = useState<TGithubResponse[]>([]);

  async function getRepos(): Promise<TGithubResponse[]> {
    const response = await fetch('https://api.github.com/users/Alexsandro-01/repos');

    const repositories = await response.json();

    return repositories;
  }

  async function filterRepos() {
    const filterNames = [
      "Blogs-API", "Delivery-app", "Eleicoes-2022",
      "Medieval-store", "Online-Store", "task-force-backend"
    ]

    const filteredRepos = (await getRepos()).filter((repo) => {
      if (filterNames.includes(repo.name)) {
        return repo;
      }
    });

    setRepos(filteredRepos);
  }

  useEffect(() => {
    filterRepos()
  }, []);

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