import { SideBar } from '../../components/sidebar/SideBar'
import styles from './Statistics.module.css'
import { ChartCity } from '../../components/charts/ChartCity'

export const StudentStatistics = () =>{
    return(
        <div className={styles.app}>
            <SideBar/>
            <div className={styles.conteiner}>
                <span className={styles.title}>
                    <h1>Студенты</h1>    
                </span>
                <div className={styles.chart}>
                    <div className={styles.table}>
                        <ChartCity /> 
                        <div className={styles.gridReg}>
                            <p>Всего зарегистрировано</p>
                            <h1>4550</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}