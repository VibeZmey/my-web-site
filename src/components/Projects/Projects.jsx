import styles from './Projects.module.css'
import Title from "../Title/Title";
import ProjectCard from "./ProjectCard/ProjectCard";
import {useState, useEffect} from "react";
import ProjectModal from "./ProjectModal/ProjectModal";

function Projects(){

  const projects = [
    {
      name: 'VibeCaps',
      smallDescription: 'Интерактивный тренажёр для измерения и улучшения скорости печати в реальном времени.',
      fullDescription: {
        description: 'VibeCaps — это полностью клиентское веб-приложение для тестирования скорости печати (WPM). Пользователь печатает предложенный текст, а система в реальном времени отслеживает точность, скорость, ошибки и динамику набора. Поддерживается выбор языка (русский/английский), темной/светлой темы и режима «слепой печати». Весь функционал реализован на чистом HTML, CSS и JavaScript без внешних библиотек.',
        technologies: ['JS', 'CSS', 'HTML'],
        keyFeatures: [
          'Реальное измерение скорости печати (в словах в минуту — WPM) и точности (%).',
          'Адаптивный интерфейс: корректно работает на десктопах, планшетах и мобильных.',
          'Поддержка русского и английского языков, выбор темы (светлая/тёмная).',
          'Статистика по последним попыткам, сохраняемая в localStorage.',
          'Визуальная подсветка ошибок и текущей позиции в тексте.',
          'Без сервера: всё работает локально в браузере.'
        ],
      },
      ghLink: 'https://github.com/VibeZmey/Vibe-Caps',
      liveLink: 'https://vibezmey.github.io/Vibe-Caps',
      images: [
        `${process.env.PUBLIC_URL}/vibecaps-1.png`,
        `${process.env.PUBLIC_URL}/vibecaps-2.png`,
        `${process.env.PUBLIC_URL}/vibecaps-3.png`
      ],
      langs: 'JS CSS HTML',
    },
    {
      name: 'Digital Shop',
      smallDescription: 'Магазин покупки цифровых товаров, таких как подписки на различные сервисы, пополнение игровых кошельков и др.',
      fullDescription: {
        description: 'DigitalShop демонстрирует работу с товарами и REST API. Реализована адаптивная сетка продуктов, подробная карточка товара с галереей и метаданными, а также клиентская корзина с сохранением в localStorage и простым оформлением заказа. Серверная часть на Express отдаёт список товаров, миниатюры и метаданные, обрабатывает запросы корзины/заказов и обеспечивает базовые проверки данных.',
        technologies: ['React', 'CSS', 'Node', 'JS', 'express', 'PostgreSQL'],
        keyFeatures: [
          'Адаптивная сетка товаров, оптимизированная под любые экраны.',
          'Корзина: добавление/удаление товаров, сохранение состояния в localStorage.',
          'REST API на Express для списка товаров, деталей, создания заказов и управления товарами.',
          'Базовая аутентификация и роли (пользователь / админ) для управления товарами (CRUD) — удобная панель админа',
          'Серверная валидация данных и обработка ошибок.',
          'Простая система хранения данных PostgreSQL.'
        ],
      },
      ghLink: 'https://github.com/VibeZmey/Digital-shop-app',
      liveLink: 'https://t.me/DigitalDemoShopBot',
      images: [
        `${process.env.PUBLIC_URL}/digitalshop-1.jpg`,
        `${process.env.PUBLIC_URL}/digitalshop-2.jpg`,
        `${process.env.PUBLIC_URL}/digitalshop-3.jpg`,
        `${process.env.PUBLIC_URL}/digitalshop-4.jpg`,
      ],
      langs: 'React Node.js',
    },
    {
      name: 'Checkers',
      smallDescription: 'Классические русские шашки с поддержкой двух игроков на одном устройстве.',
      fullDescription: {
        description: 'Приложение реализует полную логику игры в русские шашки: ходы, обязательное взятие, превращение в дамку и определение победителя. Интерфейс построен с использованием Qt Widgets, обеспечивает чёткую визуальную обратную связь (подсветка фигур, возможных ходов, активного игрока) и корректно масштабируется под разные разрешения экрана. Проект полностью автономный — не требует интернета или внешних зависимостей.',
        technologies: ['C++', 'CMake', 'Qt', 'QSS'],
        keyFeatures: [
          'Полная поддержка правил русских шашек (включая многоходовое взятие и дамок).',
          'Интуитивный графический интерфейс на Qt с визуальной подсветкой возможных ходов.',
          'Кроссплатформенность: сборка и запуск под Windows, Linux и macOS.',
        ],
      },
      ghLink: 'https://github.com/VibeZmey/Checkers',
      images: [
        `${process.env.PUBLIC_URL}/checkers-1.png`,
        `${process.env.PUBLIC_URL}/checkers-2.png`,
        `${process.env.PUBLIC_URL}/checkers-3.png`
      ],
      langs: 'C++ Qt',
    },
    {
      name: 'Weather Dashboard',
      smallDescription: 'Веб-приложение для отображения текущей погоды и прогноза на неделю с использованием OpenWeatherMap API.',
      fullDescription: {
        description: 'Weather Dashboard — это современное погодное приложение с красивым интерфейсом и анимациями. Пользователь может искать погоду по названию города, сохранять избранные локации и получать детальную информацию: температуру, влажность, скорость ветра, UV-индекс и почасовой прогноз. Используется геолокация для автоматического определения местоположения пользователя.',
        technologies: ['React', 'TypeScript', 'CSS', 'REST API'],
        keyFeatures: [
          'Интеграция с OpenWeatherMap API для получения актуальных данных о погоде.',
          'Геолокация: автоматическое определение города пользователя.',
          'Сохранение избранных городов в localStorage.',
          'Адаптивный дизайн с анимированными иконками погоды.',
          'Переключение между метрической и имперской системами измерения.',
          'Темная и светлая темы интерфейса.'
        ],
      },
      ghLink: 'https://github.com/username/weather-dashboard',
      liveLink: 'https://weather-dashboard-demo.vercel.app',
      images: [
        `${process.env.PUBLIC_URL}/weather-1.png`,
        `${process.env.PUBLIC_URL}/weather-2.png`,
        `${process.env.PUBLIC_URL}/weather-3.png`
      ],
      langs: 'React TypeScript',
    },
    {
      name: 'Task Manager Pro',
      smallDescription: 'Полнофункциональный менеджер задач с поддержкой проектов, тегов, дедлайнов и командной работы.',
      fullDescription: {
        description: 'Task Manager Pro — это комплексное решение для управления задачами и проектами. Приложение поддерживает создание задач с приоритетами, назначение исполнителей, установку дедлайнов, добавление комментариев и прикрепление файлов. Реализована система уведомлений, фильтрация и поиск по задачам, а также канбан-доска для визуализации рабочего процесса.',
        technologies: ['React', 'Node', 'Express', 'MongoDB', 'Socket.io', 'JS'],
        keyFeatures: [
          'Канбан-доска с drag-and-drop для перемещения задач между статусами.',
          'Реальное время: обновления задач через WebSocket (Socket.io).',
          'Система ролей: владелец проекта, участник, наблюдатель.',
          'Фильтрация задач по приоритету, статусу, исполнителю и тегам.',
          'Статистика и аналитика: графики выполнения задач, продуктивность команды.',
          'Уведомления о приближающихся дедлайнах и изменениях в задачах.'
        ],
      },
      ghLink: 'https://github.com/username/task-manager-pro',
      liveLink: 'https://taskmanager-pro.herokuapp.com',
      images: [
        `${process.env.PUBLIC_URL}/taskmanager-1.png`,
        `${process.env.PUBLIC_URL}/taskmanager-2.png`,
        `${process.env.PUBLIC_URL}/taskmanager-3.png`
      ],
      langs: 'React Node.js MongoDB',
    },
    {
      name: 'Code Snippet Library',
      smallDescription: 'Персональная библиотека для хранения и организации полезных фрагментов кода с поддержкой синтаксиса.',
      fullDescription: {
        description: 'Code Snippet Library помогает разработчикам сохранять, организовывать и быстро находить полезные фрагменты кода. Поддерживается подсветка синтаксиса для более чем 50 языков программирования, система тегов для категоризации, полнотекстовый поиск и возможность экспорта сниппетов. Приложение работает офлайн благодаря IndexedDB и Service Worker.',
        technologies: ['JS', 'IndexedDB', 'HTML', 'CSS', 'Prism.js'],
        keyFeatures: [
          'Подсветка синтаксиса для 50+ языков программирования (Prism.js).',
          'Полнотекстовый поиск по названию, описанию и содержимому кода.',
          'Система тегов и категорий для удобной организации.',
          'Офлайн-режим: все данные хранятся локально в IndexedDB.',
          'Копирование кода в буфер обмена одним кликом.',
          'Экспорт/импорт библиотеки в JSON для резервного копирования.'
        ],
      },
      ghLink: 'https://github.com/username/code-snippet-library',
      liveLink: 'https://code-snippets-lib.netlify.app',
      images: [
        `${process.env.PUBLIC_URL}/snippets-1.png`,
        `${process.env.PUBLIC_URL}/snippets-2.png`,
        `${process.env.PUBLIC_URL}/snippets-3.png`
      ],
      langs: 'JS HTML CSS',
    },
    {
      name: 'Fitness Tracker',
      smallDescription: 'Мобильное приложение для отслеживания тренировок, питания и прогресса в достижении фитнес-целей.',
      fullDescription: {
        description: 'Fitness Tracker — это кроссплатформенное мобильное приложение на React Native для ведения дневника тренировок и питания. Пользователи могут создавать персональные планы тренировок, логировать упражнения с повторениями и весами, отслеживать калории и макронутриенты, а также видеть свой прогресс в виде графиков. Интегрирована база данных продуктов питания.',
        technologies: ['React Native', 'Expo', 'SQLite', 'JS', 'Chart.js'],
        keyFeatures: [
          'Создание персональных планов тренировок с упражнениями и подходами.',
          'Логирование тренировок: упражнения, вес, повторения, длительность.',
          'Дневник питания: учёт калорий, белков, жиров и углеводов.',
          'База данных продуктов питания с возможностью добавления своих.',
          'Графики прогресса: изменение веса, объёмов, силовых показателей.',
          'Напоминания о тренировках и приёмах пищи.'
        ],
      },
      ghLink: 'https://github.com/username/fitness-tracker',
      images: [
        `${process.env.PUBLIC_URL}/fitness-1.png`,
        `${process.env.PUBLIC_URL}/fitness-2.png`,
        `${process.env.PUBLIC_URL}/fitness-3.png`
      ],
      langs: 'React Native JS',
    },
    {
      name: 'Chat Application',
      smallDescription: 'Реал-тайм мессенджер с поддержкой личных и групповых чатов, отправкой файлов и эмодзи.',
      fullDescription: {
        description: 'Chat Application — это современный веб-мессенджер в реальном времени. Пользователи могут обмениваться текстовыми сообщениями, создавать групповые чаты, отправлять файлы и изображения, использовать эмодзи и видеть статус "печатает...". Реализована система аутентификации, онлайн-статусы пользователей и история сообщений с пагинацией.',
        technologies: ['React', 'Node', 'Express', 'Socket.io', 'MongoDB', 'JS'],
        keyFeatures: [
          'Мгновенная доставка сообщений через WebSocket (Socket.io).',
          'Личные и групповые чаты с возможностью добавления участников.',
          'Отправка файлов, изображений и эмодзи.',
          'Онлайн-статусы и индикатор "печатает...".',
          'История сообщений с пагинацией и поиском.',
          'Уведомления о новых сообщениях даже при свёрнутой вкладке.'
        ],
      },
      ghLink: 'https://github.com/username/chat-application',
      liveLink: 'https://realtime-chat-app-demo.com',
      images: [
        `${process.env.PUBLIC_URL}/chat-1.png`,
        `${process.env.PUBLIC_URL}/chat-2.png`,
        `${process.env.PUBLIC_URL}/chat-3.png`
      ],
      langs: 'React Node.js MongoDB',
    },
    {
      name: 'Portfolio Builder',
      smallDescription: 'Конструктор персональных портфолио-сайтов с выбором шаблонов и простым редактированием.',
      fullDescription: {
        description: 'Portfolio Builder позволяет создавать профессиональные портфолио-сайты без знания программирования. Пользователь выбирает готовый шаблон, заполняет информацию о себе, добавляет проекты с изображениями и описаниями, настраивает цветовую схему и получает готовый адаптивный сайт. Возможен экспорт в HTML/CSS для самостоятельного хостинга или публикация на встроенной платформе.',
        technologies: ['React', 'Node', 'CSS', 'JS', 'MongoDB'],
        keyFeatures: [
          'Библиотека профессиональных адаптивных шаблонов.',
          'Визуальный редактор: изменение текста, цветов, изображений в реальном времени.',
          'Секции: О себе, Навыки, Проекты, Опыт работы, Контакты.',
          'Галерея проектов с фильтрацией по категориям.',
          'Экспорт в HTML/CSS/JS для самостоятельного хостинга.',
          'Публикация на поддомене: username.portfoliobuilder.com'
        ],
      },
      ghLink: 'https://github.com/username/portfolio-builder',
      liveLink: 'https://portfolio-builder.app',
      images: [
        `${process.env.PUBLIC_URL}/portfolio-1.png`,
        `${process.env.PUBLIC_URL}/portfolio-2.png`,
        `${process.env.PUBLIC_URL}/portfolio-3.png`
      ],
      langs: 'React Node.js',
    },
  ]
  const [isModalOpen, setModalOpen] = useState(false);
  const [targetProject, setTargetProject] = useState(null);
  const [filtredProjects, setFiltredProjects] = useState(projects);
  const [showAll, setShowAll] = useState(false);

  const showedProjects = showAll ? filtredProjects : filtredProjects.slice(0, 6);

  useEffect(() => {
    setShowAll(false);
  }, [filtredProjects]);

  const handleModalOpen = (project) => {
    setModalOpen(true);
    setTargetProject(project);
  }

  const [isClosing, setIsClosing] = useState(false);

  const handleModalClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      setModalOpen(false);
    }, 600);
  }

  return (
    <section className={styles.projects} id='projects'>

      <Title>Projects</Title>
      <div className={styles.filterContainer}>
        <button
          type={"button"}
          className={styles.filterButton}
          onClick={() => setFiltredProjects(projects)}>Все</button>
        <button
          type={"button"}
          className={styles.filterButton}
          onClick={() => setFiltredProjects(projects.filter(p => p.fullDescription.technologies.includes('JS')))}>JS</button>
        <button
          type={"button"}
          className={styles.filterButton}
          onClick={() => {setFiltredProjects(projects.filter(p => p.fullDescription.technologies.includes('C++')))}}>C++</button>
        <button
          type={"button"}
          className={styles.filterButton}
          onClick={() => {setFiltredProjects(projects.filter(p => p.fullDescription.technologies.includes('C#')))}}>C#</button>
      </div>
      {!isModalOpen && (
        <>
        <div className={styles.inner}>
          {showedProjects.map(project => (<ProjectCard key={project.name} project={project} modalOpen={handleModalOpen} />))}
        </div>
          {filtredProjects.length === 0 && <span style={{color: "var(--muted-text-color)"}}>Пока что нет таких проектов</span>}
          {filtredProjects.length > 6 && (
            <button type={"button"} className={styles.showButton} onClick={() => setShowAll(showedProjects.length !== filtredProjects.length)}>
              {!showAll ? "Show more" : "Show less"}
            </button>
          )}
        </>
      )}

      {isModalOpen && (<ProjectModal isClosing={isClosing} project={targetProject} onClick={handleModalClose} />)}
    </section>
  )
}
export default Projects;
