var nodemailer	= require( 'nodemailer' );

var transporter = nodemailer.createTransport({
    service: 'QQ',
    auth: {
        user: '2270112418@qq.com',
        pass: 'qqwe321'
    }
});

function mail( config ){

	var mailOptions = {
		from:        'upopen.cn', 
		to:          config.to || '2270112418@qq.com',
		subject:     config.subject || '<h3>hi, register success</h3>',
		text:        config.subject || '<h3>hi, register success</h3>',
		html:        config.html || '<h3>hi, register success</h3>',
		attachments: config.annex || []
	};

	transporter.sendMail(mailOptions, function(error, info){
		if(error){
			console.log(error);
		}else{
			console.log('Message sent: ' + info.response);
		}
	});

}
