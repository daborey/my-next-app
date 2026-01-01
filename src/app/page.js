import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 style={{ fontSize: "80px", fontWeight: "bold", textAlign: "center" }}>
          Da Borey
        </h1>
      </main>
    </div>
  );
}
