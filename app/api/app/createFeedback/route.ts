import { NextResponse } from "next/server";
import {creatFeedback, Feedback} from "@/lib/fetchers"

export async function POST(request: Request) {
  const data = await request.json();
  // console.log('反馈了什么：'), d;
  const res = await creatFeedback(data)
  console.log('res: ', res)

  return NextResponse.json({
    data: res,
  });
}
