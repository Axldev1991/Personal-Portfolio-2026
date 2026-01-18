import * as React from 'react';

interface EmailTemplateProps {
    name: string;
    email: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name,
    email,
    message,
}) => (
    <div style={{
        fontFamily: 'sans-serif',
        backgroundColor: '#050505',
        color: '#ffffff',
        padding: '40px',
        borderRadius: '16px',
        border: '1px solid #330df2'
    }}>
        <h1 style={{ color: '#ccff00', fontSize: '24px', fontWeight: 'bold' }}>New Message from Portfolio! 🚀</h1>
        <p style={{ color: '#888', fontSize: '14px', marginBottom: '20px' }}>Someone is interested in working with you, Axel.</p>

        <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '12px' }}>
            <p><strong>From:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p style={{ marginTop: '20px', whiteSpace: 'pre-wrap' }}><strong>Message:</strong><br />{message}</p>
        </div>

        <p style={{ marginTop: '30px', fontSize: '12px', color: '#444' }}>
            Sent from your 2026 Portfolio Engine.
        </p>
    </div>
);
