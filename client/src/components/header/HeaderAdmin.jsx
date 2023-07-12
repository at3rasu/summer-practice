import { useNavigate } from 'react-router-dom'
import styles from './HeaderAdmin.module.css'

export const HeaderAdmin = () =>{
    const navigate = useNavigate()

    return(
        <header className={styles.header}>
            <img src='/img/admin.svg' alt=''/>
            <button onClick={() => navigate('/admin')}><img src='/img/logaut.png' alt='' style={{width:'60px'}}/></button>
        </header>
    )
}