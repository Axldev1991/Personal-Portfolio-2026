import { EmailTemplate } from '@/components/emails/ContactTemplate';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message, _gotcha } = body;

        // 🛡️ Honeypot Trap: If _gotcha is filled, it's a bot.
        if (_gotcha) {
            console.warn(`🤖 Bot detected! Honeypot trap triggered by IP: ${request.headers.get("x-forwarded-for") || "unknown"}`);
            // Return fake success to confuse the bot
            return NextResponse.json({ success: true });
        }

        const { data, error } = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: ['castellanoaxl@gmail.com'],
            subject: `🚀 Portfolio Message: From ${name}`,
            react: <EmailTemplate name={name} email={email} message={message} />,
        });

        if (error) {
            console.error("Resend API Error:", error);
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json(data);
    } catch (error) {
        console.error("💥 Server Error in /api/send:", error);
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}
