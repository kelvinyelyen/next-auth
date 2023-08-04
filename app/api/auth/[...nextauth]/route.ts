import NextAuth, { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import prisma from "../../../../lib/prisma"

// Configuration for authentication providers
export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // Add other providers here...https://next-auth.js.org/v3/configuration/providers
  ],
  adapter: PrismaAdapter(prisma), // Using Prisma adapter to handle authentication data
  secret: process.env.SECRET, // Secret key for session encryption
  // Add other options...https://next-auth.js.org/v3/configuration/options
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };