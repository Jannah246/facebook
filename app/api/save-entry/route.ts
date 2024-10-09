import connectDB from "@/lib/mongo";
import Users from "@/models/userCollection";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export async function POST(req: NextRequest){
    try {
        const { email, password }: { email: string, password: string } = await req.json();
        const newUser = new Users({
            Email: email,
            Password: password
        })
        const savedUser = await newUser.save();
        return Response.json(savedUser);
    } catch (error) {
        console.log(error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}

export const dynamic = "force-dynamic";

