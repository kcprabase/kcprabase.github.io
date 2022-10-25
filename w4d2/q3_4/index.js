const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(session({
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 24 * 60 * 60 * 1000 },
    secret: 'salty'
}));
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

// const shoppingCart = {};


app.get('/', (req, res) => {
    res.render("shop", { products });
});

app.get('/product', (req, res) => {
    const product = products.find(p => p.id == req.query.p)
    res.render("product", { product });
});

app.get('/cart', (req, res) => {
    res.render("shoppingCart", { cart: req.session.cart });
});

app.post('/addToCart', (req, res) => {
    updateShoppingCart(req);
    res.redirect(303, '/cart');
});

function updateShoppingCart(req) {
    let item = req.body;
    if (!req.session.cart) req.session.cart = {};
    if (req.session.cart[item.name]) {
        req.session.cart[item.name].price += parseInt(item.price);
        req.session.cart[item.name].quantity += 1;
    } else {
        req.session.cart[item.name] = {
            name: item.name,
            price: parseInt(item.price),
            quantity: 1
        };
    }
}

app.listen(3000);