import React from 'react';
import styles from './ProjectModal.module.css';
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Navigation} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation'; // стили для кнопок
import 'swiper/css/pagination'; // стили для точек

function ProjectModal({ project, onClick }) {

  return (
    <modal className={styles.modal}>
      <div className={styles.head}>
        <h2>{project.name}</h2>
        <button className={styles.closeButton} onClick={onClick} aria-label="Закрыть">
          ×
        </button>
      </div>

      <Swiper
        modules={[Navigation, Pagination]} // ← подключаем модули
        spaceBetween={20}                  // отступ между слайдами (опционально)
        slidesPerView={1}                  // показывать 1 слайд (по умолчанию и так 1)
        navigation={true}                  // ← включить кнопки "вперёд/назад"
        pagination={{                      // ← настройки пагинации
          clickable: true,                 // точки кликабельные
          dynamicBullets: true             // адаптивные точки (опционально)
        }}
        loop={false}                       // если не нужна зацикленность
      >
        {project.images.map((img, i) => (
          <SwiperSlide key={i}>
            <img className={styles.image} src={img} alt={`slide ${i}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      <main>
        <p>{project.fullDescription.description}</p>
        <p>Технологии</p>
        <ul>
          {project.fullDescription.technologies.map((techno, i) => (<li key={i}>{techno}</li>))}
        </ul>

        <p>Фичи</p>
        <ul>
          {project.fullDescription.keyFeatures.map((feature, i) => (<li key={i}>{feature}</li>))}
        </ul>
      </main>
    </modal>
  );
}

export default ProjectModal;
