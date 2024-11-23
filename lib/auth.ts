import NextAuth, { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import type { AdapterUser } from "next-auth/adapters";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async session({
      session,
      token,
    }: {
      session: { user: AdapterUser };
      token: { sub: string };
    }) {
      const user = session.user as AdapterUser & {
        username: string;
        uid: string;
      };
      user.username = user.name!.split(" ").join("").toLocaleLowerCase();
      user.uid = token.sub;
      return { ...session, user, expires: null };
    },
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig as unknown as NextAuthConfig);
