"use server";

import { ContactUsEmail } from "./EmailSample";
import { Resend } from "resend";

const sendmail = async (
    name: string,
    email: string,
    message: string,
    phone: string,
    service: string,
) => {
    try {
        if (!process.env.RESEND_API_KEY)
            throw new Error("Resend API key is not set");

        const resend = new Resend(process.env.RESEND_API_KEY);

        const { data: result, error } = await resend.emails.send({
            from: "New Sagar Tailors <no-reply@sagaryenkure.pro>",
            to: [email],
            bcc: ["sagaryenkure4@gmail.com"],
            subject: `Thanks you for contacting New Sagar Tailors, ${name}`,
            react: await ContactUsEmail({ email, message, name, phone, service }),
        });

        if (error) throw new Error(error.message);

        return result;
    } catch (error) {
        throw error;
    }
};

export default sendmail;
