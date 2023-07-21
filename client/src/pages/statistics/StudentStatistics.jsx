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
            <div className={styles.title}>
                    <h1>Распределение по ВУЗам</h1>
                </div>
                <div className={styles.chart}>
                    <ChartUniversity />
                </div>
                <div className={styles.title}>
                    <h1>Распределение по городам</h1>
                </div>
                <div className={styles.chart}>
                    <ChartCity />
                </div>
                <div className={styles.title}>
                    <h1>Распределение специальностей</h1>
                </div>
                <div className={styles.chart}>
                    <ChartStudent />
                </div>
            </div>
        </div>
    )
}