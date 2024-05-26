import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcrypt';
import { db } from '@/db/kysely';

const handler = NextAuth({
  session: {
    strategy: 'jwt',
  },
  jwt: {
    maxAge: 60 * 60 * 24 * 7,
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error();
        }
        const response = await db
          .selectFrom('users')
          .selectAll()
          .where('email', '=', credentials.email)
          .executeTakeFirstOrThrow();

        const user = response;
        const passwordCorrect = await compare(
          credentials.password || '',
          user.password
        );

        if (passwordCorrect) {
          return {
            id: String(user.id),
            email: user.email,
          };
        }
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
