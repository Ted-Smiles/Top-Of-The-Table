const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const AWS = require('aws-sdk');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// Configure AWS SDK with your credentials
AWS.config.update({
  accessKeyId: 'YOUR_ACCESS_KEY',
  secretAccessKey: 'YOUR_SECRET_KEY',
  region: 'us-east-1', // Change to your region
});

const s3 = new AWS.S3();
const BUCKET_NAME = 'your-s3-bucket-name'; // Replace with your S3 bucket name

app.post('/send-email', (req, res) => {
  const firstName = req.body.body.firstName 
  const lastName = req.body.body.lastName 
  const email = req.body.body.email
  const message = req.body.body.message

  // Create a nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'tedsmiles01@gmail.com', // replace with your email
      pass: 'ancv dcav sdfu gslu', // replace with your email password
    },
  });

  // Set up email options
  const mailOptions = {
    to: 'ted@smilesfamily.co.uk', // replace with the recipient's email
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

// API endpoint to get all images
app.get('/api/images', async (req, res) => {
  try {
    const data = await s3.listObjectsV2({ Bucket: BUCKET_NAME }).promise();
    const images = data.Contents.map((object) => ({
      id: object.Key,
      src: `https://${BUCKET_NAME}.s3.amazonaws.com/${object.Key}`,
      // Add more properties as needed
    }));
    res.json(images);
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API endpoint to add a new image
app.post('/api/images', async (req, res) => {
  try {
    const { src, text } = req.body;
    const imageId = uuidv4();
    const Key = `images/${imageId}.jpg`; // Adjust the key as needed

    await s3.upload({
      Bucket: BUCKET_NAME,
      Key,
      Body: src, // Assuming src is a base64-encoded image data
      ACL: 'public-read',
      ContentType: 'image/jpeg',
    }).promise();

    const imageUrl = `https://${BUCKET_NAME}.s3.amazonaws.com/${Key}`;
    res.json({ id: imageId, src: imageUrl, text });
  } catch (error) {
    console.error('Error adding image:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API endpoint to remove an image
app.delete('/api/images/:id', async (req, res) => {
  try {
    const imageId = req.params.id;
    const Key = `images/${imageId}.jpg`; // Adjust the key as needed

    await s3.deleteObject({ Bucket: BUCKET_NAME, Key }).promise();

    res.json({ message: 'Image deleted successfully' });
  } catch (error) {
    console.error('Error deleting image:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
