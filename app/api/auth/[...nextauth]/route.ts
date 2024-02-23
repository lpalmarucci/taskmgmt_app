import NextAuth, { NextAuthOptions } from 'next-auth';
import Github from 'next-auth/providers/github';

const authOptions: NextAuthOptions = {
  providers: [
    Github({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
  ],
  theme: {
    colorScheme: 'auto',
  },
};
export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
