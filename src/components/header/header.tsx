import styles from './header.module.scss'

function Header() {

    return (
        <header className={styles.box}>
            <div className={styles.scanlines}></div>
            <li className={styles.li}>
                <ul className={styles.logo}>
                </ul>
                <ul className={styles.ul}>
                    Вид
                </ul>

                <ul className={styles.ul}>
                    Контакты
                </ul>
            </li>
        </header>
    )
}

export default Header