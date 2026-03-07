import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email is required." },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.ZAPIER_WEBHOOK_URL;

    if (webhookUrl) {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "threadstomillions.com" }),
      });

      if (!res.ok) {
        console.error("Zapier webhook failed:", res.status);
        return NextResponse.json(
          { error: "Something went wrong. Please try again." },
          { status: 502 }
        );
      }
    } else {
      // Log for visibility until webhook is configured
      console.log("[subscribe] No ZAPIER_WEBHOOK_URL set. Email received:", email);
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
