const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));


app.get('/', (req, res) => {
    res.render('index');
});

app.post('/result', urlencodedParser, (req, res) => {
    res.render('result', {
        name: req.body.name,
        age: req.body.age
    });
    // res.send(`Welcome ${req.body.name}. Age: ${req.body.age}`);
});

app.listen(3000);