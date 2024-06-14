import { PAGE_LIMIT } from "@/public/config";
import supabaseClient from "@/public/lib/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const response = await supabaseClient
      .from("guest")
      .select()
      .order("created_at", { ascending: false });

    if (!response.data) {
      throw "no data";
    }

    const guestCount = response.data.length;
    const pageCount = guestCount > 1 ? Math.ceil(guestCount / PAGE_LIMIT) : 1;

    return NextResponse.json({ pageCount });
  } catch (error) {
    console.error(error);

    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
};
