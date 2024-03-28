import { keyEnv } from "@/constant";
import api from "@/service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;

  const res = await api.get(
    `/everything?apiKey=${keyEnv}&q=world&${new URLSearchParams(searchParams)}`
  );

  return NextResponse.json(res.data);
}
