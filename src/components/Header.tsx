import styles from './Header.module.css'
import rocketLogo from '../assets/rocket.svg'

export function Header(){
    return(
        <header className={styles.header}>
            <img src={rocketLogo} alt="nós so vai pra frente" />
            <p><span>to</span>do</p>
        </header>       
    )
}

export default Header