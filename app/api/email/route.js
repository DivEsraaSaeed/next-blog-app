import { ConnectDB } from "@/lib/config/db";
import Email from "@/lib/models/Email";
import { NextResponse } from "next/server";

const loadDB = async () => await ConnectDB();

loadDB();

export async function POST(request) {
  try {
    const formData = await request.formData();
    const emailData = { email: formData.get("email") };
    await Email.create(emailData);
    return NextResponse.json({
      success: true,
      message: "Email added successfully",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
export async function GET(request) {
  const emails = await Email.find({});
  return NextResponse.json({ emails });
}
export async function DELETE(request) {
  const id = await request.nextUrl.searchParams.get("id");
  await Email.findByIdAndDelete(id);
  return NextResponse.json({ message: "Email deleted successfully" });
}
