import { NextRequest, NextResponse } from "next/server";

const WEB3FORMS_KEY = process.env.WEB3FORMS_KEY;

export async function POST(req: NextRequest) {
  if (!WEB3FORMS_KEY) {
    return NextResponse.json({ success: false, error: "No configurado" }, { status: 500 });
  }

  try {
    const body = await req.json();

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        name: body.name,
        email: body.email,
        message: body.message,
      }),
    });

    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ success: false, error: "Error interno" }, { status: 500 });
  }
}
