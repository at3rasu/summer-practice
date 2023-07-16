import { Link, useNavigate } from 'react-router-dom'
import styles from './SideBar.module.css'

export const SideBar = () =>{
    const navigate = useNavigate()

    return(
        <div className={styles.component}>
            <span className={styles.img}>
                <img src='/img/admin.svg' alt=''/>
            </span>
            <div className={styles.link}>
                <Link to='/Statistics'><img src='/img/dinamic.svg' alt=''/>Динамики</Link>
                <Link to='/studentStatistics'><img src='/img/student.svg' alt=''/>Студенты</Link>
                <Link to='/grantStatistics'><img src='/img/bonus.svg' alt=''/>Бонусная программа</Link>
                <Link to='/partnersStatistics'><img src='/img/partner.svg' alt=''/>Партнеры</Link>
                <button onClick={() => navigate('/admin')}><img src='/img/logaut.svg' alt=''/>Выйти</button> 
            </div>
        </div>    
    )
}