import { useNavigate } from 'react-router-dom'
import styles from './SingInAdmin.module.css'
import { useState } from 'react'

export const SingInAdmin = () =>{
    const [pass, setPass] = useState('')
    const navigate = useNavigate()
    // const handleSubmit = (e) =>{
    //     e.preventDefault()
    //     navigate('/Statistics')
    // }
    return(
        <div className={styles.page}>
            <form className={styles.form}>
                <img src='/img/admin.svg' alt=''/>
                <h1>Вход в админ панель для попечителей</h1>
                <input 
                    placeholder='Введите пароль' 
                    type='password'
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}></input>
                <button type='submit' onClick={() => navigate('/Statistics')}>Войти</button>
            </form>
        </div>
    )
}