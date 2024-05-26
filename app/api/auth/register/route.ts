import { db } from '@/db/kysely';
import { hash } from 'bcrypt';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    console.log({ email, password });
    const hashedPw = await hash(password, 5);

    const res = await db
      .insertInto('users')
      .values({
        email,
        password: hashedPw,
      })
      .execute();
  } catch (e) {
    throw e;
  }
  return NextResponse.json({ message: 'success' });
}
