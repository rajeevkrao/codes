var nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.in",
  port: 465,
  secure: true,
  auth: {
    user: 'smashfit@zohomail.in',
    pass: 'bT2vacE4z3Qw',
  },
});

var mailOptions = {
  from: 'smashfit@zohomail.in',
  to: 'rjvkumaraswamy@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});