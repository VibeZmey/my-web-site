import styles from './Skills.module.css'
import Title from "../Title/Title";

function Skills(){

  const hard = [
    { name: 'React, Node.js, CSS, HTML', icon: '⚡' },
    { name: 'C++, QT', icon: '🔧' },
    { name: 'C#, WPF, APS.NET', icon: '🎯' },
    { name: 'GIT, Docker, JWT', icon: '📦' }
  ]

  const soft = [
    { name: 'Коммуникабельность', icon: '💬' },
    { name: 'Критическое мышление', icon: '🧠' },
    { name: 'Работа в команде', icon: '👥' },
    { name: 'Быстрое обучение', icon: '📚' }
  ]

  return (
    <section id="skills" className={styles.skills}>
      <Title>My skills</Title>

      <div className={styles.container}>
        {/* Soft Skills */}
        <div className={styles.skillCategory}>
          <h2>Soft Skills</h2>
          <div className={styles.skillsGrid}>
            {soft.map((skill, i) => (
              <div key={i} className={styles.skillCard}>
                <div className={styles.skillIcon}>{skill.icon}</div>
                <p className={styles.skillName}>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hard Skills */}
        <div className={styles.skillCategory}>
          <h2>Hard Skills</h2>
          <div className={styles.skillsGrid}>
            {hard.map((skill, i) => (
              <div key={i} className={styles.skillCard}>
                <div className={styles.skillIcon}>{skill.icon}</div>
                <p className={styles.skillName}>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
