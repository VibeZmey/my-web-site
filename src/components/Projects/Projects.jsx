import styles from './Projects.module.css'
import Title from "../Title/Title";
import ProjectCard from "./ProjectCard/ProjectCard";

function Projects(){

  const projects = [
    {
      name: 'VibeCaps',
      smallDescription: 'Интерактивный тренажёр для измерения и улучшения скорости печати в реальном времени.',
      fullDescription: 'Developer project',
      ghLink: 'https://github.com/VibeZmey/Vibe-Caps',
      liveLink: 'https://vibezmey.github.io/Vibe-Caps',
      images: [
        `${process.env.PUBLIC_URL}/vibecaps-1.png`,
        `${process.env.PUBLIC_URL}/vibecaps-2.png`,
        `${process.env.PUBLIC_URL}/vibecaps-3.png`
      ],
      langs: 'JS CSS HTML',
    },
    {
      name: 'Digital Shop',
      smallDescription: 'Магазин покупки цифровых товаров, таких как подписки на различные сервисы, пополнение игровых кошельков и др.',
      fullDescription: 'Developer project',
      ghLink: 'https://github.com/VibeZmey/Digital-shop-app',
      liveLink: 'https://t.me/DigitalDemoShopBot',
      images: [
        `${process.env.PUBLIC_URL}/checkers-1.png`,
        `${process.env.PUBLIC_URL}/checkers-2.png`,
        `${process.env.PUBLIC_URL}/checkers-3.png`
      ],
      langs: 'React Node.js',
    },
    {
      name: 'Checkers',
      smallDescription: 'Классические русские шашки с поддержкой двух игроков на одном устройстве.',
      fullDescription: 'Developer project',
      ghLink: 'https://github.com/VibeZmey/Checkers',
      images: [
        `${process.env.PUBLIC_URL}/checkers-1.png`,
        `${process.env.PUBLIC_URL}/checkers-2.png`,
        `${process.env.PUBLIC_URL}/checkers-3.png`
      ],
      langs: 'C++ Qt',
    },
    {
      name: 'Test Project',
      smallDescription: 'test description for right development of styles, something there...',
      fullDescription: 'Developer project',
      ghLink: 'link',
      liveLink: 'live-link',
      images: [
        `${process.env.PUBLIC_URL}/checkers-1.png`,
        `${process.env.PUBLIC_URL}/checkers-2.png`,
        `${process.env.PUBLIC_URL}/checkers-3.png`
      ],
      langs: 'Chat GPT-5 Cloude 4.5',
    },
  ]

  return (
    <section className={styles.projects} id='projects'>
      <Title>Projects</Title>

      <div className={styles.inner}>
        {projects.map(project => (<ProjectCard project={project}/>))}
      </div>
    </section>
  )
}
export default Projects;
