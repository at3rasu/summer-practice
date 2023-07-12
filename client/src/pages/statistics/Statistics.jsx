import styles from './Statistics.module.css'
import { ChartRegister } from '../../components/charts/ChartRegister'
import { ChartCity } from '../../components/charts/ChartCity'
import { Table } from '../../components/charts/Table'
import { useEffect } from 'react'
import { TableStudent } from '../../components/charts/TableStudent'
import { HeaderAdmin } from '../../components/header/HeaderAdmin'

export const Statistics = () => {
    useEffect(() => {
        document.title = 'Статистика фонда'
    })

    return(
        <div className={styles.page}>
            <HeaderAdmin />
            <div className={styles.container}>
                <div className={styles.chart}>
                    <div className={styles.table}>
                        <ChartRegister /> 
                        <ChartCity />
                    </div>
                    <div className={styles.table}> 
                        <Table />
                        <TableStudent />
                    </div>
                </div>
            </div>
        </div>
    )
}

