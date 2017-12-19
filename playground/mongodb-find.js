const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log("Unable to connect to MongoDB Server",err);
    }
    console.log("Successfully connected to MongoDB Server");
    
    // db.collection("Todos").find({
    //     _id: new ObjectID("5a37ebaf5aa57e2d3b2313ea")})
    //     .toArray().then((docs)=>{
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs,undefined,2));
    // }, (err)=>{
    //     return console.log("Unable to fetch the documents!",err);
    // });

    // db.collection("Todos").find()
    //     .count().then((count)=>{
    //     console.log(`Todos Count: ${count}`);
    //     //console.log(JSON.stringify(count,undefined,2));
    // }, (err)=>{
    //     return console.log("Unable to fetch the documents!",err);
    // });
    
    //     db.collection("Users").find({
    //         name : 'Siddharth'
    //     })
    //     .count().then((count)=>{
    //     console.log(`Todos Count: ${count}`);
    //     //console.log(JSON.stringify(count,undefined,2));
    // }, (err)=>{
    //     return console.log("Unable to fetch the documents!",err);
    // });    


    db.close();
});