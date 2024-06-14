import { PAGE_LIMIT } from "@/public/config";
import supabaseClient from "@/public/lib/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);
    const pageText = searchParams.get("page");

    if (!pageText) {
      return NextResponse.json({ mssage: "Not exist page" }, { status: 200 });
    }

    const response = await supabaseClient
      .from("guest")
      .select()
      .order("created_at", { ascending: false });

    const guests = response.data ?? [];

    if (!guests) {
      throw "no guests";
    }

    const pageCount = guests.length > 1 ? guests.length / PAGE_LIMIT : 1;

    return NextResponse.json({ pageCount }, { status: 200 });
  } catch (error) {
    console.error(error);

    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
};
