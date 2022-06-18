var express = require('express');
var router = express.Router();
require('isomorphic-fetch');
/* GET home page. */
router.post('/', function(req, res, next) {

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
           console.log(req.body.url);
        //    res.json({perica:"hola"})
     fetch(req.body.url, requestOptions)
        .then(response => response.text())
        .then(result =>  res.json(result))
        .catch(error =>  res.json(error));
    })
module.exports = router;
