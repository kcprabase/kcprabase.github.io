const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const app = express();
app.use(cookieParser());
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
    // res.send(`Welcome ${req.body.name}. Age: ${req.body.age}`);
    if (req.body.name)
        res.cookie('name', req.body.name);
    if (res.body.age)
        req.cookie('age', req.body.age);
    res.redirect(303, `/output?name=${req.body.name}&age=${req.body.age}`);
});

app.get('/output', (req, res) => {
    let name = req.query.name;
    let age = req.query.age;
    if (!name) {
        name = "person";
    }
    if (!age) {
        age = "Age not provided.";
    }
    res.send(`Welcome ${name}. Age: ${age}`);
});

app.listen(3000);