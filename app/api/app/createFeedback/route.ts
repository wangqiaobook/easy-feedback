import { NextResponse } from "next/server";
import {creatFeedback} from "@/lib/fetchers"
import cors from "@/lib/cors";

export async function POST(request: Request) {
  const data = await request.json();
  const res = await creatFeedback(data)
  return cors(
    request,
    NextResponse.json({data: res}
    )
  );
}

export async function OPTIONS(request: Request) {
  return cors(
    request,
    new Response(null, {
      status: 204,
    })
  );
}
