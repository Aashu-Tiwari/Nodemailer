var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/send-mail',function(req,res){
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'aashutiwari2501@gmail.com',
      pass: 'picezqwtrvdpskps'
    }
  });

  var mailOptions = {
    from: 'aashutiwari2501@gmail.com',
    to: req.body.receiver,
    subject: req.body.subject,
    html:`<h1 style="font-family: gilroy; font-size: 40px; color: red;" ><i><b>Scarlet Witch❤️😘</b></i></h1>
    <h5 style="font-family: gilroy; color: black; font-size: 20px;"><i><b>Laal Shurkh Jadugarni🧙🧹</b></i></h5>

          ${req.body.message}`
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      res.send('send')
    }
  });
});

module.exports = router;
