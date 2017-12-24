const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todos-models.js');
const {users} = require('./../server/models/users-models.js');

var id = "5a3e0979a2b521df32cf85a9";
var id1 = "5a3e09bea2b521df32cf85cc";
var id2 = "5a3e09e1a2b521df32cf85e1";
//With this method we donot get back the removed docs
Todo.remove({}).then((result)=>{
    console.log(result);  
}); 

//findOneAndRemove removes the first occurence of the object and removes it, 
// it also returns the removed object.
//Here we can pass any argument and this can get executed

// Todo.findOneAndRemove(id1).then((result)=>{
//     console.log(result);
// });

//findByIdAndRemove removes object which matches the _id specified
// by the user and removes that object, it also returns the object removed

// Todo.findByIdAndRemove({_id : id}).then((result)=>{
//     console.log(result);
// });