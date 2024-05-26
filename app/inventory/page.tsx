import { db } from '@/db/kysely';
import { ItemModal } from './ItemModal';

export interface Item {
  id: number;
  name: string;
  description: string;
  img_url: string;
  created_at: Date;
}

export default async function Inventory() {
  let items: Item[];
  try {
    items = await db.selectFrom('items').selectAll().execute();
  } catch (e: any) {
    throw e;
  }

  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
      {items.map((item: Item) => (
        <ItemModal key={item.id} item={item} />
      ))}
    </div>
  );
}
