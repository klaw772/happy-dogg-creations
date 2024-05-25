import { seedItems } from "@/db/seed";
import { db } from "@/db/kysely";
import { ItemModal } from "./ItemModal";

export interface Item {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
}

export default async function Inventory() {
    let items: Item[];
    try {
      items = await db.selectFrom("items").selectAll().execute();
    } catch (e: any) {
      if (e.message === `relation "items" does not exist`) {
        await seedItems();
        items = await db.selectFrom("items").selectAll().execute();
      } else {
        throw e;
      }
    }

  return (
    <div>
      {items.map((item: Item) => (
        <ItemModal key={item.id} item={item} />
      ))}
    </div>
  );
}
