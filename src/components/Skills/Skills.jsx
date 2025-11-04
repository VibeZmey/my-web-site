import styles from './Skills.module.css'
import Title from "../Title/Title";

function Skills(){

  const hard = ['React, Node.js, CSS, HTML', 'C++, QT', 'C#, WPF, APS.NET', 'GIT, Docker, JWT']
  const soft =['Коммуникабельность', 'Критическое мышление', 'Работа в команде', 'Быстрое обучение']
  return (
    <section id="skills" className={styles.skills}>
      <Title>My skills</Title>

      <div className={styles.inner}>
        <div className={styles.skillWrapper}>
          <h2>Soft</h2>
          <ul className={styles.skillsList}>
            {soft.map((skill) => (<li>{skill}</li>))}
          </ul>
        </div>

        <div className={styles.skillWrapper}>
          <h2>Hard</h2>
          <ul className={styles.skillsList}>
            {hard.map((skill) => (<li>{skill}</li>))}
          </ul>
        </div>
      </div>

    </section>
  );
}

export default Skills;
