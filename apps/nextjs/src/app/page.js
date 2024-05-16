import { Button } from "@/ui/button";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <p>Button component re-exported from library:</p>
        <ul>
          <li>🟢 when the CSS order is correct</li>
          <li>🔴 when the CSS order is incorrect</li>
        </ul>
        <div className={styles.preview}>
          <Button>Button</Button>
        </div>
      </div>
    </main>
  );
}
