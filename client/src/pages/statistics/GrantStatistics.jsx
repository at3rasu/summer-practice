import { SideBar } from '../../components/sidebar/SideBar'
// import { PartnersTable } from '../../components/table/PartnersTable'
import styles from './Statistics.module.css'

export const GrantStatistics = () =>{
    return(
        <div className={styles.app}>
            <SideBar/>
            <div className={styles.conteiner}>
                <span className={styles.title}>
                    <h1>Бонусная программа</h1>  
                    {/* <PartnersTable />   */}
                </span>
            </div>
        </div>
    )
}