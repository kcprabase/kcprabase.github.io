const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));
const list = ['I like motorcycles.', 'Coffee is good.', 'So are momos.']


app.get('/', (req, res) => {
    res.render("index", {list});
});

app.get('/add', (req, res) => {
    res.render("add");
});

app.post('/add', urlencodedParser, (req, res) => {
    list.push(req.body.enterText);
    res.redirect(303, '/');
});

app.listen(3000);