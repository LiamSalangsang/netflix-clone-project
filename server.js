const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.static(__dirname));
const port = 3001;

var mysql = require('mysql');
let questions

require('dotenv').config();

var connect = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

  function hello(){
    console.log("will run immediately");
  }
  
  setImmediate(hello);
  
  
  // var insert_R = 'INSERT INTO details(name,description,rating) VALUES(?,?,?)';
  // //establishing connection
  // connect.getConnection(function(err, connection){
      
  //   //Inserting a record into details
  //    connection.query(insert_R,['Omniman','go villains',10.2], function(err,res){
  //     if(err) throw err;
  //     else {
  //         console.log('Details added successfully');
  //     }
  //   });
  
  // //releasing connection
  //  connection.release();
  
  // });	

  var read_R = 'SELECT * FROM FAQ';
//establishing connection
connect.getConnection(function(err, connection){
    
  //retrieving a record from details
   connection.query(read_R, function(err, data){
    if(err) throw err;
    else {
      console.log(JSON.stringify(data, null, 2));
      // movies = JSON.stringify(data,null)
      questions = data;

    }
  });

//releasing connection
 connection.release();

});

app.get('/api/questions', (req, res) => {
    res.json(questions);
  });
  
  app.get('/', (req, res) => {
      res.sendFile(__dirname+'/index.html');
    });
  
  app.get('/signin',(req,res)=>{
    //   res.send("The Sign In Page")
      let name = req.query.name;
      let email = req.query.email;
      let password = req.query.password;
  
      res.sendFile(__dirname + '/signin.html')
  
      console.log(name,email,password);
  })
  
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
  