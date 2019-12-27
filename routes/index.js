var express = require('express');
var router = express.Router();

const messages = []; 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Message Board", messages: messages });
});

/* GET message page */
router.get('/new', function (req, res, next) {
  res.render('form', { title: "Add a new message"});
})

/* POST message */ 
router.post('/new', function (req, res, next) {
  messages.push({
    user: req.body.name,
    text: req.body.text,
    added: new Date()
  });

  res.redirect('/');
})

module.exports = router;
