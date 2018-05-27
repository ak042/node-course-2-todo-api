var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;


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
    //  console.log(`ID: ${id}`);
     if (!ObjectID.isValid(id))
     {
         return res.status(404).send(); //console.log('Id is not valid');
     }
     //res.send(req.param);
    Todo.findById(id).then((todo)=> {
        if (!todo){
            return res.status(404).send();
        }
        res.send({todo});

    }, (e) => {
        res.status(400).send(e);
    });
 });

app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});

module.exports = {app};