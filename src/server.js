const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const firstName = req.body.body.firstName 
  const lastName = req.body.body.lastName 
  const email = req.body.body.email
  const message = req.body.body.message

  // Create a nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'tedsmiles01@gmail.com', // This is the email that sends the reply (Make a DO NOT REPLY email address ?)
      pass: 'ancv dcav sdfu gslu', 
    },
  });

  // Set up email options
  const mailOptions = {
    to: 'ted@smilesfamily.co.uk', // replace with the Charlie's email
    subject: 'New Contact Form Submission',
    text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });


  const replyOptions = {
    from: "DO NOT REPLY", // replace with your email
    to: email, // replace with the recipient's email
    subject: 'Re: Contact Form Submission',
    html: `<h3>Hi ${firstName} ${lastName}</h3>\n<p>Thank you for your message, I'll get back to you in a few days.</p>\n\n<h4>Message:</h4> ${message} <img src="test:unique@nodemailer.com"/>`,
    
  };

  // Send the email
  transporter.sendMail(replyOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    return res.status(200).send('Email sent: ' + info.response);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
