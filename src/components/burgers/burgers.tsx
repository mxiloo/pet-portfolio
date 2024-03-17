import styles from "./burgers.module.scss";


function Burgers() {
    return (
        <section>
            <div className={styles.burgers}>
                <div className={styles.backgroundBox}>

                    <a className={styles.link}
                       href="https://github.com/mxiloo/react-stellar-burger?tab=readme-ov-file"
                       target={'_blank'}>
                        <div className={styles.sitePixels}></div>
                    </a>

                    <div className={styles.textBox}>
                        <h3 className={styles.titleBox}>
                            Stellar Burger
                            <div className={styles.burgerGif}></div>
                        </h3>
                        <h4 className={styles.subtitle}>Проект космической бургерной</h4>
                        <span className={styles.text}>Данное приложение позволяет пользователю собрать бургер из
                            доступных ему ингредиентов и после незамысловатой регистрации, оформить заказ!
                            Также доступны заказы всех пользователей, которые обновляются в реальном времени!
                        </span>
                    </div>

                </div>


            </div>

            <div className={styles.bottomBoxProjects}>
                <h3 className={styles.titleBox}>Что было использовано:</h3>
                <li className={styles.stack}>
                    <ul className={styles.textUl}>
                        • React DnD
                    </ul>
                    <ul className={styles.textUl}>
                        • Автотесты Cypress
                    </ul>
                    <ul className={styles.textUl}>
                        • TypeScript (в ранних версиях приложение было на JS)
                    </ul>
                    <ul className={styles.textUl}>
                        • CSS
                    </ul>
                    <ul className={styles.textUl}>
                        • React
                    </ul>
                    <ul className={styles.textUl}>
                        • Redux
                    </ul>
                    <ul className={styles.textUl}>
                        • Подключение к WebSocket
                    </ul>
                    <ul className={styles.textUl}>
                        • React Router
                    </ul>
                </li>
            </div>
        </section>
    )
}

export default Burgers