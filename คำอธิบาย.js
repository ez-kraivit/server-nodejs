// สำหรับผู้เริ่มต้น ติดตั้งตามนี้ ทำทั้ง Server และ Cilnet
// npm i express cors body-parser mongodb nodemon 

// ให้ไปเปลี่ยนตรง package.json
/* 
  "scripts": {
    "start": "node server/index.js",
    "dev": "nodemon server/index.js"
  },
*/

/*
GET สำหรับขอ request จาก server เช่น รายชื่อทั้งหมด หรือ รายชื่อเดี่ยว
PUT สำหรับ UPDATE ค่าโดยเราจะส่งมากับ payload
POST สำหรับ Create สำหรับการเพิ่มค่าใหม่
DELETE สำหรับลบค่า

ตัวอย่าง
GET /products : สำหรับแสดงรายการ Product ทั้งหมด
POST /products : ไว้สำหรับการเพิ่มข้อมูล Product ใหม่
GET /products/1 : สำหรับแสดงรายละเอียดของ Product จาก id = 1
PUT /products/1 : สำหรับไว้อัพเดทค่า Product ที่มี id = 1
DELETE /products/1 : สำหรับลบข้อมูลของ Product ที่มี id = 1
*/

/*
200 OK : จะเป็น response ปกติที่ไม่มีอะไรผิดพลาด
201 created : สำหรับ return กรณี create new data (ใช้กับ POST)
204 no content : สำหรับกรณี DELETE (ลบข้อมูลเรียบร้อยแล้ว) ก็จะ response empty กลับไป
400 Bad request : จะใช้กรณีที่ Server เรารับค่ามาไม่ตรงกับ API Design ไว้ เช่น ส่ง payload มาเกิน
401 Unauthorized : สำหรับกรณีที่เราไม่รู้ว่า client ที่ request มาเป็นใคร คือยืนยันตัวไม่ได้ เช่น ไม่มี token หรือ token ผิด
403 forbidden : สำหรับกรณีที่เรา authentication ผ่าน คือรู้ว่าใคร แต่ authorize ไม่ผ่าน คือ url นี้ไม่อนุญาตให้เข้าถึง เช่น เป็น user แต่ขอ request เข้าถึงหน้า admin ก็จะไม่อนุญาต เป็นต้น
404 not found อันนี้น่าจะปกติเหมือนเว็บทั่วไป คือกรณี request url ไม่มีในระบบ
5xx : ส่วนตระกูล 500, 503 จะเกิดจากปัญหาที่ฝั่ง Server ของเรา เช่นระบบล่ม code crash เป็นต้น
*/

// mogodb cloud หาก connect ไม่ติดแนะนำให้ทำการ ใส่ข้อมูล useUnifiedTopology: true
// ทำการพิมพ์ npm run dev or start

// กรณ๊มีปัญหา MongoServerSelectionError: ให้ทำการ Renetwork ใน Network Access Cluoding Mongodb Atlas
// กรณี mogodb ID: ลบไม่ได้เราไม่ต้องสงสัยให้ทำการ ประกาศ var ObjectId = require('mongodb').ObjectID; แล้วเรียกใช้งาน var id = ObjectId(req.params.id);