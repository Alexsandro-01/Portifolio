import Image from 'next/image';
import React, { useState, useEffect } from 'react'

import { TGithubResponse } from '../types/TGithubResponse';
import ProjectCard from './ProjectCard';

import styles from '../styles/Projects.module.css';


function Projects({ repos }: { repos: TGithubResponse[] }) {

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