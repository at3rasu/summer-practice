import styles from './Statistics.module.css'
import { ChartRegister } from '../../components/charts/ChartRegister'
import { ChartScholarship } from '../../components/charts/ChartScholarship'
// import { Table } from '../../components/charts/Table'
import { useEffect } from 'react'
import { MobileHeader } from '../../components/header/MobileHeader'
// import { TableStudent } from '../../components/charts/TableStudent'
// import { SideBar } from '../../components/sidebar/SideBar'

export const Statistics = () => {
    useEffect(() => {
        document.title = 'Статистика фонда'
    })

    return(
        <div className={styles.app}>
            <MobileHeader />
            <div className={styles.container}>
                <div className={styles.component}>
                    <div className={styles.b}>
                        {/* <h1>Динамики</h1> */}
                        <div className={styles.title}>
                            <h1>Динамика регистраций</h1>
                        </div>
                        <div className={styles.chart}>
                            <ChartRegister />
                        </div>
                    </div>
                    <div className={styles.data}>
                        <span>
                            <p>Среднее:</p>
                            <h1>416</h1>
                        </span>
                        <hr></hr>
                        <span>
                            <p>Общее:</p>
                            <h1>4550</h1>
                        </span>
                        <hr></hr>
                        <span>
                            <p>С области:</p>
                            <h1>3624</h1>
                        </span>
                        <hr></hr>
                        <span>
                            <p>Иногородние:</p>
                            <h1>1096</h1>
                        </span>
                    </div>
                </div>
                <div className={styles.chart1}>
                    <div className={styles.title}>
                        <h1>Участие в программе</h1>
                    </div>
                    <div className={styles.chart}>
                        <ChartScholarship />
                    </div>
                </div>
            </div>
        </div>
    )
}

