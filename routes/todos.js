var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var user = require('../models/User.js');


router.get('/test', function (req, res) {
    res.json({
        "test": "success"
        
    });
})

router.get('/all', function(req, res, next) {
  user.find(function(err, docs) {
    if (err) return next(err);
    res.json(todos);
  })
})

/* GET /todos listing. */
router.get('/', function(req, res, next) {
  User.find(function (err, todos) {
    if (err) return next(err);
    res.json(todos);
  });
});

/* POST /todos */
router.post('/', function(req, res, next) {
  Todo.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /todos/id */
router.get('/:id', function(req, res, next) {
  Todo.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /todos/:id */
router.put('/:id', function(req, res, next) {
  Todo.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /todos/:id */
router.delete('/:id', function(req, res, next) {
  Todo.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
