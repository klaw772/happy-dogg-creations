import {db} from '@/db/kysely'
import { seedUsers } from '@/db/seed';
import styles from './page.module.css'
import Image from "next/image";

export default async function Home() {
    let users;
    try {
      users = await db.selectFrom("users").selectAll().execute();
    } catch (e: any) {
      if (e.message === `relation "users" does not exist`) {
        await seedUsers();
        users = await db.selectFrom("users").selectAll().execute();
      } else {
        throw e;
      }
    }
  

  return (
      <div className={styles.introContainer}>
        <Image
          src="https://images.unsplash.com/photo-1417325384643-aac51acc9e5d"
          alt="Ecommerce Greeting Page"
          width={150}
          height={150}
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