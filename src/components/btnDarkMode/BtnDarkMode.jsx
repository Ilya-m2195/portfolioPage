import './style.css';
import sun from './img/sun.svg';
import moon from './img/moon.svg';
import { useEffect, useRef } from 'react';
import { useLocalStorage } from '../../utils/useLocalStorage';

export const BtnDarkMode = () => {

  const btnRef = useRef(null);
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false); 
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }
  useEffect(() => {
    if (darkMode === false) {
      document.body.classList.add('dark');
      btnRef.current.classList.add('dark-mode-btn--active');
    } else {
      document.body.classList.remove('dark');
      btnRef.current.classList.remove('dark-mode-btn--active');
    }
  }, [darkMode]);

  return (
    <button onClick={toggleDarkMode} ref={btnRef} className="dark-mode-btn">
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
}

