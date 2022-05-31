const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const Product = require('./controllers/error');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const { findById } = require('./models/product');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((res, req, next)=>{
  User.findById(1)
  .then(user => {
    req.user = user;
    next();
  })
  .catch(err =>{
    console.log(err);

  });
})

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongTo(User, {constraints: true, onDelete: 'CASCADE'});
User.hasMany(Product)

sequelize
  .sync()
  .then(result => {
    return User.findById(1)
    // console.log(result);
    
  }).then(user=>{
    if(!user){
     return User.create({name: 'Vishakha', email: 'vishakhak1821@gmail.com'});
    }
    return user;
  })
  .then(user =>{
    //console.log(user);
  })
  .catch(err => {
    console.log(err);
    app.listen(3000);
  });
