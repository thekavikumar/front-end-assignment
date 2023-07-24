"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-6xl flex flex-col mt-32 sm:mt-32 items-center gap-8 mx-auto px-4 sm:px-8">
      <div className="flex flex-col items-center text-center text-3xl sm:text-5xl font-bold text-black">
        <h1>Create, Connect, Innovate</h1>
        <h1>Build Your Apps, Integrate with Ease</h1>
      </div>
      <p className="text-center font-medium text-base sm:text-xl text-gray-700 max-w-5xl">
        Welcome to ProRegistra! Your one-stop platform for app creation and
        seamless integration with various providers. Whether you're a developer,
        entrepreneur, or enthusiast, our intuitive tools empower you to build
        and deploy apps effortlessly. Join us on this exciting journey of
        innovation and connectivity!
      </p>
      <Button
        className="flex w-fit hover:shadow-md text-base sm:text-lg p-5 sm:p-6 items-center gap-2"
        onClick={() => {
          signIn("google");
        }}
      >
        <Image
          src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
          alt="Google Logo"
          width={34}
          height={34}
        />
        <span>Sign in with Google</span>
      </Button>
    </main>
  );
}
