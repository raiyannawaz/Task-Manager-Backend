const { createTransport } = require('nodemailer')

const transport = createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_ID,
        pass: process.env.MAIL_PASS
    }
})

const sendMail = async ({sendTo, subject, content}) =>{
    try{
        let result = await transport.sendMail({
            from: `Task Manager ${process.env.MAIL_ID}`,
            to: sendTo,
            subject,
            html: content
        })
        return result
    }
    catch(err){
        console.log(err)
    }
}

module.exports = sendMail 