import styles from './NavBar.module.css'
import { ReactComponent as MenuIcon } from './menu-icon.svg';
import { ReactComponent as Logo } from './logo.svg';
import {useState, useEffect} from "react";

const sections = ['about', 'skills', 'projects', 'contacts']

function NavBar(){

  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [showBackdrop, setShowBackdrop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const element = document.getElementById(section);

        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setTimeout(() => {
      setIsClosing(false);
      setIsOpen(false);
      setShowBackdrop(false);
    }, 400);
  };

  const handleLinkClick = () => {
    if (isMobile) {
      handleClose();
    }
  };

  // Показываем backdrop когда открываем меню
  useEffect(() => {
    if (isOpen) {
      setShowBackdrop(true);
    }
  }, [isOpen]);

  return (
    <>
      {showBackdrop && <div className={`${styles.menuBackdrop} ${isClosing ? styles.backdropFadeOut : styles.backdropFadeIn}`}></div>}
      <nav className={styles.navbar}>
        <div className={styles.iconsWrapper}>
          <a href="#about"><Logo className={styles.logo}></Logo></a>
          {isMobile && ( <MenuIcon className={styles.menuIcon} onClick={isOpen ? () => handleClose() : () => setIsOpen(prev => !prev)}/>)}
        </div>

        {(!isMobile || isOpen) && (
          <div className={`${styles.nav} ${isClosing ? styles.fadeOut : styles.fadeIn}`}>
            {sections && sections.map(section => (
              <a href={`#${section}`} onClick={handleLinkClick}>
                <span className={`${styles.link} ${activeSection === section ? styles.active : ''}`}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </span>
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  )
}
export default NavBar;
