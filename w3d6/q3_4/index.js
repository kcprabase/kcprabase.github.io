const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

const products = [
    {
        id: 1,
        name: 'Cookie',
        price: 2.00
    },
    {
        id: 2,
        name: 'Brownie',
        price: 11.00
    },
    {
        id: 3,
        name: 'Pastry',
        price: 13.00
    },
    {
        id: 4,
        name: 'Icecream Sandwich',
        price: 16.00
    },
    {
        id: 5,
        name: 'Eclair',
        price: 9.00
    },
    {
        id: 6,
        name: 'Donut',
        price: 2.00
    },
    {
        id: 7,
        name: 'Bagel',
        price: 1.00
    },
    {
        id: 8,
        name: 'Mud cake',
        price: 6.00
    },
    {
        id: 9,
        name: 'Choco lava',
        price: 9.00
    },
    {
        id: 10,
        name: 'Ganache',
        price: 25.00
    },];

const shoppingCart = {};


app.get('/', (req, res) => {
    res.render("shop", { products });
});

app.get('/product', (req, res) => {
    const product = products.find(p => p.id == req.query.p)
    res.render("product", { product });
});

app.get('/cart', (req, res) => {
    res.render("shoppingCart", { cart: shoppingCart });
});

app.post('/addToCart', urlencodedParser, (req, res) => {
    console.log(req.body);
    updateShoppingCart(req.body);
    res.redirect(303, '/cart');
});


// app.get('/', (req, res) => {
//     const date = new Date();
//     res.render("index", {
//         time: date.toTimeString(),
//         cssfilename: (date.getHours() >= 6 || date.getHours() < 18 ? 'day' : 'night') + '.css'
//     });
// });

function updateShoppingCart(item) {
    if (shoppingCart[item.name]) {
        shoppingCart[item.name].price += parseInt(item.price);
        shoppingCart[item.name].quantity += 1;
    } else {
        shoppingCart[item.name] = {
            name: item.name,
            price: parseInt(item.price),
            quantity: 1
        };
    }
}

app.listen(3000);