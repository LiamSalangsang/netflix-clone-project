const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.static(__dirname));
const port = 3001;

var mysql = require('mysql');
let questions

require('dotenv').config();

// var connect = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE
// });

  // function hello(){
  //   console.log("will run immediately");
  // }
  
  // setImmediate(hello);
  
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


//   var read_R = 'SELECT * FROM FAQ';
// //establishing connection
// connect.getConnection(function(err, connection){
    
//   //retrieving a record from details
//    connection.query(read_R, function(err, data){
//     if(err) throw err;
//     else {
//       // console.log(JSON.stringify(data, null, 2));
//       // movies = JSON.stringify(data,null)
//       questions = data;

//     }
//   });

// //releasing connection
//  connection.release();

// });

    questions = [
    {
      "id": 1,
      "question": "What is Netflix?",
      "answer": "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.<br></br>\
      You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
    },
    {
      "id": 2,
      "question": "How much does Netflix cost?",
      "answer": "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from THB 99 to THB 419 a month. No extra costs, no contracts."
    },
    {
      "id": 3,
      "question": "Where can I watch?",
      "answer": "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.<br></br>\
      You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
    },
    {
      "id": 4,
      "question": "How do I cancel?",
      "answer": "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },
    {
      "id": 5,
      "question": "What can I watch on Netflix?",
      "answer": "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    },
    {
      "id": 6,
      "question": "Is Netflix good for kids?",
      "answer": "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.<br></br>\
      Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
    }
  ]

app.get('/api/questions', (req, res) => {
    res.json(questions);
  });
  
  app.get('/', (req, res) => {
      res.sendFile(__dirname+'/index.html');
    });
  
  app.get('/signin',(req,res)=>{
    //   res.send("The Sign In Page")
      res.sendFile(__dirname + '/signin.html')
  
      // console.log(name,email,password);
  })
  
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
  