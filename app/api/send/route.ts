import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY || "");
export async function POST(request: Request) {
  try {
    const { from, subject, text } = await request.json();

    const data = await resend.emails.send({
      from: process.env.NEXT_PUBLIC_RESEND_TO_EMAIL|| '',
      to: process.env.NEXT_PUBLIC_RESEND_TO_EMAIL || '',
      subject: "Website Contact Request: " + subject,
      text: `
        Email From: ${from}
        
        Email Content: ${text}
      `,
      
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
} 