//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log("Unable to connect to MongoDB Server",err);
    }
    console.log("Successfully connected to MongoDB Server");

    // db.collection('Todos').insertOne({
    //     text : 'Something to do',
    //     completed : false 
    // }, (err,result)=>{
    //     if(err){
    //         return  console.log("Unable to add to list", err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection("Users").insertOne({
    //     name : 'Siddharth',
    //     age : 21,
    //     location : "Hyderabad"
    // },(err,result)=>{
    //     if(err){
    //         return console.log("Unable to add User Record please try again!", err);
    //     }
    // console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
    // }); 

    db.close();
});