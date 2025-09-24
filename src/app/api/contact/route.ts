import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();

        // Basic validation
        if (!data.name || !data.email || !data.consent) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Here you would integrate with your email service
        // For now, we'll just log the data and return success
        console.log('Contact form submission:', {
            name: data.name,
            email: data.email,
            company: data.company,
            phone: data.phone,
            message: data.message,
            timestamp: new Date().toISOString()
        });

        // TODO: Integrate with email service like Resend, SendGrid, etc.
        // Example with Resend:
        // const resend = new Resend(process.env.RESEND_API_KEY);
        // await resend.emails.send({
        //   from: 'contact@prismadvisors.com',
        //   to: 'info@prismadvisors.com',
        //   subject: `New Contact Form Submission from ${data.name}`,
        //   html: `
        //     <h3>New Contact Form Submission</h3>
        //     <p><strong>Name:</strong> ${data.name}</p>
        //     <p><strong>Email:</strong> ${data.email}</p>
        //     <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
        //     <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
        //     <p><strong>Message:</strong> ${data.message || 'No message provided'}</p>
        //   `
        // });

        return NextResponse.json(
            { success: true, message: 'Thank you for your message. We\'ll get back to you soon!' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Something went wrong. Please try again.' },
            { status: 500 }
        );
    }
}