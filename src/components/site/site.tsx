import styles from './site.module.scss';
import Header from "@/components/header/header";
import Content from "@/components/content/content";

function Site() {

    return (
        <section className={styles.site}>
            <Header />
            <Content />
        </section>
    )
}

export default Site