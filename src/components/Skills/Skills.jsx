import styles from './Skills.module.css'
import Title from "../Title/Title";

function Skills(){
  return (
    <section id="skills" className={styles.skills}>
      <Title>My skills</Title>
      <div className={styles.inner}>
        <div>
          <h2>Soft</h2>
          <ul className={styles.skillsList}>
            <li style={{borderLeft: '5px solid red'}}>
              Коммуникабельность
            </li>
            <li style={{borderLeft: '5px solid green'}}>
              Критическое мышление
            </li>
            <li style={{borderLeft: '5px solid purple'}}>
              Работа в команде
            </li>
            <li style={{borderLeft: '5px solid magenta'}}>
              JavaScript, React, HTML, CSS
            </li>
            <li style={{borderLeft: '5px solid yellow'}}>
              Git, REST API, адаптивная вёрстка
            </li>
            <li style={{borderLeft: '5px solid blue'}}>
              Быстрое обучение новым технологиям
            </li>
          </ul>
        </div>
        <div>
          <h2>Hard</h2>
          <ul className={styles.skillsList}>
            <li style={{borderLeft: '5px solid rgba(255, 0, 0, 0.3)'}}>
              Коммуникабельность
            </li>
            <li>
              Критическое мышление
            </li>
            <li>
              Работа в команде
            </li>
            <li>
              JavaScript, React, HTML, CSS
            </li>
            <li>
              Git, REST API, адаптивная вёрстка
            </li>
            <li>
              Быстрое обучение новым технологиям
            </li>
          </ul>
        </div>

      </div>

    </section>
  );
}

export default Skills;
