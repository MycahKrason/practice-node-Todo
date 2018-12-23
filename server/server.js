//Library Imports
var express = require('express');
var bodyParser = require('body-parser');

//Local imports
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

//set up the application 
var app = express();

//configure middleware
app.use(bodyParser.json());

//set up routes
app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (err) => {
        res.status(400).send(err);
    });
});


app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = {app};






















////Create an instance of the model
//var newTodo = new Todo({
//    text: 'Cook dinner'
//});
//
//
////Update the DB
//newTodo.save().then((doc) => {
//    console.log('Saved todo', doc);
//}, (err) => {
//    console.log('Unable to save Todo');
//});
