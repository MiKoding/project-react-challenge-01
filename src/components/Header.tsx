import styles from './Header.module.css'
import rocketLogo from '../assets/rocket.svg'
import SearchBox from './SearchBox'

export function Header(){
    return(
        <div className={styles.headerBody}>
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={rocketLogo} alt="nós so vai pra frente" />
                <p><span>to</span>do</p>
            </div>
        </header>
        <div className={styles.cadasterForm}>  
        <SearchBox/>     
        </div>
        </div>
    )
}

export default Header