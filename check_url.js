
const https = require('https');

const url = "https://res.cloudinary.com/diaykldqz/video/upload/ac_none,q_auto,f_auto/final-aa-optimized_bsrtvj.mp4";

https.get(url, (res) => {
    console.log(`Status Code: ${res.statusCode}`);
    res.resume();
}).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
});
