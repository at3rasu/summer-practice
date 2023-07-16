import { SideBar } from '../../components/sidebar/SideBar'
import styles from './Statistics.module.css'

export const PartnersStatistics = () =>{
    return(
        <div className={styles.app}>
            <SideBar/>
            <div className={styles.conteiner}>
                <span className={styles.title}>
                    <h1>Partners</h1>    
                </span>
            </div>
        </div>
    )
}