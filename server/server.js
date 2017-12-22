var express = require('express');
var bodyParser = require('body-parser');

var {Todo} = require('./models/todos-models.js');
var {Users} = require('./models/users-models.js');

var {mongoose} = require('./db/mongoose.js');

var app = express();

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

app.listen(3000,()=>{
  console.log("Server started at port 3000");
  
});