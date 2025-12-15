import { NextResponse } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";

export async function POST(req: Request) {
  try {
    const payload = await getPayload({ config });
    const data = await req.json();

    const newOrder = await payload.create({
      collection: "orders",
      data,
    });

    return NextResponse.json({ success: true, order: newOrder });
  } catch (error) {
    console.error("Order error:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
