"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { useToast } from "./ui/use-toast";

// Card Props
interface CardProps {
  app_name: string;
  app_description: string;
  app_providers: string;
  apikey: string;
}

function Card({ app_name, app_description, app_providers, apikey }: CardProps) {
  // Toast
  const { toast } = useToast();

  return (
    <Dialog>
      <div className="p-5 hover:shadow-lg w-[300px] border-2 rounded-md hover:cursor-pointer">
        <div className=" flex flex-col gap-4">
          <h1 className="font-bold text-xl ">{app_name}</h1>
          <p className="font-medium">{app_description}</p>
          <DialogTrigger asChild>
            <Button>View</Button>
          </DialogTrigger>
          <DialogContent className="max-w-[400px] sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>App Details</DialogTitle>
              <DialogDescription>
                <div className="mt-3 flex flex-col">
                  <div className="flex justify-between">
                    <Label className="text-2xl text-black font-bold">
                      {app_name}
                    </Label>
                    <Label className="text-lg text-blue-600 font-medium">
                      {app_providers}
                    </Label>
                  </div>
                  <Label className="text-lg text-gray-700 font-medium">
                    {app_description}
                  </Label>
                </div>
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                onClick={() => {
                  navigator.clipboard.writeText(apikey).then(() => {
                    toast({
                      title: "API Key Copied to Clipboard!",
                      description:
                        "You can now use this API Key to login and interact with your app.",
                    });
                  });
                }}
              >
                Copy API Key
              </Button>

              {/* You can also add other actions or buttons here */}
            </DialogFooter>
          </DialogContent>
        </div>
      </div>
    </Dialog>
  );
}

export default Card;
