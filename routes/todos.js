var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var User = require('../models/User.js');


router.get('/test', function (req, res) {
    res.json({
        "test": "success"
        
    });
})

var MongoClient = require('mongodb').MongoClient

var URL = 'mongodb://bizbuzz:123456@ds025399.mlab.com:25399/bizbuzz'

MongoClient.connect(URL, function(err, db) {
  if (err) return

  var collection = db.collection('user')
    collection.find({name: 'Jeff'}).toArray(function(err, docs) {
      console.log(docs[0])
      db.close()
    })
  })

router.get('/user-all', function (req, res, next) {
    User.find(function (err, data) {
        if (err) return next(err);
        res.json(data);
    });
});

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
