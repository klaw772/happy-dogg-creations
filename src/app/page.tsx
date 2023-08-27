import styles from './page.module.css'
import { Header } from './intro/header'
import { IntroHero } from './intro/intro-hero';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <IntroHero />
    </main>
  );
}
