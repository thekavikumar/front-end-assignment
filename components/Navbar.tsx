"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { DropdownMenuComp } from "./DropDownMenu";
import MobMenu from "./MobMenu";

function Navbar() {
  const { data: session } = useSession();
  return (
    <nav className="sm:px-14 px-5 border-b py-3 flex items-center justify-between">
      <Link href="/" className="font-bold text-2xl">
        ProRegistra
      </Link>
      {/* Mobile Menu */}
      <MobMenu />
      <div className="hidden sm:flex items-center font-medium gap-10">
        <Link
          className="hover:text-gray-950 transition-all duration-200 text-gray-700"
          href="/"
        >
          Home
        </Link>
        {session && (
          <Link
            className="hover:text-gray-950 transition-all duration-200 text-gray-700"
            href="/dashboard"
          >
            Dashboard
          </Link>
        )}
        <Link
          className="hover:text-gray-950 transition-all duration-200 text-gray-700"
          href="/about"
        >
          About
        </Link>
        <Link
          className="hover:text-gray-950 transition-all duration-200 text-gray-700"
          href="/contact"
        >
          Contact
        </Link>
        <Link
          className="hover:text-gray-950 transition-all duration-200 text-gray-700"
          href="https://www.github.com/thekavikumar/full-stack-assignment"
          target="_blank"
        >
          Github
        </Link>
      </div>
      {/* Show only when user is not logged in */}
      {!session && (
        <div className="hidden sm:block">
          {/* Google Sign In  */}
          <Button
            className="flex hover:shadow-md py-5 items-center gap-2"
            onClick={() => {
              signIn("google");
            }}
          >
            <Image
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
              alt="Google Logo"
              width={28}
              height={28}
            />
            <span>Sign in with Google</span>
          </Button>
        </div>
      )}
      {/* Show only when user is logged in */}
      {session && (
        <div className="hidden sm:block">
          <DropdownMenuComp logo={session.user?.image as string} />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
