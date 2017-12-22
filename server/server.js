var express = require('express');
var bodyParser = require('body-parser');

var {Todo} = require('./models/todos-models.js');
var {Users} = require('./models/users-models.js');

var {mongoose} = require('./db/mongoose.js');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  // var todo = new Todo({
  //   text : req.body.text
  // });
  var newTodo = new Todo({
    text : req.body.text
  });

  // todo.save().then((doc)=>{
  //   res.send(doc);
  // },(e)=>{
  //   res.status(400).send(e);
  // });

  newTodo.save().then((doc)=>{
    res.send(doc);
    console.log(doc);
    
  },(e)=>{
    res.status(400).send("Unable to complete the request",e);
  });
});

app.listen(3000,()=>{
  console.log("Server started at port 3000");
  
});