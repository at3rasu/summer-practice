import { MobileHeader } from '../../components/header/MobileHeader'
import styles from './Statistics.module.css'

export const GrantStatistics = () =>{
    return(
        <div className={styles.app}>
            <MobileHeader />
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>Участники программы</h1>
                </div>
                <div className={styles.data}>
                    <span>
                        <p>Студенты:</p>
                        <h1>2145</h1>
                    </span>
                    <hr></hr>
                    <span>
                        <p>ВУЗы:</p>
                        <h1>26</h1>
                    </span>
                    <hr></hr>
                    <span>
                        <p>Компании:</p>
                        <h1>32</h1>
                    </span>
                </div>
            </div>
        </div>
    )
}