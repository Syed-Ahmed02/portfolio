import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY || "");
export async function contactEmailRequest(
  from: string,
  subject: string,
  text: string
) {
  try {
    const res = await resend.emails.send({
      from: process.env.NEXT_PUBLIC_RESEND_TO_EMAIL || "" ,
      to: process.env.NEXT_PUBLIC_RESEND_TO_EMAIL || "",
      subject: subject,
      text: 
      `
      Email From:${from}
      
      Email Content:${text}
      
      `,
    });
    return res.data;
  } catch (e) {
    console.error("Error sending email", e);
    throw e;
  }
}
