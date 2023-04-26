const twilio = require(`twilio`);

const ACCOUNT_SID = `AC1bf8d87815d994581e6965094a15a0fe`;
const AUTH_TOKEN = `91b678febc2b0cb12f5850470e0e29ca`;
const PHONE_NUMBER_WHATSAPP = `whatsapp:+14155238886`;

const client = twilio(ACCOUNT_SID, AUTH_TOKEN);

const sendWhatsApp = async (body, from, to) => {
    try {
        const message = await client.messages.create({
            body: body,
            from: from,
            to: to
            //`whatsapp:+59894057052`
        })
        console.log(message);

    } catch (e) {
        console.error(e.message);
    }

}

module.exports = sendWhatsApp;