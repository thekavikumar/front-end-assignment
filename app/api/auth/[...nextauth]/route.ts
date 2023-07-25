import { authConfig } from "@/lib/auth";
import NextAuth from "next-auth/next";

// https://next-auth.js.org/configuration/options
const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };
