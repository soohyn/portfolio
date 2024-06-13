import { PAGE_LIMIT } from "@/public/config";
import supabaseClient from "@/public/lib/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const response = await supabaseClient.from("guest").select("*");

    if (!response.data) {
      throw "no data";
    }

    const guestCount = response.data.length;
    const pageCount = guestCount > 0 ? guestCount / PAGE_LIMIT : 0;

    return NextResponse.json({ pageCount });
  } catch (error) {
    console.error(error);

    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
};
