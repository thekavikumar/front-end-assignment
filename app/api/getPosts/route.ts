import clientPromise from "@/lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { NextResponse } from "next/server";

const getHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const session = await getSession({ req });
    if (!session) {
      return NextResponse.json({ message: "User session not found" });
    }

    const client = await clientPromise;
    const db = client.db("apps");
    const collection = db.collection("apps");

    // Fetch data related to the current user
    const user_email = session?.user?.email;
    const apps = await collection.find({ user_email }).toArray();

    return NextResponse.json({ apps });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Something went wrong" });
  }
};

export { getHandler as GET };
