const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const list = ['I like motorcycles.', 'Coffee is good.', 'So are momos.']

app.get('/', (req, res) => {
    const html1 = `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <title>List application</title>
            </head>
            <body>
                <h1>My list of texts</h1>
                <ul>`;
    const html2 = `</ul>
                <p><a href="add">Add</a></p>
            </body>
        </html>
    `;
    let listHtml = '';
    for (let item of list) {
        listHtml += `<li>${item}</li>`
    }
    const html = html1 + listHtml + html2;

    res.send(html);
});

app.post('/add', urlencodedParser, (req, res) => {
    list.push(req.body.enterText);
    res.redirect(303, '/');
});

app.get('/add', (req, res) => {
    let html = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <title>List add</title>
        </head>
        <body>
            <form action="/add" method="post">
                <p>
                    <label for="enterText">Enter Text</label>
                    <input id="enterText" name="enterText" type="text">
                    <input type="submit" value="Submit">
                </p>
            </form>
        </body>
    </html>
    `;


    res.send(html);
});

app.listen(3000);