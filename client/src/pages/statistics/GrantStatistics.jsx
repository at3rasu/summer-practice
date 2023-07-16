import { SideBar } from '../../components/sidebar/SideBar'
import styles from './Statistics.module.css'

export const GrantStatistics = () =>{
    return(
        <div className={styles.app}>
            <SideBar/>
            <div className={styles.conteiner}>
                <span className={styles.title}>
                    <h1>Бонусная программа</h1>    
                </span>
            </div>
        </div>
    )
}