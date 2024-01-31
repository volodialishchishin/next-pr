/* Core */
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const { data } = body;
  console.log(data)
  await prisma?.countResults.create({data:{value:data.value, userId:6}})

  return NextResponse.json({ status: "success" });
}

export async function GET(req: Request, res: Response) {
  let data = await prisma?.countResults.findMany({})

  return NextResponse.json({ data });
}
