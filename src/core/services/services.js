// const https = require('https');
// const fetch = require('node-fetch');
//
// // Assuming you have the CA certificate in a file named 'ca-cert.pem'
// const fs = require('fs');
// const caCert = fs.readFileSync('path/to/ca-cert.pem');
//
// const agent = new https.Agent({
//     ca: caCert,
// });
//
// // Request options
// const options = {
//     method: 'POST',
//     headers: myHeaders,
//     agent: agent, // Use the custom agent here to send the CA certificate
//     redirect: 'follow',
// };
//
// const url = `https://78.187.121.71:8000/oauth/token?grant_type=password&username=${username.value}&password=${password.value}&tenant_id=d391351c-33b2-416a-92e1-748e2c4e7102`;
//
// fetch(url, options)
//     .then(response => response.text())
//     .then(async result => {
//         // Your success handling code here
//     })
//     .catch(error => {
//         // Your error handling code here
//     });