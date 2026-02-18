import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { formType, ...formData } = body;

        // SwanDesk form endpoint
        const swandeskFormUrl = 'https://panel.swandigitals.com/public-forms/9hhui3yqfxz';

        // Prepare the payload for SwanDesk
        // The form data structure will depend on how SwanDesk expects it
        const payload = {
            formType,
            submittedAt: new Date().toISOString(),
            ...formData
        };

        // Submit to SwanDesk form
        const response = await fetch(swandeskFormUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            return NextResponse.json({
                success: true,
                message: 'Form submitted successfully!',
            });
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        console.error('Form submission error:', error);
        return NextResponse.json(
            {
                success: false,
                message: 'Failed to submit form. Please try again or contact us directly at support@swandigitals.com',
            },
            { status: 500 }
        );
    }
}
