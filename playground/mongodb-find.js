//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to DB');
    }

    console.log('Connected to MongonDB');
    var db = client.db('TodoApp');

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // },(err) => {
    //     consol.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({ name: 'Jen'}).count().then((count) => {
        console.log(`Todos count: ${count}`);
    },(err) => {
        consol.log('Unable to fetch todos', err);
    });
    // db.close();
});