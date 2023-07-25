"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  // User Session from next-auth
  const { data: session } = useSession();
  const router = useRouter();

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
      {!session && (
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
      )}
      {session && (
        <Button
          className="flex w-fit hover:shadow-md text-base sm:text-lg p-5 sm:p-6 items-center gap-2"
          onClick={() => {
            router.push("/dashboard");
          }}
        >
          <ArrowRight size={28} />
          <span>Go To Dashboard</span>
        </Button>
      )}
    </main>
  );
}
