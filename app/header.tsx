import Image from "next/image"
import styles from './header.module.css'
import Link from "next/link";
import { BsFillCartFill } from "react-icons/bs";


export const Header = () => {
  return (
    <div className={styles.nav}>
      <Link href="/">
        {" "}
        <Image
          src="/happy-dogg-logo.jpg"
          alt="HappyDoggCreations Logo"
          width={175}
          height={175}
          priority
        />
      </Link>
      <div className={styles.navItems}>
        <Link href="/inventory">Inventory</Link>
        <p>Events</p>
        <p>Contact</p>
        <p>
          <BsFillCartFill />
        </p>
      </div>
    </div>
  );
}