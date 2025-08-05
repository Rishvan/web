import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { sessionId, chatInput } = body;

    // Simulate saving to DB

    let reply = "Oho! I am busy right now, please come later.";

    try {
      const res = await axios.post(
        "https://n8n.rishvan.com/webhook/dbfbdc44-7ff0-4e3a-851b-b47dcfe10a58/chat",
        {
          chatInput: chatInput,
          sessionId,
        }
      );

      const botReply = res.data?.output ?? "oho! no response";
      reply = botReply;
    } catch (error) {}

    return NextResponse.json(
      { message: "User created", data: reply },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
}
