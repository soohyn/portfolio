import supabaseClient from "@/public/lib/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { password } = await req.json();
    const { id } = params;

    if (!id || !password) {
      return NextResponse.json({ message: "Not exist data" }, { status: 400 });
    }

    const existGuestResponse = await supabaseClient
      .from("guest")
      .select()
      .eq("id", id)
      .single();

    if (!existGuestResponse.data) {
      return NextResponse.json({ message: "Not exist guest" }, { status: 400 });
    }

    const hashedPassword = existGuestResponse.data.password;

    if (hashedPassword !== password) {
      return NextResponse.json(
        { message: "Incorrect password" },
        { status: 400 }
      );
    }

    const response = await supabaseClient.from("guest").delete().eq("id", id);

    if (response.error) {
      throw "not delete";
    }

    return NextResponse.json(response);
  } catch (error) {
    console.error(error);

    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
};

export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { message } = await req.json();
    const { id } = params;

    if (!id || !message) {
      return NextResponse.json({ message: "Not exist data" }, { status: 400 });
    }

    const existGuestResponse = await supabaseClient
      .from("guest")
      .select()
      .eq("id", id)
      .limit(1)
      .single();

    if (!existGuestResponse.data) {
      return NextResponse.json({ message: "Not exist guest" }, { status: 400 });
    }

    const response = await supabaseClient
      .from("guest")
      .update({ message })
      .eq("id", id)
      .select()
      .single();

    return NextResponse.json(response);
  } catch (error) {
    console.error(error);

    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
};
