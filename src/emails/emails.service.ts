import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailsService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      secure: false,
      auth: {
        user: '692d168114ad99',
        pass: '8ba7103f0f2b94',
      },
    });
  }

  async sendEmail(to: string, subject: string, text: string): Promise<void> {
    try {
      console.log('to', to.toString());
      console.log('subject', subject.toString());
      console.log('text', text.toString());
      console.log('mailsssssss');
      const mailOptions: nodemailer.SendMailOptions = {
        from: '692d168114ad99',
        to,
        subject,
        text,
      };

      await this.transporter.sendMail(mailOptions);
      console.log('Email sent successfully!');
    } catch (error) {
      console.error('An error occurred while sending the email:', error);
    }
  }
}
