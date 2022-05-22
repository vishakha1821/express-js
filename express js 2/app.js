const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));



app.use('/add-product',(req, res, next)=>{
    console.log('Inside the middleware');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>');
    

});
app.use('/product', (req, res, next)=>{
    console.log(res.body);
    res.redirect('/');
})

app.use('/',(req, res, next)=>{
    console.log('Inside another middleware');
    res.send('<h1>Hello Express JS</h1>')

});

const server = http.createServer(app);
server.listen(3000);