import React, {useEffect, useRef, useState, useCallback} from 'react';
import styles from './Background.module.css';

function StarryBackground({theme}) {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const mouseRef = useRef({x: undefined, y: undefined});
  const animationFrameRef = useRef();
  const isActiveRef = useRef(true);

  const [isMobile] = useState(() => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      || window.innerWidth <= 768;
  });

  const [isLowEndDevice] = useState(() => {
    return isMobile && (navigator.hardwareConcurrency <= 4 || navigator.deviceMemory <= 2);
  });

  const getStarCount = useCallback(() => {
    if (isLowEndDevice) return 50;
    if (isMobile) return 80;
    return 200;
  }, [isLowEndDevice, isMobile]);

  const REPEL_RADIUS = 150;
  const REPEL_STRENGTH = 50;
  const RETURN_SPEED = 0.05;

  // Создание звезды
  const createStar = useCallback((width, height) => {
    const x = Math.random() * width;
    const y = Math.random() * height;
    return {
      originalX: x,
      originalY: y,
      x,
      y,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.5,
      twinkleSpeed: Math.random() * 0.02 + 0.01,
      twinkleDirection: Math.random() > 0.5 ? 1 : -1,
    };
  }, []);

  // Отрисовка звезды
  const drawStar = useCallback((ctx, star) => {
    if (star.size < 1) {
      ctx.fillStyle = `rgba(${theme === 'dark-theme' ? '255, 255, 255' : '50, 50, 50'}, ${star.opacity})`;
      ctx.fillRect(star.x, star.y, star.size, star.size);
    } else {
      ctx.fillStyle = `rgba(${theme === 'dark-theme' ? '255, 255, 255' : '50, 50, 50'}, ${star.opacity})`;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }, [theme]);

  // Обновление позиции звезды
  const updateStar = useCallback((star) => {
    // Мерцание
    star.opacity += star.twinkleSpeed * star.twinkleDirection;
    if (star.opacity >= 1 || star.opacity <= 0.3) {
      star.twinkleDirection *= -1;
    }

    if (!isMobile && mouseRef.current.x !== undefined) {
      const dx = mouseRef.current.x - star.x;
      const dy = mouseRef.current.y - star.y;

      if (Math.abs(dx) < REPEL_RADIUS * 1.5 && Math.abs(dy) < REPEL_RADIUS * 1.5) {
        const distanceSquared = dx * dx + dy * dy;
        const repelRadiusSquared = REPEL_RADIUS * REPEL_RADIUS;

        if (distanceSquared < repelRadiusSquared) {
          const distance = Math.sqrt(distanceSquared);
          const angle = Math.atan2(dy, dx);
          const force = (REPEL_RADIUS - distance) / REPEL_RADIUS;

          star.x -= Math.cos(angle) * force * REPEL_STRENGTH;
          star.y -= Math.sin(angle) * force * REPEL_STRENGTH;
        } else {
          const diffX = star.originalX - star.x;
          const diffY = star.originalY - star.y;

          if (Math.abs(diffX) < 0.1 && Math.abs(diffY) < 0.1) {
            star.x = star.originalX;
            star.y = star.originalY;
          } else {
            star.x += diffX * RETURN_SPEED;
            star.y += diffY * RETURN_SPEED;
          }
        }
      } else {
        star.x += (star.originalX - star.x) * RETURN_SPEED;
        star.y += (star.originalY - star.y) * RETURN_SPEED;
      }
    }
  }, [isMobile]);

  // Анимация
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (!isActiveRef.current) {
      animationFrameRef.current = requestAnimationFrame(animate);
      return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    starsRef.current.forEach((star) => {
      updateStar(star);
      drawStar(ctx, star);
    });

    animationFrameRef.current = requestAnimationFrame(animate);
  }, [updateStar, drawStar]);

  // Инициализация и обработка изменения размера
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const initCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Создаем звезды
      starsRef.current = [];
      const starCount = getStarCount();
      for (let i = 0; i < starCount; i++) {
        starsRef.current.push(createStar(canvas.width, canvas.height));
      }
    };

    initCanvas();

    // Обработка изменения размера с debounce
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(initCanvas, 250);
    };

    window.addEventListener('resize', handleResize);

    // Запуск анимации
    animate();

    // Логирование производительности
    console.log('🌟 Информация о производительности:');
    console.log(`Устройство: ${isMobile ? 'Мобильное' : 'Десктоп'}`);
    console.log(`Слабое устройство: ${isLowEndDevice ? 'Да' : 'Нет'}`);
    console.log(`Количество звезд: ${getStarCount()}`);
    console.log(`Интерактивность: ${isMobile ? 'Отключена' : 'Включена'}`);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isMobile, isLowEndDevice, getStarCount, createStar, animate]);

  // Обработка движения мыши только на десктопе
  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = undefined;
      mouseRef.current.y = undefined;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isMobile]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      isActiveRef.current = !document.hidden;
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <canvas className={styles.canvas} ref={canvasRef}/>
  );
}

export default StarryBackground;
