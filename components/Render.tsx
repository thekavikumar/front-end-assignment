"use client";
import React from "react";
import Card from "./Card";

// data is the array of objects from the API
function Render({ data }: any) {
  return (
    <div className="flex flex-wrap gap-4">
      {data.map((app: any) => (
        <Card
          key={app.app_name}
          apikey={app.api_key}
          app_description={app.app_description}
          app_providers={app.app_providers}
          app_name={app.app_name}
        />
      ))}
    </div>
  );
}

export default Render;
