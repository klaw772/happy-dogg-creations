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
          src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9nfGVufDB8fDB8fHww"
          alt="HappyDoggCreations Logo"
          width={50}
          height={50}
          priority
        />
      </Link>
      <div className={styles.navItems}>
        <Link href="/inventory">Inventory</Link>
        <p>Contact</p>
        <p>
          <BsFillCartFill />
        </p>
      </div>
    </div>
  );
}