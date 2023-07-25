import { Modal } from "@/components/Modal";
import Render from "@/components/Render";
import { getData } from "@/lib/utils";
import { getServerSession } from "next-auth";
import React from "react";

async function page() {
  // User Session from next-auth
  const session = await getServerSession();

  // Fetching data from database
  const data = await getData(session?.user?.email as string);

  return (
    <div className="flex flex-col gap-6 p-5 max-w-7xl sm:mt-7 mx-auto">
      <div className="border-b pb-3">
        <h1 className="font-semibold text-2xl">Dashboard</h1>
        <p className="font-medium">
          Create apps to register with various providers
        </p>
      </div>
      <div className="">
        <Modal />
      </div>
      <div className="flex items-center justify-between pb-2 border-b">
        <h1 className="font-bold flex-1 text-2xl">Your Applications</h1>
      </div>
      <Render data={data} />
    </div>
  );
}

export default page;
