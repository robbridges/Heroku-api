"use strict";
const sgMail = require('@sendgrid/mail');
const sendGridAPIkey = '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';
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
sgMail.send({
    to: 'Rmb101187@gmail.com',
    from: 'Rmb101187@gmail.com',
    subject: 'Test email',
    text: 'Just a test!',
});
