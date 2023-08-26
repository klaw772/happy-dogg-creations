import Image from "next/image"
import styles from './header.module.css'
import { BsFillCartFill } from "react-icons/bs";


export const Header = () => {
  return (
    <div className={styles.nav}>
      <Image
        src="/happy-dogg-logo.jpg"
        alt="HappyDoggCreations Logo"
        width={175}
        height={175}
        priority
      />
      <div className={styles.navItems}>
        <p>Inventory</p>
        <p>Events</p>
        <p>Contact</p>
        <p>
          <BsFillCartFill />
        </p>
      </div>
    </div>
  );
}