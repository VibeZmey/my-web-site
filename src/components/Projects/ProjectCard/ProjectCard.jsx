import styles from './ProjectCard.module.css'
import { ReactComponent as GitHub } from '../../../assets/github-icon.svg';
import { ReactComponent as ExternalLink } from '../../../assets/external-link-icon2.svg';

function ProjectCard({project, modalOpen}) {
  return (
    <div className={`${styles.fadeIn} ${styles.cardWrapper}`}>
      <div className={styles.card} onClick={()=>modalOpen(project)}>
        <div className={styles.head}>
          <img className={styles.headIcon} src={`${process.env.PUBLIC_URL}/project-icon.png`} alt="project icon" />

          <h3>{project.name}</h3>
        </div>

        <p>{project.smallDescription}</p>

        <div className={styles.foot}>
          <h4>{project.langs}</h4>

          <div className={styles.imageWrapper}>
            <a href={project.ghLink} target="_blank" rel="noopener noreferrer">
              <GitHub className={`${styles.footIcon}`} alt="gitHub link" />
            </a>
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className={styles.footIcon} alt="external link" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;
