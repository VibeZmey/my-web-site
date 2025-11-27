import styles from './Footer.module.css'
import { ReactComponent as GitHub } from '../../assets/github-icon.svg';
import { ReactComponent as Telegram } from '../../assets/telegram-icon.svg';
import { ReactComponent as Vk } from '../../assets/vk-icon.svg';


function Footer(){
  return (
    <section className={styles.footer}>
      <span className={styles.text}>
        <h2>Змеев И.В.</h2>
        <p>Разработчик, меценат, филантроп и просто энтузиаст</p>
      </span>
      <a href={'https://github.com/VibeZmey/my-web-site'}>
        <div className={styles.labelWrapper}>
          <span className={styles.label}>Designed and Developed by Zmeev Ilya</span>
          <span className={styles.label}>Copyright © 2025 ZI</span>
        </div>
      </a>
      <div className={styles.iconWrapper}>
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
    </section>
  )
}

export default Footer;
