import styles from './From.module.css';
import { useState, useEffect } from 'react';

function From() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [isConfirm, setIsConfirm] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    msg: ''
  });
  const renderError = () => {
    if (errors.name) return <span className={`${styles.errorMessage} ${styles.fadeIn}`}>{errors.name}</span>;
    if (errors.email) return <span className={`${styles.errorMessage} ${styles.fadeIn}`}>{errors.email}</span>;
    if (errors.msg) return <span className={`${styles.errorMessage} ${styles.fadeIn}`}>{errors.msg}</span>;
    return null;
  };
  const validateName = (value) => {
    if (!value.trim()) return;
    if (value.trim().length < 2) return 'Имя должно быть минимум из 2 букв';
    return '';
  };

  const validateEmail = (value) => {
    if (!value.trim()) return;
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;    if (!emailRegex.test(value)) return 'Некорректный email';
    return '';
  };

  const validateMsg = (value) => {
    if (!value.trim()) return;
    if (value.trim().length < 10) return 'Сообщение должно быть не короче 10 символов';
    return '';
  };

  useEffect(() => {
    setErrors({
      name: validateName(name),
      email: validateEmail(email),
      msg: validateMsg(msg)
    });
  }, [name, email, msg]);

  useEffect(() => {
    const hasNoErrors = !errors.name && !errors.email && !errors.msg;
    const hasContent = name.trim() && email.trim() && msg.trim();
    setIsConfirm(hasNoErrors && hasContent);
  }, [name, email, msg, errors]);

  return (
    <form className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>Ваше имя</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Example: Ivan"
          required={true}
          className={`${styles.input} ${errors.name ? styles.error : ''}`}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>Ваша почта</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Example: example@gmail.com"
          required={true}
          className={`${styles.input} ${errors.email ? styles.error : ''}`}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="msg" className={styles.label}>Сообщение</label>
        <textarea
          id="msg"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Напишите ваше сообщение..."
          required={true}
          className={`${styles.textarea} ${errors.msg ? styles.error : ''}`}
        />
      </div>

      <div className={styles.errorContainer}>
        {renderError()}
      </div>

      <button type="submit" className={`${styles.confirmButton} ${!isConfirm && styles.disabled}`}>
        Отправить
      </button>
    </form>
  );
}

export default From;
