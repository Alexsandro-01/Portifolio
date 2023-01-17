import Image from 'next/image';
import React, { useState, useEffect } from 'react'

import { TGithubResponse } from '../types/TGithubResponse';
import ProjectCard from './ProjectCard';

import styles from '../styles/Projects.module.css';


function Projects() {
  const [repos, setRepos] = useState<TGithubResponse[]>([]);

  async function getRepos(): Promise<TGithubResponse[]> {
    const response = await fetch('https://api.github.com/users/Alexsandro-01/repos');

    const repositories = await response.json();
    
    return repositories;
  }

  async function filterRepos() {
    const filterNames = [
      "Form-multi-step",
      "trybetunes",
      "trybewallet",
      "Bankin"
    ]

    const filteredRepos = (await getRepos()).filter((repo) => {
      if (filterNames.includes(repo.name)) {
        repo.image = `/projects-images/${repo.name}.png`;
        return repo;
      }
    });

    setRepos(filteredRepos);
    console.log(filteredRepos);
    
  }

useEffect(() => {
  filterRepos()
}, [])

  return (
    <section className={styles.projects} id='projects'>
      <h1>{'->'} Projetos</h1>
      <div className={styles['list-projects']}>
        {
          repos.map((repo) => (
            <ProjectCard key={repo.name} repo={repo} />
          ))
        }
      </div>
    </section>
  )
}

export default Projects