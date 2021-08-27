require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const portNumber = process.env.PORT || 3000;
const sourceDir = 'dist';

app.use(express.json());
app.use(express.static(sourceDir));

const transporter = nodemailer.createTransport({
  port: 465,
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.email,
    pass: process.env.password,
  },
  secure: true,
});

app.get('/test', (req, res) => {
  res.status(200).send('test complete');
});

app.post('/messageToEmail', (req, res) => {
  const { from, name, text } = req.body;
  const mailData = {
    from,
    to: process.env.email,
    subject: `Message from Portfolio site. From: ${name}`,
    text,
    html: `<h3>contact email: ${from}</h3><p>${text}</p>`,
  };
  transporter
    .sendMail(mailData)
    .then((result) => {
      res.status(200).send(result);
      console.log('success');
    })
    .catch((err) => {
      res.status(400).send(err);
      console.log('failure', err);
    });
});

app.listen(portNumber, () => {
  console.log(`Express web server started: http://localhost:${portNumber}`);
  console.log(`Serving content from /${sourceDir}/`);
});
