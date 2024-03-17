import mestoStyles from './mesto.module.scss';
import styles from "@/components/Invest-era/invest-era.module.scss";


function Mesto() {
    return (
        <section>
            <div className={styles.invest}>
                <div className={mestoStyles.backgroundBox}>

                    <a className={styles.link}
                       href="https://github.com/mxiloo/mesto-project-bootcamp"
                       target={'_blank'}>
                        <div className={mestoStyles.sitePixels}></div>
                    </a>

                    <div className={mestoStyles.textBox}>
                        <h3 className={styles.titleBox}>
                            Mesto
                            <div className={mestoStyles.octopusGif}></div>
                        </h3>
                        <span className={styles.text}>
                            Место, где можно поделиться своими картинками с пользователями,
                            а также оценить посты других! Также присутствует свой мини-профиль,
                            который можно редактировать!
                        </span>
                    </div>
                </div>
            </div>

            <div className={styles.bottomBoxProjects}>
                <h3 className={styles.titleBox}>Что было использовано:</h3>
                <li className={styles.stack}>
                    <ul className={styles.textUl}>
                        • БЭМ методология
                    </ul>
                    <ul className={styles.textUl}>
                        • Figma
                    </ul>
                    <ul className={styles.textUl}>
                        • HTML
                    </ul>
                    <ul className={styles.textUl}>
                        • CSS
                    </ul>
                    <ul className={styles.textUl}>
                        • JavaScript
                    </ul>
                    <ul className={styles.textUl}>
                        • Настроены package.json и webpack.config.js
                    </ul>
                </li>
            </div>
        </section>
    )
}

export default Mesto