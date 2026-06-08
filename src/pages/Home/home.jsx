import React, { useState, useEffect } from 'react';
import styles from './home.module.css';

import avatarImg from '../../assets/img/avatar.jpg'; 
import bg1 from '../../assets/img/bg1.jpg';
import bg2 from '../../assets/img/bg2.png'; 
import bg3 from '../../assets/img/bg3.jpg';

const BACKGROUNDS = [bg1, bg2, bg3];

function Home() {
  const [bgIndex, setBgIndex] = useState(0);
  const [copiedText, setCopiedText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % BACKGROUNDS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = (textToCopy, label) => {
    navigator.clipboard.writeText(textToCopy);
    setCopiedText(label);
    setTimeout(() => setCopiedText(''), 2000);
  };

  return (
    <div className={styles.mainWrapper}>
      {/* Уведомление о копировании */}
      {copiedText && (
        <div className={styles.toast}>
          {copiedText} скопирован!
        </div>
      )}

      {/* Задний план: Слайд-шоу */}
      <div className={styles.slideshowContainer}>
        {BACKGROUNDS.map((bg, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === bgIndex ? styles.slideActive : ''}`}
            style={{ backgroundImage: `url(${bg})` }}
          />
        ))}
        <div className={styles.overlay} />
      </div>

      {/* Главная общая карточка-панель (теперь она широкая и горизонтальная) */}
      <div className={styles.contentCardHorizontal}>
        
        {/* ЛЕВАЯ ЧАСТЬ: Профиль (Аватар, Имя, Ник, Био) */}
        <div className={styles.leftProfileBlock}>
          <div className={styles.avatarWrapper}>
            <img src={avatarImg} alt="Avatar" className={styles.avatar} />
          </div>
          <h1 className={styles.username}>Nazar</h1>
          <p className={styles.nickname}>Nick: <span>Bazipl1</span></p>
          <p className={styles.bio}>Web Developer</p>
        </div>

        {/* ПРАВАЯ ЧАСТЬ: Контейнер для колонок, которые выстроятся в ряд */}
        <div className={styles.sectionsContainer}>
          
          {/* КОЛОНКА: МЕДИА */}
          <div className={styles.categoryColumn}>
            <h2 className={styles.categoryTitle}>Media</h2>
            <div className={styles.linksStack}>
              <a href="https://www.youtube.com/@bazipl1" target="_blank" rel="noreferrer" className={styles.linkCard}>
                <span className={styles.linkIcon}>▶</span> YouTube
              </a>
              <a href="https://www.twitch.tv/bazipl1" target="_blank" rel="noreferrer" className={styles.linkCard}>
                <span className={styles.linkIcon}>▶</span> Twitch
              </a>
            </div>
          </div>

          {/* КОЛОНКА: РАБОТА */}
          <div className={styles.categoryColumn}>
            <h2 className={styles.categoryTitle}>Work</h2>
            <div className={styles.linksStack}>
              <a href="https://github.com/Bazipl1io" target="_blank" rel="noreferrer" className={styles.linkCard}>
                <span className={styles.linkIcon}>💻</span> GitHub
              </a>
              <a href="https://www.linkedin.com/in/nazarshvetsm/" target="_blank" rel="noreferrer" className={styles.linkCard}>
                <span className={styles.linkIcon}>👔</span> LinkedIn
              </a>
            </div>
          </div>

          {/* КОЛОНКА: СВЯЗЬ */}
          <div className={styles.categoryColumn}>
            <h2 className={styles.categoryTitle}>Contact</h2>
            <div className={styles.linksStack}>
              <a href="https://t.me/Bazipl1" target="_blank" rel="noreferrer" className={styles.linkCard}>
                <span className={styles.linkIcon}>📢</span> Telegram Channel
              </a>

              <button 
                onClick={() => handleCopy('@Bazipl', 'Telegram ник')} 
                className={`${styles.linkCard} ${styles.clickableCard}`}
                title="Нажми, чтобы скопировать"
              >
                <span className={styles.linkIcon}>✈</span> Telegram: @Bazipl
              </button>

              <button 
                onClick={() => handleCopy('@bazipl1', 'Discord ник')} 
                className={`${styles.linkCard} ${styles.clickableCard}`}
                title="Нажми, чтобы скопировать"
              >
                <span className={styles.linkIcon}>💬</span> Discord: @bazipl1
              </button>
            </div>
          </div>

        </div> {/* Конец sectionsContainer */}

      </div> {/* Конец contentCardHorizontal */}
    </div>
  );
}

export default Home;