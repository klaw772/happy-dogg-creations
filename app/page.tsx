import styles from './page.module.css'
import Image from "next/image";
import { Header } from './header'

export default function Home() {
  return (
      <div className={styles.introContainer}>
        <Image
          src="/manda-pic.png"
          alt="Pic of Manda"
          width={300}
          height={300}
          priority
        />
        <div className={styles.introContent}>
          <h1>Lorem Ipsum</h1>
          <p>
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum{" "}
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum{" "}
          </p>
        </div>
      </div>
  );
}
