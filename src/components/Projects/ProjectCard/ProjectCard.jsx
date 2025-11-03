import styles from './ProjectCard.module.css'


function ProjectCard({project}){
  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <img className={styles.headIcon} src={`${process.env.PUBLIC_URL}/project-icon.png`} alt="project icon" />

        <h3>{project.name}</h3>
      </div>

      <p>{project.smallDescription}</p>

      <div className={styles.foot}>
        <h4>{project.langs}</h4>

        <div className={styles.imageWrapper}>
          <a href={project.ghLink} target="_blank" rel="noopener noreferrer">
            <img className={styles.footIcon} src={`${process.env.PUBLIC_URL}/github-mark-white.png`} alt="github link" />
          </a>
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <img className={styles.footIcon} src={`${process.env.PUBLIC_URL}/external-link-icon.png`} alt="external link" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;
