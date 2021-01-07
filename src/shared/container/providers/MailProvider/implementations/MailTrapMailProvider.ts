// import nodemailer, { Transporter } from 'nodemailer';
// import { inject, injectable } from 'tsyringe';
// import IMailProvider from '../models/IMailProvider';
// import ISendMailDTO from '../dtos/ISendMailDTO';
// import IMailTemplateProvider from '../../MailTemplateProvider/models/IMailTemplateProvider';

// @injectable()
// export default class MailTrapMailProvider implements IMailProvider {
//   private client: Transporter;

//   constructor(
//     @inject('MailTemplateProvider')
//     private mailTemplateProvider: IMailTemplateProvider,
//   ) {
//     const transporter = nodemailer.createTransport({
//       host: 'smtp.mailtrap.io',
//       port: 25 || 465 || 587 || 2525,
//       // secure: account.smtp.secure,
//       auth: {
//         user: '',
//         pass: '',
//       },
//     });

//     const mailOptions = {
//       from: '"Example Team" <from@example.com>',
//       to: 'user1@example.com, user2@example.com',
//       subject: 'Nice Nodemailer test',
//       text: 'Hey there, it’s our first message sent with Nodemailer ',
//       html:
//         '<b>Hey there! </b><br> This is a test with mailtrap<br /><img src="cid:uniq-mailtrap.png" alt="mailtrap" />',
//       attachments: [
//         {
//           filename: 'mailtrap.png',
//           path: `${__dirname}/mailtrap.png`,
//           cid: 'uniq-mailtrap.png',
//         },
//       ],
//     };

//     this.client = transporter;
//   }

//   public async sendMail({
//     to,
//     from,
//     subject,
//     templateData,
//   }: ISendMailDTO): Promise<void> {
//     const message = await this.client.sendMail({
//       from: {
//         name: from?.name || 'Equipe GoBarber',
//         address: from?.email || 'equipe@gobarber.com.br',
//       },
//       to: {
//         name: to.name,
//         address: to.email,
//       },
//       subject,
//       html: await this.mailTemplateProvider.parse(templateData),
//     });

//     console.log('Message sent: %s', message.messageId);
//     // Preview only available when sending through an MailTrap account
//     console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));
//   }
// }
