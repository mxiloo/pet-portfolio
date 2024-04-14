import styles from './header.module.scss'

function Header() {

    return (
        <header className={styles.box}>
            <div className={styles.scanlines}></div>
            <li className={styles.li}>
                <a href='https://github.com/mxiloo' target="_blank">
                    <ul className={styles.logo}>
                    </ul>
                </a>
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