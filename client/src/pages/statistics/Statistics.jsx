import styles from './Statistics.module.css'
import { ChartRegister } from '../../components/charts/ChartRegister'
// import { Table } from '../../components/charts/Table'
import { useEffect } from 'react'
// import { TableStudent } from '../../components/charts/TableStudent'
import { SideBar } from '../../components/sidebar/SideBar'

export const Statistics = () => {
    useEffect(() => {
        document.title = 'Статистика фонда'
    })

    return(
        <div className={styles.app}>
            {/* <SideBar /> */}
            <div className={styles.container}>
                <span className={styles.title}>
                    <h1>Динамика регистраций</h1>    
                </span>
                <div className={styles.chart}>
                    <div className={styles.grid}>
                        <div className={styles.flex}>
                            <p>В среднем в месяц</p>
                            <h1>416</h1>
                        </div>
                        <div className={styles.flex}>
                            <p>Со Свердловской области</p>
                            <h1>3456</h1>
                        </div>
                        <div className={styles.flex}>
                            <p>Иногородние</p>
                            <h1>1096</h1>
                        </div>
                        <div className={styles.flex}>
                            <p>Активных пользователей</p>
                            <h1>4160</h1>
                        </div>
                    </div>
                    <div className={styles.table}>
                        <div className={styles.gridReg}>
                            <p>Всего зарегистрировано</p>
                            <h1>4550</h1>
                        </div>
                        <ChartRegister /> 
                        {/* <ChartCity /> */}
                    </div>
                    {/* <div className={styles.table}> 
                        <Table />
                        <TableStudent />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

