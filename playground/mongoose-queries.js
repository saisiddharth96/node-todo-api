const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todos-models.js');
const {users} = require('./../server/models/users-models.js');

var id =  "6a3a7a0957e1b44d20c39772";
var userID = "6a3a91789e9765577035466f";

if(!ObjectID.isValid(userID)){
    console.log("Invalid id");
}
// Todo.find({
//     _id : id
// }).then((todos)=>{
//     // if(!todo){
//     //     return console.log("No record found");
//     // }
//     console.log(todos);   
// });

// Todo.findOne({
//     _id : id
// }).then((todo)=>{
//     // if(!todo){
//     //     return console.log("No record found");
//     // }
//     console.log(todo );   
// });

// Todo.findById(id).then((todo)=>{
//     // if(!todo){
//     //     return console.log("No record found");
//     // }
//     console.log(todo);   
// }).catch((e)=>{
//     console.log(e);  
// });

users.find({
    _id : userID
}).then((todos)=>{
        // if(!todo){
        //     return console.log("No record found");
        // }
        console.log(todos);   
});

users.findOne({
        _id : userID
    }).then((todo)=>{
        if(!todo){
            return console.log("No record found");
        }
        console.log(todo );   
});

users.findById(userID).then((todo)=>{
        // if(!todo){
        //     return console.log("No record found");
        // }
        console.log(todo);   
    }).catch((e)=>{
        console.log(e);  
    });
