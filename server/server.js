const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://doocode:K123456789@cluster0-xlmw3.mongodb.net/doocode?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true });
// client.connect(err => {
//   console.log("Connect mogodb")
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


const app = express();


// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// ทำการเรียก routes/api/posts 
const member = require('./routes/api/member');
// ส่วน app.use ให้ทำการเข้าตำแหน่งของ GET คือ localhost:500/api/posts
app.use('/api/member',member);

const port = process.env.POST || 6020;

app.listen(port,()=> console.log(`เซิฟเวอร์ Port ของคุณคือ ${port}`));