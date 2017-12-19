const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log("Unable to connect to MongoDB Server",err);
    }
    console.log("Successfully connected to MongoDB Server");
   
    // db.collection("Todos").deleteOne({text : "Screw college"}).then((result)=>{
    //     console.log(`Successfully deleted`);
    //     console.log(result.result);
    // });

    // db.collection("Todos").findOneAndDelete({text : "Take Ghost on a walk!"}).then((result)=>{
    //     console.log(`Successfully deleted`);
    //     console.log(result.result);
    // });

    db.collection("Users").deleteMany({name : "Siddharth"});
 
    db.close();
}); 