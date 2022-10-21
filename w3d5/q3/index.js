const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const date = new Date();
const hour = date.getHours();
let cssfilename = (hour >= 6 || hour < 18 ? 'day' : 'night') + '.css';

app.use('/css', express.static(path.join(__dirname, '/css')));

app.get('/', (req, res) => {
    let html = `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <link href="/css/${cssfilename}" rel="stylesheet">
                <title>Q2 form</title>
            </head>
            <body>
                <form action="/result" method="post">
                    <p>
                        <label for="name">Name</label>
                        <input id="name" name="name" type="text">
                        <label for="age">Age</label>
                        <input id="age" name="age" type="number">
                        <input type="submit" value="Submit Query">
                    </p>
                </form>
            </body>
        </html>
    `;

    res.send(html);
});

app.post('/result', urlencodedParser, (req, res) => {
    res.send(`Welcome ${req.body.name}. Age: ${req.body.age}`);
});

app.listen(3000);