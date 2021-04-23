const express = require('express')
const app = express()
const path = require('path')
const router = express.Router()
var port = 9001;
const server = app.listen(port);
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "db",
    user: "user",
    password: "test",
    database: "myDb"
  });
  
app.use(express.json({ limit: '10mb' }))
app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/public/audio'))



router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'))
})
router.get('./pubilc/index.html', function (req, res) {
  res.sendFile(path.join(__dirname + './pubilc/index.html'))
})
router.get('./pubilc/pacman.html', function (req, res) {
    res.sendFile(path.join(__dirname + './pubilc/pacman.html'))
  })

app.post('/api1122', (req, response) => {
  console.log(req.body)
  const data = req.body
  console.log(data)


  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO dashborad (Name,Score) VALUES ?";
    var values = [[data.name, data.s]]
    if (err) throw err;
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });

  response.json({
    status: 'success',
  })
})




// app.post('/api1122', function (request, response) {
//   var name = request.body.name;
//   var score = request.body.s;

//   console.log("name = ",name)
//   console.log("score = ",score)
  
// });


app.use('/', router)
// app.listen(process.env.port || port)
console.log('Running at Port ' + port)
