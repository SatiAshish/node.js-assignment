const http = require('http');
const url = require('url');

let currentYear = 2022;

let server = http.createServer( (req, res) => {
    const queryObject = url.parse(req.url,true).query;
    console.log(queryObject);

    if(queryObject.year > 0){
        let age = currentYear - queryObject.year;
        res.write(`Hello ${queryObject.name} you are ${age} year old.`);
        console.log(`Hello ${queryObject.name} you are ${age} year old.`);
    }
    res.end();
});

server.listen(7000, '127.0.0.1', () => {
    console.log("Server is running on port no. 7000");
});
