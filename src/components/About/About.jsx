import styles from './About.module.css';
import Title from '../Title/Title';

function About() {

  return (
    <section id="about" className={styles.about}>
      <Title>About me</Title>
      <div className={styles.inner}>
        <div className={styles.pic}>
          <div className={styles.wrapper}>
            <img className={styles.img} src="/me.jpg" alt="" />
          </div>
        </div>
        <div>
          <h2>Привет! Я Илья Змеев</h2>
          <p>
            Я — студент, увлечённый веб-разработкой и созданием интерактивных приложений.
            Люблю изучать новые технологии, строить UI и доводить проекты до рабочего состояния.
          </p>
          <p>Учусь на фуллстек-разработчика (группа ЭФБО-03-24)</p>
          <p>Ищу стажировку или первую работу в сфере фронтенда или кроссплатформенной разработки</p>
        </div>
      </div>
    </section>
  )
}

export default About;
