import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // NOTE: In a real deployment, parse `formData` and store files in S3/Blob storage,
  // then notify your team. This is a placeholder that always succeeds.
  try {
    const formData = await req.formData();
    console.log("Free Card Check submission:", {
      email: formData.get("email"),
      company: formData.get("company"),
      notes: formData.get("notes"),
      filesCount: formData.getAll("files")?.length || 0,
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
