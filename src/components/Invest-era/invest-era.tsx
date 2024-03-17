import styles from './invest-era.module.scss';


function InvestEra() {
    return (
        <section>
            <div className={styles.invest}>
                <div className={styles.backgroundBox}>

                    <a className={styles.link}
                       href="https://invest-era.ru/"
                       target={'_blank'}>
                        <div className={styles.sitePixels}></div>
                    </a>

                    <div className={styles.textBox}>
                        <h3 className={styles.titleBox}>
                            Invest Era
                            <div className={styles.moneyGif}></div>
                        </h3>
                        <h4 className={styles.subtitle}>• Коммерческая разработка</h4>
                        <span className={styles.text}>Авторский проект финансового аналитика Артёма Николаева.
                            Новости, акции, дивиденды. Помогает людям понять, как заработать в условиях
                            экономической нестабильности.
                        </span>
                        <span className={styles.text}>
                            Свёрстаны лайв таблицы с показателями, все действующие страницы сайта,
                            также добавил универсальное модальное окно для входа пользователя с помощью
                            ReactDOM.createPortal.
                        </span>
                    </div>

                </div>


            </div>

            <div className={styles.bottomBoxProjects}>
                <h3 className={styles.titleBox}>Что было использовано:</h3>
                <li className={styles.stack}>
                    <ul className={styles.textUl}>
                        • Swiper js
                    </ul>
                    <ul className={styles.textUl}>
                        • Redux
                    </ul>
                    <ul className={styles.textUl}>
                        • React Router
                    </ul>
                    <ul className={styles.textUl}>
                        • React
                    </ul>
                    <ul className={styles.textUl}>
                        • JavaScript
                    </ul>
                    <ul className={styles.textUl}>
                        • CSS
                    </ul>
                </li>
            </div>
        </section>
    )
}

export default InvestEra