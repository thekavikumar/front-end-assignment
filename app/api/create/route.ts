import clientPromise from "@/lib/mongodb";
import {  NextApiResponse } from "next";
import { NextResponse } from "next/server";

const handler = async (req: Request, res: NextApiResponse) => {
  try {
    const client = await clientPromise;
    const db = client.db("test");
    const data = await req.json();
    console.log(data);
    const obj = {
      app_name: data.app_name,
      app_description: data.app_description,
      app_providers: data.app_providers,
      user_email: data.user_email,
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
