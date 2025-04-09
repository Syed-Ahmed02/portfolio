import { Resend } from "resend";

const resend = new Resend("re_123456789");
export async function contactEmailRequest(
  from: string,
  subject: string,
  text: string
) {
  try {
    const res = await resend.emails.send({
      from: from,
      to: ["delivered@resend.dev"],
      subject: subject,
      text: text,
    });
    return res.data;
  } catch (e) {
    console.error("Error sending email", e);
    throw e;
  }
}
