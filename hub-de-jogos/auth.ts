// auth.ts
import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/lib/prisma"
import Credentials from "next-auth/providers/credentials"
import { compare } from "bcrypt"

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      async authorize(credentials) {
        if (!credentials.email || !credentials.password) {
          return null
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email as string },
        })

        if (
          !user ||
          !user.password ||
          !(await compare(credentials.password as string, user.password))
        ) {
          return null
        }
        
        return user
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub
      }
      return session
    },
  },
  pages: {
    signIn: "/login",
  },
})