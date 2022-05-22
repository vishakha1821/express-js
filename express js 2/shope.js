const express = require('express');

const router = express.Router(); // EXPORTING FOR MAIN ROUTER

router.get('/',(req, res, next)=>{
    res.send('<h1>Hello Express JS</h1>')

});

module.exports= router;
