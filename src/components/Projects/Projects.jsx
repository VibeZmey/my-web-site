import styles from './Projects.module.css'
import Title from "../Title/Title";
import ProjectCard from "./ProjectCard/ProjectCard";
import {useState} from "react";
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
        technologies: ['React', 'CSS', 'NodeJS', 'express', 'PostgreSQL'],
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
      name: 'Test Project',
      smallDescription: 'test description for right development of styles, something there...',
      fullDescription: {
        description: 'Приложение реализует полную логику игры в русские шашки: ходы, обязательное взятие, превращение в дамку и определение победителя. Интерфейс построен с использованием Qt Widgets, обеспечивает чёткую визуальную обратную связь (подсветка фигур, возможных ходов, активного игрока) и корректно масштабируется под разные разрешения экрана. Проект полностью автономный — не требует интернета или внешних зависимостей.',
        technologies: ['C++', 'CMake', 'Qt', 'QSS'],
        keyFeatures: [
          'Полная поддержка правил русских шашек (включая многоходовое взятие и дамок).',
          'Интуитивный графический интерфейс на Qt с визуальной подсветкой возможных ходов.',
          'Кроссплатформенность: сборка и запуск под Windows, Linux и macOS.',
        ],
      },
      ghLink: 'link',
      liveLink: 'live-link',
      images: [
        `${process.env.PUBLIC_URL}/checkers-1.png`,
        `${process.env.PUBLIC_URL}/checkers-2.png`,
        `${process.env.PUBLIC_URL}/checkers-3.png`
      ],
      langs: 'Chat GPT-5 Cloude 4.5',
    },
  ]
  const [isModalOpen, setModalOpen] = useState(false);
  const [targetProject, setTargetProject] = useState(null);


  const handleModalOpen = (project) => {
    setModalOpen(true);
    setTargetProject(project);
  }

  const [isClosing, setIsClosing] = useState(false);

  const handleModalClose = () => {
    setIsClosing(true);
    // Ждём окончания анимации (0.4s), затем вызываем onClose
    console.log(isClosing);
    setTimeout(() => {
      setIsClosing(false);
      console.log(isClosing);
      setModalOpen(false);
    }, 600); // ← должно совпадать с длительностью анимации
  }

  return (
    <section className={styles.projects} id='projects'>

      <Title>Projects</Title>
      {!isModalOpen && (
        <div className={styles.inner}>
          {projects.map(project => (<ProjectCard project={project} modalOpen={handleModalOpen} />))}
        </div>
      )}

      {isModalOpen && (<ProjectModal isClosing={isClosing} project={targetProject} onClick={handleModalClose} />)}
    </section>
  )
}
export default Projects;
