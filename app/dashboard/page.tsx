import { Modal } from "@/components/Modal";
import React from "react";

function page() {
  return (
    <div className="flex flex-col gap-6 p-5">
      <div className="border-b pb-3">
        <h1 className="font-semibold text-2xl">Dashboard</h1>
        <p className="font-medium">
          Create apps to register with various providers
        </p>
      </div>
      <div className="">
        <Modal />
      </div>
    </div>
  );
}

export default page;
