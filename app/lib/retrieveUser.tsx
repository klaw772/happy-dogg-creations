import { db } from '@/db/kysely';

import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function retrieveUser() {
  'use server';
  const session = await getServerSession();
  if (!session || !session.user || !session.user.email) {
    redirect('/login');
  }

  const user = await db
    .selectFrom('users')
    .selectAll()
    .where('email', '=', session.user.email)
    .executeTakeFirst();

  return user;
}
