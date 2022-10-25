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
app.use(express.json());
app.use('/js', express.static(path.join(__dirname, 'view', 'js')));

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
    res.render("shop", { products, cartItemCount: getCartItemCount(req) });
});

app.get('/product', (req, res) => {
    const product = products.find(p => p.id == req.query.p)
    res.render("product", { product, cartItemCount: getCartItemCount(req) });
});

app.get('/cart', (req, res) => {
    res.render("shoppingCart", { cart: req.session.cart, cartItemCount: getCartItemCount(req) });
});

app.post('/addToCart', (req, res) => {
    updateShoppingCart(req);
    res.json({ cartItemCount: getCartItemCount(req) });
    res.status(200);
    res.end();
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

function getCartItemCount(req) {
    let count = 0;
    for (let item in req.session.cart) {
        count += req.session.cart[item].quantity;
    }
    return count;
}

app.listen(3000);