 const {SHA256} = require('crypto-js');
 const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

// bcrypt.genSalt(10, (err,salt)=>{
//   bcrypt.hash(password,salt,(err,hash)=>{
//     console.log(hash);    
//   });
// });

var hashedPassword = '$2a$10$e9m.tM9DEDwiD3nbkBAoleB82tV6u08pedzqaTDWTiTBrjjMgaH3q';

bcrypt.compare(password,hashedPassword,(err,res)=>{
  console.log(res);  
});

//   var data = {
//     id : 4
//  };

//  var token = jwt.sign(data,'123abc');
//  console.log(token);

//  var decoded = jwt.verify(token, '123abc');
//  console.log(` decoded ${JSON.stringify(decoded,undefined,2 )}`);
 
 
//  var message = "String to be cryptoed!";

//  var hash = SHA256(message).toString();

//  console.log(message);
//  console.log(hash);

//  var data = {
//     id : 4
//  };

//  var token = {
//      data ,
//      hash : SHA256(JSON.stringify(data) + 'somesecret').toString()
//  }; 


// //  token.data.id = 5;
// //  token.hash = SHA256(JSON.stringify(token.data.id) + 'somesecret').toString();

//  var resulthash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

//  if(resulthash === token.hash){
//       console.log('data was not changed');
//  }
//  else {
//      console.log('data was changed');     
//  }



