// import { SideBar } from '../../components/sidebar/SideBar'
import styles from './Statistics.module.css'
import { ChartCity } from '../../components/charts/ChartCity'
import { ChartStudent } from '../../components/charts/ChartStudent'
import { MobileHeader } from '../../components/header/MobileHeader'
import { ChartUniversity } from '../../components/charts/ChartUniversity'

export const StudentStatistics = () =>{
    return(
        <div className={styles.app}>
            <MobileHeader />
            <div className={styles.container}>
                <div className={styles.chart}>
                    <div className={styles.title}>
                        <h1>Распределение по ВУЗам</h1>
                    </div>
                    <ChartUniversity />
                </div>
                <div className={styles.chart}>
                    <div className={styles.title}>
                        <h1>Распределение по городам</h1>
                    </div>
                    <ChartCity />
                </div>
                <div className={styles.chart}>
                    <div className={styles.title}>
                        <h1>Распределение специальностей</h1>
                    </div>
                    <ChartStudent />
                </div>
            </div>
        </div>
    )
}