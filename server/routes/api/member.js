const express = require('express');
const mogodb = require('mongodb').MongoClient;
const router = express.Router();
var ObjectId = require('mongodb').ObjectID;
// Url ของ Mogodb Cloud ฉบับใหม่ล่าสุด 2020
const uri = "mongodb+srv://doocode:K123456789@cluster0-xlmw3.mongodb.net/doocode?retryWrites=true&w=majority";


// Get Posts
    router.get('/',async(req,res)=>{
        const member = await loadPostsCollection();
        // find คือคำสั่งการแสดงผล get http://localhost:6020/api/member
    res.send(await member.find({}).toArray());
    });
// Add Post
    // InsertOne การเพิ่มค่าข้อมูลเข้าไป req.body.ตัวแปร post คือการสร้างข้อมูลใหม่ http://localhost:6020/api/member
    // โดยให้ทำการ Setting Postman Headers Key Content-Type value application/json ส่วนของ Body ปรับ raw แล้วค่อยทำการ Send Post

    router.post('/',async(req,res)=>{
        const member = await loadPostsCollection();
        await member.insertOne({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username,
            password: req.body.password,
            createdAt: new Date()
        });
        res.status(201).send();
    });
// Delete Post
    router.delete('/:id',async(req,res)=>{
        const member = await loadPostsCollection();
        var id = ObjectId(req.params.id);
        await member.deleteOne({"_id":id});
        res.status(200).send();
    });
// Mogodb

// ฟังก์ชั่นประกาศ ใช้ loadPostsCollection สำหรับ Connect Mongodb nosql
async function loadPostsCollection(){
        const client = await mogodb.connect(uri, { useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true });
        return client.db('Users').collection('member');
}

module.exports = router;