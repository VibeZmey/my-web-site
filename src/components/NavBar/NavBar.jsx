import styles from './NavBar.module.css'

function NavBar(){
  return (
    <nav className={styles.navbar}>
      <span className={styles.logo}><a href="/">ZM</a></span>

      <div className={styles.nav}>
        <a href="#about">
          <span className={styles.link}>About me</span>
        </a>
        <a href="#skills">
          <span className={styles.link}>My Skills</span>
        </a>
        <a href="#projects">
          <span className={styles.link}>Projects</span>
        </a>
        <a href="/">
          <span className={styles.link}>Contacts</span>
        </a>
      </div>

    </nav>
  )
}
export default NavBar;
