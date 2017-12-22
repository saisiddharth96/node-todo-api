const {ObjectID} = require('mongodb');
var express = require('express');
var bodyParser = require('body-parser');

var {Todo} = require('./models/todos-models.js');
var {Users} = require('./models/users-models.js');
var {mongoose} = require('./db/mongoose.js');

var app = express();
var port = process.env.PORT || 3000;
app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  var newTodo = new Todo({
    text : req.body.text
  }); 

  newTodo.save().then((doc)=>{
    res.send(doc);
    console.log(doc);
    
  },(e)=>{
    res.status(400).send("Unable to complete POST request",e);
  });
});

app.get('/todos', (req,res)=>{
  Todo.find().then((todos)=>{
    res.send({
      todos
    });
  },(e)=>{
    res.status(400).send("Unable to complete GET request!",e);
  })
});

app.get('/todos/:id',(req,res)=>{
var id = req.params.id;
if(!ObjectID.isValid(id)){
  return res.status(404).send("Unable to complete GET request!")
}
  
 Todo.findById(id).then((todo)=>{
   if(!todo){
     return res.status(404).send();
   }
   res.send({todo});
  console.log(JSON.stringify(todo,undefined,2));  
 }).catch((e)=>{
    res.status(400).send();
 });

});

app.listen(port,()=>{
  console.log(`Server started at port ${port}`);
  
});