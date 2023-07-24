"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { PlusIcon } from "@radix-ui/react-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useToast } from "./ui/use-toast";
import { ToastAction } from "./ui/toast";

const FormSchema = z.object({
  app_name: z
    .string()
    .min(3, "App Name is Too short")
    .max(50, "App Name is Too long"),
  app_description: z.string().max(100, "Description is Too long"),
  app_providers: z.string({
    required_error: "Please select an provider to register.",
  }),
});

export function Modal() {
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const { data: session } = useSession();

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    // ..
    console.log(data);
    const final_data = {
      app_name: data.app_name,
      app_description: data.app_description,
      app_providers: data.app_providers,
      user_email: session?.user?.email,
    };
    try {
      if (!session) {
        console.log("Not logged in");
      }
      const response = await fetch("/api/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(final_data), // Convert the form data to JSON
      });

      const responseData = await response.json();

      if (response.ok) {
        console.log(responseData); // Success! Data was created
        toast({
          title: "App Created Successfully!",
          description: "Your app has been created successfully.",
        });
        router.push("/");
      } else {
        console.error(responseData.message); // Log the error message
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Error while submitting:", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  }

  return (
    <Form {...form}>
      <Dialog>
        <DialogTrigger asChild>
          <Button>
            <PlusIcon className="w-5 h-5 mr-2" />
            Create App
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-[400px] sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create App</DialogTitle>
            <DialogDescription>
              Create an app to register with various providers
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="">
                <FormField
                  control={form.control}
                  name="app_name"
                  render={({ field }) => (
                    <FormItem className="mb-3">
                      <div className="flex items-center justify-between w-full">
                        <FormLabel className="mr-6">App Name</FormLabel>
                        <FormControl>
                          <Input
                            className="flex-1"
                            placeholder="your-app-name"
                            {...field}
                          />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="">
                <FormField
                  control={form.control}
                  name="app_description"
                  render={({ field }) => (
                    <FormItem className="mb-3">
                      <div className="flex items-center justify-between w-full">
                        <FormLabel className="mr-4"> Description</FormLabel>
                        <FormControl>
                          <Input
                            className="flex-1"
                            placeholder="your-app-name"
                            {...field}
                          />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="">
                <FormField
                  control={form.control}
                  name="app_providers"
                  render={({ field }) => (
                    <FormItem className="mb-3">
                      <div className="flex items-center justify-between w-full">
                        <FormLabel className="mr-8">Providers</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a provider" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Google">Google</SelectItem>
                            <SelectItem value="Facebook">Facebook</SelectItem>
                            <SelectItem value="Binance">Binance</SelectItem>
                            <SelectItem value="Twitter">Twitter</SelectItem>
                            <SelectItem value="Instagram">Instagram</SelectItem>
                            <SelectItem value="Spotify">Spotify</SelectItem>
                            <SelectItem value="Quora">Quora</SelectItem>
                            <SelectItem value="Tinder">Tinder</SelectItem>
                            <SelectItem value="Bumble">Bumble</SelectItem>
                            <SelectItem value="Bybit">Bybit</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <DialogFooter>
                <Button type="submit" className="mt-3">
                  Create App
                </Button>
              </DialogFooter>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </Form>
  );
}
