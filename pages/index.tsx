import Head from 'next/head'
import Image from 'next/image'


import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Social from '../components/Social'
import Hello from '../components/Hello'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'
import OthersProjects from '../components/OthersProjects'
import Certificates from '../components/Certificates'
import Footer from '../components/Footer'

import { TGithubResponse } from '../types/TGithubResponse'
import { PropType } from '../types/PropType'


export async function getStaticProps() {
  const response = await fetch('https://api.github.com/users/Alexsandro-01/repos');

  const repositories: TGithubResponse[] = await response.json();

  const othersProjects = [
    "Blogs-API", "Delivery-app", "Eleicoes-2022",
    "Medieval-store", "Online-Store", "task-force-backend"
  ]

  const filteredOthersProjects = repositories.filter((repo) => {
    if (othersProjects.includes(repo.name)) {
      return repo;
    }
  });

  const projectsNames = [
    "Form-multi-step",
    "trybetunes",
    "trybewallet",
    "Bankin"
  ]

  const filteredProjects = repositories.filter((repo) => {
    if (projectsNames.includes(repo.name)) {
      repo.image = `/images/projects-images/${repo.name}.png`;
      return repo;
    }
  });

  return {
    props: {
      othersRepos: filteredOthersProjects,
      projects: filteredProjects
    }
  }
}

export default function Home({ othersRepos, projects }: PropType) {
  return (
    <>
      <Head>
        <title>Alexsandro</title>
        <meta name="description" content="Portifólio de Alexsandro Pinheiro" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Alex-logo.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <Social />
        <Hello />
        <AboutMe />
        <Projects repos={projects} />
        <OthersProjects repos={othersRepos} />
        <Certificates />
      </main>
      <Footer />
    </>
  )
}
