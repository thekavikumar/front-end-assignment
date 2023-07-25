"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}

// wrapping the children with SessionProvider
function Provider({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default Provider;
