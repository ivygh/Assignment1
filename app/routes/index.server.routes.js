var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});
router.post('/contact', function(req, res, next) {
  console.log("first name: " + req.body.fname);
  console.log("last name: " + req.body.lname);
  console.log("phone: " + req.body.phone);
  console.log("email: " + req.body.email);
  console.log("comments: " + req.body.comments);
  res.redirect('/home');
});
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

module.exports = router;
