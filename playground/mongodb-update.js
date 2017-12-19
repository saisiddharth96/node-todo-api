//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log("Unable to connect to MongoDB Server",err);
    }
    console.log("Successfully connected to MongoDB Server");

    // db.collection("Users").findOneAndUpdate({name : "Arif"}, 
    // {$set :{name : "Siddharth"}}, {returnOriginal : false}).then((result)=>{
    //     console.log(JSON.stringify(result, undefined ,2));
    // });

    db.collection("Users").update({name : "Siddharth"},
    {$set : {name : "King in the north!"} , $inc : {age : +1}}, 
    {returnOriginal : false})
    .then((result)=>{
        console.log(JSON.stringify(result, undefined, 2));
    });

    db.close();
});