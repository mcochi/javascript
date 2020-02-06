var nodemailer = require ('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mcochirodrioja@gmail.com',
        pass: 'Fombera2019'
    }
})

var mailOptions = {
    from: 'mcochirodrioja',
    to: 'coro.dri@hotmail.com, rakel_zgz_94@hotmail.com',
    subject: 'Sending Email using Node.js',
    html: '<h1>Te quiero un montón</h1><br><img src="https://static3.larioja.com/innovando/multimedia/201905/16/media/cortadas/diainternet-kxFH-U80221923518eXH-624x385@La%20Rioja.jpg" class = "img-responsive">'
}
    transporter.sendMail(mailOptions,function(error,info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent:' + info.response);
    }
})