import styles from './Contacts.module.css'
import Title from "../Title/Title";
import Map from "./Map/Map";
import Form from "./Form/Form";

const icons = [
  {src: `${process.env.PUBLIC_URL}/github-mark-black.png`, alt: 'Github Logo'},
  {src: `${process.env.PUBLIC_URL}/vk-icon.png`, alt: 'Vk Icon'},
  {src: `${process.env.PUBLIC_URL}/telegram-icon.png`, alt: 'Telegram Icon'},
]

function Contacts(){
  return (
    <section className={styles.contacts} id="contacts">
      <Title>Contacts</Title>

      <div className={styles.socialMedia}>
        {icons && icons.map((icon, i) => (
          <img className={styles.contactIcon} src={icon.src} alt={icon.alt} key={i}/>
        ))}
      </div>
      <span className={styles.or}>or</span>
      <main className={styles.form}>
        <Form/>
        <Map/>
      </main>
    </section>
  )
}

export default Contacts;
