import supabaseClient from "@/public/lib/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { password } = await req.json();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!password || !id) {
      return NextResponse.json(
        { message: "Not exist password" },
        { status: 400 }
      );
    }

    const existGuestResponse = await supabaseClient
      .from("guest")
      .select()
      .eq("id", id)
      .limit(1)
      .single();

    if (!existGuestResponse.data) {
      return NextResponse.json({ message: "No exist guest" }, { status: 400 });
    }

    const guest = existGuestResponse.data;

    return NextResponse.json(
      { result: password === guest.password },
      { status: 200 }
    );
    
  } catch (error) {
    console.error(error);

    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
};
