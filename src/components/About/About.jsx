import styles from './About.module.css';
import Title from '../Title/Title';

function About() {

  return (
    <section id="about" className={styles.about}>
      <Title>About me</Title>
      <div className={styles.inner}>
        <div className={styles.pic}>
          <div className={styles.wrapper}>
            <img className={styles.img} src={`${process.env.PUBLIC_URL}/me.jpg`} alt="" />
          </div>
        </div>
        <div>
          <h2>Привет! Я Илья Змеев 👋</h2>
          <p className={styles.intro}>
            Студент и веб-разработчик, одержимый созданием красивых интерфейсов
            и интерактивных приложений. Люблю превращать идеи в код, который работает.
          </p>

          <div className={styles.highlights}>
            <div className={styles.highlight}>
              <span className={styles.icon}>🎓</span>
              <p>Учусь на фуллстек-разработчика в РТУ МИРЭА</p>
            </div>

            <div className={styles.highlight}>
              <span className={styles.icon}>💻</span>
              <p>Специализируюсь на современной веб и десктоп разработке</p>
            </div>

            <div className={styles.highlight}>
              <span className={styles.icon}>🚀</span>
              <p>Ищу стажировку или первую работу в сфере фронтенда или кроссплатформенной разработки</p>
            </div>
          </div>

          <p className={styles.cta}>
            Готов учиться, расти и создавать крутые проекты в команде профессионалов!
          </p>
        </div>
      </div>
    </section>
  )
}

export default About;
