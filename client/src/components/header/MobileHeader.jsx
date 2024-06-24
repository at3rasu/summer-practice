import { Link } from 'react-router-dom'
import styles from './MobileHeader.module.css'
import { useState } from 'react';

export const MobileHeader = () =>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    return(
        <div className={styles.component}>
            <div className={styles.modileHeader}>
                    <div className={styles.modileContainer}>
                        <div className={styles.modileBtn}>
                            <button onClick={toggleMenu}>
                            <img src="/img/BtnAdmin.svg" alt=""/></button>
                        </div>      
                        <div className={styles.modileLogo}>
                            <Link to='/'><img src='/img/mobile-logo.svg' alt=''/></Link> 
                        </div>                
                    </div>
                    <div className={styles.b}></div>
                </div>
                {isMenuOpen && (
                <div className={styles.menu}>
                <ul>
                    <li>
                    <Link to='/'>Главная</Link>
                    </li>
                    <li>
                    <Link to='/about'>О нас</Link>
                    </li>
                    {/* Добавьте другие пункты меню здесь */}
                </ul>
                </div>
            )}
        </div>
        
    )
}