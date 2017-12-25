const _ = require('lodash');
const { ObjectID } = require("mongodb");
const express = require("express");
const bodyParser = require("body-parser");


var { mongoose } = require("./db/mongoose.js");
var { Todo } = require("./models/todos-models.js");
var {User} = require("./models/users-models.js");
var {authenticate} = require('./middleware/authneticate.js');

var app = express();
var port = process.env.PORT || 3000;
app.use(bodyParser.json());

app.post("/todos", (req, res) => {
  var newTodo = new Todo({
    text: req.body.text
  });

  newTodo.save().then(
    doc => {
      res.send(doc);
      console.log(doc);
    },
    e => {
      res.status(400).send("Unable to complete POST request", e);
    }
  );
});

app.get("/todos", (req, res) => {
  Todo.find().then(
    todos => {
      res.send({
        todos
      });
    },
    e => {
      res.status(400).send("Unable to complete GET request!", e);
    }
  );
});

app.get("/todos/:id", (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send("Unable to complete GET request!");
  }

  Todo.findById(id)
    .then(todo => {
      if (!todo) {
        return res.status(404).send();
      }
      res.send({ todo });
      console.log(JSON.stringify(todo, undefined, 2));
    })
    .catch(e => {
      res.status(400).send();
    });
});

app.delete('/todos/:id',(req,res)=>{
  var id = req.params.id;

  if(!ObjectID.isValid(id)){
    return res.status(404).send("Unable to DELETE request!")
  }

  Todo.findByIdAndRemove(id).then((todo)=>{
    if(!todo){
      return res.status(400).send();
    }
    res.send({todo});
    console.log(todo);
   }).catch((e)=>{
     console.log(`Couldnt Remove the item ${e}`);     
     res.status(400).send();
   });
});

app.patch('/todos/:id',(req,res)=>{
  var id = req.params.id;
  var body = _.pick(req.body, ['text','completed']);
  if(!ObjectID.isValid(id)){
    return res.status(404).send("Unable to UPDATE item!")
  }

  if(_.isBoolean(body.completed) && body.completed){
    body.completedAt = new Date().getTime();
    //body.completedAt = Math.round((new Date()).getTime() / 1000);
    
  }
  else{
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set : body}, {new : true})
  .then((result)=>{
    if(!result){
      return res.status(400).send();
    }
    res.send({result});
  }).catch((e)=>{
    console.log(`Couldnt update the item ${e}`);
    res.status(400).send();
  });
});

app.post('/users', (req, res) => {
  var body = _.pick(req.body, ['email', 'password']);
  var user = new User(body);

  user.save().then(() => {
    return user.generateAuthToken();
  }).then((token) => {
    res.header('x-auth', token).send(user);
  }).catch((e) => {
    res.status(400).send(e);
  })
});
    

app.get('/users/me',authenticate, (req,res)=>{
  res.send(req.user);
});

app.post('/users/login', (req,res)=>{
  var body = _.pick(req.body, ['email','password']);
  
  User.findByCredentials(body.email,body.password).then((user)=>{
    return user.generateAuthToken().then((token)=>{
      res.header('x-auth', token).send(user);
    });
  }).catch((e)=>{
    res.status(400).send();
  });
});

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
