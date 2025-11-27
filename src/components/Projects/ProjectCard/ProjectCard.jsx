import styles from './ProjectCard.module.css'
import { ReactComponent as GitHub } from '../../../assets/github-icon.svg';
import { ReactComponent as ExternalLink } from '../../../assets/external-link-icon2.svg';
import { ReactComponent as Project } from '../../../assets/project-icon.svg';
function ProjectCard({project, modalOpen}) {
  return (
    <div className={`${styles.fadeIn} ${styles.cardWrapper}`}>
      <div className={styles.card} onClick={()=>modalOpen(project)}>
        <div className={styles.head}>
          <Project className={styles.headIcon} alt="project icon" />

          <h2>{project.name}</h2>
        </div>

        <p>{project.smallDescription}</p>

        <div className={styles.foot}>
          <span>{project.langs}</span>

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
