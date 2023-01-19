import React from 'react'

import { TGithubResponse } from '../types/TGithubResponse'
import { FaExternalLinkAlt, FaFolder, FaGithub } from 'react-icons/fa'
import styles from '../styles/OthersProjects.module.css';

function OthersCard({ repo }: { repo: TGithubResponse }) {
  return (
    <div className={styles.card}>
      <div>
        <div className={styles.icons}>
          <FaFolder className={styles.folder} />
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

        <div className={styles.description}>
          <h3>{repo.name}</h3>
          <p>{repo.description}</p>
        </div>
      </div>

      <ul>
        {
          repo.topics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default OthersCard