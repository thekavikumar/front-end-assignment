import React from "react";

interface CardProps {
  app_name: string;
  app_description: string;
  apikey: string;
}

function Card({ app_name, app_description, apikey }: CardProps) {
  return (
    <div>
      <div className="bg-white shadow-md rounded-md p-5">
        <div className="flex justify-between">
          <div>
            <h1 className="font-bold text-xl">{app_name}</h1>
            <p className="font-medium">{app_description}</p>
          </div>
          <div className="flex flex-col gap-2">
            <button className="bg-blue-500 text-white rounded-md px-3 py-1">
              Edit
            </button>
            <button className="bg-red-500 text-white rounded-md px-3 py-1">
              Delete
            </button>
          </div>
        </div>
        <div className="flex justify-between mt-3">
          <div>
            <p className="font-medium">API Key</p>
            <p className="font-bold">{apikey}</p>
          </div>
          <div>
            <button className="bg-blue-500 text-white rounded-md px-3 py-1">
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
