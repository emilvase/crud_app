const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/products.js')
require('dotenv').config();
const app = express();  

const uri = process.env.MONGODB_URI;

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
    res.send('Hello!');
});

mongoose.connect(uri)
.then(() => {
    console.log('Connected to DB');  
    app.listen(3000, () => {
        console.log('Server ready')
    });
})
.catch(() => {
    console.log('Error!!!!!')
});