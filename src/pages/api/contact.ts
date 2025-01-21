// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import Brevo from 'sib-api-v3-sdk';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Configure the Brevo API
    const defaultClient = Brevo.ApiClient.instance;
    const apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = process.env.BREVO_API_KEY;

    const transactionalEmailsApi = new Brevo.TransactionalEmailsApi();

    // Prepare the email payload
    const sendSmtpEmail = new Brevo.SendSmtpEmail({
      sender: { email: process.env.EMAIL_SENDER, name: 'Portfolio' }, // Add sender here
      to: [{ email: process.env.EMAIL_RECIPIENT }], // Recipient's email address
      subject: `New message from ${name}`,
      htmlContent: `<p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong> ${message}</p>`,
    });
    // Send the email
    await transactionalEmailsApi.sendTransacEmail(sendSmtpEmail);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.log('Name:' + name);
    console.log('Sender Email:' + email);
    console.log('Message:' + message);
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
}
