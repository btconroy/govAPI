const https = require('https');
const apiKey = process.env.CONGRESS_API_KEY;

// example given by congress.gov - https://api.congress.gov/v3/bill?api_key=<<mykey>>&format=json

exports.module = function membersPull(cb, member) {

    const url = `https://api.congress.gov/v3/member/${member}?api_key=${apiKey}=json`;

    https.get(url, (res) => {
        let data = {};
        if(res.ok) {
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
            cb(data)
            }).on('error', (err) => {
                console.log(`Error:${err}`)
            })
        } else {
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
            cb(data)
            }).on('error', (err) => {
                console.log(`Error:${err}`)
            })
        }
        
    });

} 