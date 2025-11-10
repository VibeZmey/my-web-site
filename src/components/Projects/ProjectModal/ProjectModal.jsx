import React, {useEffect, useState} from 'react';
import styles from './ProjectModal.module.css';
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Navigation} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation'; // стили для кнопок
import 'swiper/css/pagination'; // стили для точек

function ProjectModal({ project, onClick, isClosing }) {

  const [countOfImages, setCountOfImages] = useState(2);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 992)setCountOfImages(1);
      else setCountOfImages(2);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <modal className={`${styles.modal} ${isClosing ? styles.fadeOut : styles.fadeIn}`}>
      <div className={styles.head}>
        <h2>{project.name}</h2>
        <button className={styles.closeButton} onClick={()=>onClick()} aria-label="Закрыть">
          ×
        </button>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={countOfImages}
        navigation={true}
        pagination={{
          clickable: true,
          dynamicBullets: true
        }}
        loop={false}
      >
        {project.images.map((img, i) => (
          <SwiperSlide key={i}>
            <img className={styles.image} src={img} alt={`slide ${i}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      <main>
        <p className={styles.description}>{project.fullDescription.description}</p>
        <p>Технологии</p>
        <ul>
          {project.fullDescription.technologies.map((techno, i) => (<li key={i}>{techno}</li>))}
        </ul>

        <p>Ключевые фичи</p>
        <ul>
          {project.fullDescription.keyFeatures.map((feature, i) => (<li key={i}>{feature}</li>))}
        </ul>
      </main>
      <div className={styles.foot}>
        <a href={project.ghLink} target="_blank" rel="noopener noreferrer">
          <img className={styles.footIcon} src={`${process.env.PUBLIC_URL}/github-mark-white.png`} alt="github link" />
        </a>
        {project.liveLink && (
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
            <img className={styles.footIcon} src={`${process.env.PUBLIC_URL}/external-link-icon.png`} alt="external link" />
          </a>
        )}
        <button className={styles.backButton} onClick={()=>onClick()}>Назад</button>
      </div>
    </modal>
  );
}

export default ProjectModal;
