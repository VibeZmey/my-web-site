import styles from './NavBar.module.css'
import { ReactComponent as MenuIcon } from './menu-icon.svg';
import { ReactComponent as Logo } from './logo.svg';
import {useState, useEffect} from "react";

function NavBar(){

  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  useEffect(() => {
    const hanldeResize = () =>{
      if(window.innerWidth < 768) setIsMobile(true);
      else setIsMobile(false);
    }
    hanldeResize();
    window.addEventListener("resize", hanldeResize);
    return () => window.removeEventListener("resize", hanldeResize);
  }, [])

  const handleClose = () => {
    setIsClosing(true);
    // Ждём окончания анимации (0.4s), затем вызываем onClose
    setTimeout(() => {
      setIsClosing(false);
      setIsOpen(false);
    }, 400); // ← должно совпадать с длительностью анимации
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.iconsWrapper}>
        <a href="#about"><Logo className={styles.logo}></Logo></a>
        {isMobile && ( <MenuIcon className={styles.menuIcon} onClick={isOpen ? () => handleClose() : () => setIsOpen(prev => !prev)}/>)}
      </div>

      {(!isMobile || isOpen) && (
        <div className={`${styles.nav} ${isClosing ? styles.fadeOut : styles.fadeIn}`}>
          <a href="#about">
            <span className={styles.link}>About</span>
          </a>
          <a href="#skills">
            <span className={styles.link}>Skills</span>
          </a>
          <a href="#projects">
            <span className={styles.link}>Projects</span>
          </a>
          <a href="/">
            <span className={styles.link}>Contacts</span>
          </a>
        </div>)}

    </nav>
  )
}
export default NavBar;
