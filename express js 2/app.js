const path = require('path');

const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();


const adminRoutes = require('/admin'); //IMPORTING ROUTER
const shopRoutes = require('.shop.js');//IMPORTING SHOP ROUTER

app.use(adminRoutes);
app.use(shopRoutes);

app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

const server = http.createServer(app);
server.listen(3000);
