import React from 'react'
import Image from 'next/image';

import { TGithubResponse } from '../types/TGithubResponse'
import styles from '../styles/Cards.module.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function ProjectCard({ repo }: { repo: TGithubResponse }) {
  return (
    <div className={styles.card}>
      <div>
          <Image className={styles.thumb} src={repo.image} alt={repo.name} width='620' height='250' />
      </div>
      <div className={styles.description}>
        <article>
          <h3>{repo.name}</h3>
          <p>{repo.description}</p>
        </article>
        <div>
          <ul>
            {
              repo.topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))
            }
          </ul>
          <div className={styles.links}>
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            {
              repo.homepage && (
                <a href={repo.homepage} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt />
                </a>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard