import russStyles from './russ-travel.module.scss';
import styles from "@/components/burgers/burgers.module.scss";


function RussTravel() {
    return (
        <section>
            <div className={styles.burgers}>
                <div className={russStyles.backgroundBox}>

                    <a className={styles.link}
                       href="https://github.com/mxiloo/russian-travel-bootcamp"
                       target={'_blank'}>
                        <div className={russStyles.sitePixels}></div>
                    </a>

                    <div className={styles.textBox}>
                        <h3 className={styles.titleBox}>
                            Russian Travel
                            <div className={russStyles.carGif}></div>
                        </h3>
                        <span className={styles.text}>Проект одностраничного сайта про путешествие по России!
                            Наполнен интересной и познавательной информацией о различных местах страны.
                        </span>
                    </div>

                </div>


            </div>

            <div className={styles.bottomBoxProjects}>
                <h3 className={styles.titleBox}>Что было использовано:</h3>
                <li className={styles.stack}>
                    <ul className={styles.textUl}>
                        • Методология БЭМ
                    </ul>
                    <ul className={styles.textUl}>
                        • flexbox верстка
                    </ul>
                    <ul className={styles.textUl}>
                        • Различные анимации
                    </ul>
                    <ul className={styles.textUl}>
                        • углубленное использование HTML
                    </ul>
                    <ul className={styles.textUl}>
                        • display: grid
                    </ul>
                    <ul className={styles.textUl}>
                        • СSS
                    </ul>
                </li>
            </div>
        </section>
    )
}

export default RussTravel