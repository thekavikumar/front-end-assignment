import clientPromise from "@/lib/mongodb";
import {  NextApiResponse } from "next";
import { NextResponse } from "next/server";

const handler = async (req: Request, res: NextApiResponse) => {
  try {
    const client = await clientPromise;
    const db = client.db("test");
    const userEmail = await req.json();

    // Fetch all apps with the specific email from the collection
    const collection = db.collection("apps");
    console.log("use", userEmail.user_email);
    const apps = await collection
      .find({ user_email: userEmail.user_email })
      .toArray();

    return NextResponse.json(apps);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Something went wrong" });
  }
};

export { handler as POST };
