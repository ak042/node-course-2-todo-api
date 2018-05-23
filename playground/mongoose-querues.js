const {mongoose} = require('./../server/db/mongose');
const {Todo} = require('./../server/models/todo');
const {ObjectID} = require('mongodb');
const {User} = require('./../server/models/user');

var id = '5b04e51b3fd77f0a0043bab1';

if (!ObjectID.isValid(id))
{
    console.log('Id is not valid');
}
// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log('Todos', todos);
// });


// Todo.findOne({
//     _id: id
// }).then((todo)=>{
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo)=>{
//     if(!todo) {
//         return console.log('Id not found');
//     }
//     console.log('TodoByID', todo);
// }).catch((e) => console.log(e));

User.findById('5b04e7eb852eeb7958fb86fc').then((user)=>{
    if (!user) {
        return console.log('Unable to find user');
    }

    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log('Usr not found');
})