import styles from "./page.module.css";
import Site from "@/components/site/site";

export default function Home() {
  return (
    <main className={styles.main}>
      <Site />
    </main>
  );
}
