const btoa = require("btoa");
const crypto = require("crypto");

const host = "https://14ea20c61ec2.ngrok.io";

const getPaymanetLink = () => {

    function sha1(data) {
        return crypto.createHash("sha1").update(data).digest("base64");
    }

    const PUBLIC_KEY = 'sandbox_i56263690378';
    const PRIVATE_KEY = 'sandbox_RveouhmptJWxdb2tof3a5xyTrGRgATTBpfCF0udX';

    const JSON = `{ 
\"version\" : 3,
\"public_key\" : \"${PUBLIC_KEY}\", 
\"action\" : \"paydonate\", 
\"amount\" : 1, 
\"currency\" : \"USD\",
\"description\" : \"Please, set amount and pay\",
\"server_url\" : \"${host}/liqpay\",
\"result_url\" : \"${host}/project/1\",
\"order_id\" : \"6_${new Date().getTime()}\"
}`;

    const DATA = btoa(JSON);

    const SIGNATURE = sha1(`${PRIVATE_KEY}${DATA}${PRIVATE_KEY}`);

    console.log(`https://www.liqpay.ua/api/3/checkout?data=${DATA}&signature=${SIGNATURE}`);
    return `https://www.liqpay.ua/api/3/checkout?data=${DATA}&signature=${SIGNATURE}`;
};

module.exports = getPaymanetLink;