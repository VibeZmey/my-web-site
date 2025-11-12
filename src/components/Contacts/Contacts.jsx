import styles from './Contacts.module.css'
import Title from "../Title/Title";
import Map from "./Map/Map";
import Form from "./Form/Form";
import { ReactComponent as GitHub } from '../../assets/github-icon.svg';
import { ReactComponent as Telegram } from '../../assets/telegram-icon.svg';
import { ReactComponent as Vk } from '../../assets/vk-icon.svg';




function Contacts(){
  return (
    <section className={styles.contacts} id="contacts">
      <Title>Contacts</Title>

      <div className={styles.socialMedia}>
        <a href={'https://github.com/VibeZmey/'} target="_blank" rel="noopener noreferrer">
          <GitHub className={`${styles.contactIcon} ${styles.inverted}`}/>
        </a>
        <a href={'https://github.com/VibeZmey/'} target="_blank" rel="noopener noreferrer">
          <Telegram className={styles.contactIcon}/>
        </a>
        <a href={'https://github.com/VibeZmey/'} target="_blank" rel="noopener noreferrer">
          <Vk className={styles.contactIcon}/>
        </a>
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
