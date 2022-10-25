const express = require('express');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
app.use(session({
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 24 * 60 * 60 * 1000 },
    secret: 'salty'
}));
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));


app.get('/', (req, res) => {

    res.render("index", { list: req.session.list ? req.session.list : [] });
});

app.get('/add', (req, res) => {
    res.render("add");
});

app.post('/add', urlencodedParser, (req, res) => {
    if (!req.session.list) req.session.list = [];
    req.session.list.push(req.body.enterText);
    res.redirect(303, '/');
});

app.listen(3000);