const sgMail = require('@sendgrid/mail');
const chalk=require('chalk')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail=(email,name)=>{
    const msg = {
        to: email,
        from: 'rajatsinghbs80@gmail.com',
        subject: 'Welcome to the TASK APP',
        text: `Welcome to the app, ${name}.Let me know how you get along with the App`,
        
      };
      sgMail.send(msg);
} 

const sendByeEmail=(email,name)=>{
    const msg = {
        to: email,
        from: 'rajatsinghbs80@gmail.com',
        subject: 'Service discontinued',
        text: `HI, ${name}.Looks as you are unhappy with our services,kindly send back a feedback on how we can improve it. Hope to see you in future`,
        
      };
      sgMail.send(msg);
} 


module.exports={
    sendWelcomeEmail,
    sendByeEmail
}
