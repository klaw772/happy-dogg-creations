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