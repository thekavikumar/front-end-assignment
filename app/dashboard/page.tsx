import Card from "@/components/Card";
import { Modal } from "@/components/Modal";
import { getServerSession } from "next-auth";
import React from "react";

async function getData() {
  const userEmail = {
    user_email: "kavikumarceo@gmail.com",
  }; // Replace this with the actual user email

  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/getApps`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // Pass the user email as part of the request body
    body: JSON.stringify(userEmail),
    cache: "no-store",
  });

  return response.json();
}

async function page() {
  const data = await getData();
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
      <h1 className="font-bold text-2xl pb-2 border-b">Your Applications</h1>
      <div className="flex flex-wrap gap-4">
        {data.map((app: any) => (
          <Card
            key={app.app_name}
            apikey={app.apikey}
            app_description={app.app_description}
            app_name={app.app_name}
          />
        ))}
      </div>
    </div>
  );
}

export default page;
