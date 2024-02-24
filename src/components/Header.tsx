import styles from './Header.module.css'
import rocketLogo from '../assets/rocket.svg'
import SearchBox from './SearchBox'

export function Header(){
    return(
        <div>
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={rocketLogo} alt="nós so vai pra frente" />
                <p><span>to</span>do</p>
            </div>
        </header>  
        <SearchBox/>     
        </div>
    )
}

export default Header