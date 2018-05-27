var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();


app.use(bodyParser.json());

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
    }, (e) => {
        res.status(400).send(e);
    });
});

 // GET /todos/1234321
 app.get('/todos/:id', (req, res) => {
     var id = req.params.id;
     console.log(`ID: ${id}`);
     if (!ObjectID.isValid(id))
     {
         return res.status(404).send(); //console.log('Id is not valid');
     }
     //res.send(req.param);
    Todo.findById(id).then((todos)=> {
        if (!todos){
            return res.status(404).send();
        }
        res.send({todos});

    }, (e) => {
        res.status(400).send(e);
    });
 });

app.listen(3000, () => {
    console.log('Started on ort 3000');
});

module.exports = {app};