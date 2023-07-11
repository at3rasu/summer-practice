import { useNavigate } from 'react-router-dom'
import styles from './SingInAdmin.module.css'

export const SingInAdmin = () =>{
    const navigate = useNavigate()
    const handleSubmit = (e) =>{
        e.preventDefault()
        navigate('/Statistics')
    }
    return(
        <div className={styles.page}>
            <form className={styles.form} handleSubmit={handleSubmit}>
                <img src='/img/admin.svg' alt=''/>
                <h1>Вход в админ панель для попечителей</h1>
                <input placeholder='Введите пароль' type='password'></input>
                <button type='submit'>Войти</button>
            </form>
        </div>
    )
}