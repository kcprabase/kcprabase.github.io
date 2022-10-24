const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// const path = require('path');
const app = express();
app.use(cookieParser());
const urlencodedParser = bodyParser.urlencoded({ extended: false });
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'view'));

app.get('/', (req, res) => {
    console.log(req.cookies);
    let html = `
    <h1>Add Cookie</h1>
    <form action="/" method="post">
        <label for="key">Key</label>
        <input id="key" name="key">
        <label for="value">Value</label>
        <input id="value" name="value">
        <input type="submit" value="Add Cookie">
    </form>

    <table style="border:solid 1px black">
    <tr><th colspan="2">Cookie List</th></tr>
        <tr>
            <th>Name</th>
            <th>Value</th>
        </tr>        
       `;
    if (req.cookies)
        for (let cookie in req.cookies) {
            html += ` <tr><td>${cookie}</td>
            <td><i>${req.cookies[cookie]}</i></td></tr>`
        }
    `
    </table>
    `;
    res.send(html);
});

app.post('/', urlencodedParser, (req, res) => {
    if (req.body.key && req.body.value) {
        console.log(req.body);
        res.cookie(req.body.key, req.body.value);
    }
    res.redirect('/');
});
app.listen(3000);