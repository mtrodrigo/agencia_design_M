import styles from "./page.module.css";
import Topo from "./components/Topo";

export default function Home() {
  return (
    <main className={styles.main}>
      <Topo />
    </main>
  );
}
