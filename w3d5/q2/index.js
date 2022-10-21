const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/', (req, res) => {
    let html = `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <title>Q2 form</title>
            </head>
            <body>
                <p>
                    <form action="/result" method="post">
                        <label for="name">Name</label>
                        <input id="name" name="name" type="text">
                        <label for="age">Age</label>
                        <input id="age" name="age" type="number">
                        <input type="submit" value="Submit Query">
                    </form>
                </p>
            </body>
        </html>
    `;

    res.send(html);
});

app.post('/result', urlencodedParser, (req, res) => {
    res.send(`Welcome ${req.body.name}. Age: ${req.body.age}`);
});

app.listen(3000);