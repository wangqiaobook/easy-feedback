import { getFeedbacks } from "@/lib/fetchers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const currentPage = Number(searchParams.get('currentPage') || 1)
  const pageSize = Number(searchParams.get('pageSize') || 10);

  const data = await getFeedbacks(currentPage, pageSize);
  return NextResponse.json({
    data,
  });
}