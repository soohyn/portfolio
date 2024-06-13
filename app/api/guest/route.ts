import { PAGE_LIMIT } from "@/public/config";
import supabaseClient from "@/public/lib/supabaseClient";
import { url } from "inspector";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);
    const pageText = searchParams.get("page");

    if (!pageText) {
      return NextResponse.json({ mssage: "Not exist page" }, { status: 200 });
    }

    const page = +pageText;

    const response = await supabaseClient
      .from("guest")
      .select()
      .order("created_at", { ascending: false })
      .range(0 + (page - 1) * PAGE_LIMIT, page * PAGE_LIMIT - 1);

    const guests = response.data ?? [];

    if (!guests) {
      throw "no guests";
    }

    return NextResponse.json({ guests }, { status: 200 });
  } catch (error) {
    console.log(error);

    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const { name, email, password, message,is_secret } = await req.json();

    if (!(name && email && password && message)) {
      return NextResponse.json({ message: "Not exist data." }, { status: 200 });
    }

    if (message.length > 300) {
      return NextResponse.json({ message: "Message length is over 300" });
    }

    const response = await supabaseClient
      .from("guest")
      .upsert({
        name,
        email,
        password,
        message,
        is_secret
      })
      .select()
      .limit(1)
      .single();

    console.log(response);

    const guest = response.data;

    if (!guest) {
      throw "not create";
    }

    return NextResponse.json({ guest }, { status: 200 });
  } catch (error) {
    console.log(error);

    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
};
