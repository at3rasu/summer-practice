import { Link } from 'react-router-dom'
import styles from './MobileHeader.module.css'

export const MobileHeader = () =>{
    return(
        <div className={styles.component}>
            <div className={styles.modileHeader}>
                    <div className={styles.modileContainer}>
                        <div className={styles.modileBtn}>
                            <button>
                            <img src="/img/BtnAdmin.svg" alt=""/></button>
                        </div>      
                        <div className={styles.modileLogo}>
                            <Link to='/'><img src='/img/mobile-logo.svg' alt=''/></Link> 
                        </div>                
                    </div>
                    <div className={styles.b}></div>
                </div>
        </div>
    )
}