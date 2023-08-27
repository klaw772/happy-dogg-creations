import Image from "next/image";
import styles from './intro-hero.module.css';

export const IntroHero = () => {
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
};
