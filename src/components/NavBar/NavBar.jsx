import styles from './NavBar.module.css'
import { ReactComponent as Logo } from '../../assets/logo.svg';
import {useState, useEffect} from "react";
import {FormControlLabel} from "@mui/material";
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import Hamburger from 'hamburger-react';

const MaterialUISwitch = styled(Switch)(() => ({
  width: 60,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 0,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#001e3c',
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#aab4be',
    borderRadius: 20 / 2,
  },
}));

const sections = ['about', 'skills', 'projects', 'contacts']

function NavBar({isMobile, setTheme}) {

  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [isSwitchChecked, setIsSwitchChecked] = useState(true);

  const handleSwitchChange = (event) => {
    const checked = event.target.checked;
    setIsSwitchChecked(checked);

    if (setTheme) {
      setTheme(checked ? 'dark-theme' : 'light-theme');
    }
  };

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

  const handleLinkClick = () => {
    if (isMobile) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 400);
    }
  };

  // Обработчик для бургера
  const handleMenuToggle = () => {
    if (isOpen) {
      // Если меню открыто - закрываем с анимацией
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 400);
    } else {
      // Если меню закрыто - открываем
      setIsOpen(true);
      setIsClosing(false);
    }
  };

  return (
    <>
      {isOpen && isMobile && (
        <div
          className={styles.menuBackdrop}
          onClick={() => {
            setIsClosing(true);
            setTimeout(() => {
              setIsOpen(false);
              setIsClosing(false);
            }, 400);
          }}
        />
      )}

      <nav className={styles.navbar}>
        <div className={styles.iconsWrapper}>
          <a href="#about"><Logo className={styles.logo}/></a>
          {isMobile && (
            <Hamburger
              toggled={isOpen && !isClosing}
              toggle={handleMenuToggle}
              size={40}
              color="var(--text-color)"
            />
          )}
        </div>

        {(!isMobile || isOpen) && (
          <div className={`${styles.nav} ${isClosing ? styles.navClose : styles.navOpen}`}>
            {sections && sections.map(section => (
              <a
                key={section}
                href={`#${section}`}
                onClick={handleLinkClick}
              >
                <span className={`${styles.link} ${activeSection === section ? styles.active : ''}`}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </span>
              </a>
            ))}
            <FormControlLabel
              control={<MaterialUISwitch sx={{ m: 2 }} defaultChecked />}
              label=""
              checked={isSwitchChecked}
              onChange={handleSwitchChange}
              className={styles.switch}
            />
          </div>
        )}
      </nav>
    </>
  )
}

export default NavBar;
