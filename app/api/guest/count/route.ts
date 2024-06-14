import { PAGE_LIMIT } from "@/public/config";
import supabaseClient from "@/public/lib/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic'

export const GET = async (req: NextRequest) => {
  try {
    const response = await supabaseClient
      .from("guest")
      .select()
      .order("created_at", { ascending: false });

    const guests = response.data ?? [];

    if (!guests) {
      throw "no guests";
    }

    const pageCount = guests.length > 1 ? Math.ceil(guests.length / PAGE_LIMIT) : 1;

    return NextResponse.json({ pageCount }, { status: 200 });
  } catch (error) {
    console.error(error);

    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
};
