//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to DB');
    }

    console.log('Connected to MongonDB');
    var db = client.db('TodoApp');

    // deleteMany
    // db.collection('Todos').deleteMany({ text: 'Eat lunch'}).then((result) =>{
    //     console.log(result);
    // });
    // deleteOne
    // db.collection('Todos').deleteOne({ text: 'Something to do'}).then((result) =>{
    //     console.log(result);
    // });
    // findOneAndDelete
    db.collection('Todos').findOneAndDelete({ completed: false}).then((result) =>{
        console.log(result);
    });
    // db.close();
});