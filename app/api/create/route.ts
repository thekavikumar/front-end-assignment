import clientPromise from "@/lib/mongodb";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

const handler = async (req: Request, res: NextApiResponse) => {
  // API KEY GENERATE FUNCTION
  function generateRandomApiKey(length: number): string {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
    const apiKeyArray = [];

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      apiKeyArray.push(characters[randomIndex]);
    }

    return apiKeyArray.join("");
  }

  try {
    const client = await clientPromise;
    const db = client.db("test");
    const data = await req.json();
    // Generate a random API key
    const apiKey = generateRandomApiKey(32);
    console.log(data); // logging for debugging purposes
    const obj = {
      app_name: data.app_name,
      app_description: data.app_description,
      app_providers: data.app_providers,
      user_email: data.user_email,
      api_key: apiKey,
    };
    const collection = db.collection("apps");
    await collection.insertOne(obj);
    return NextResponse.json({ message: "Data added successfully" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Something went wrong" });
  }
};

export { handler as POST };
