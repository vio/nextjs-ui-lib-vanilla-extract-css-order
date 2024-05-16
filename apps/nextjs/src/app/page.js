import { Button } from "@/ui/button";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h2>App component</h2>
        <Button>Action</Button>
      </div>

    </main>
  );
}
