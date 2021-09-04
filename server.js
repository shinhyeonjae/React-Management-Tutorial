const fs = require('fs'); //파일을 읽을수 있게 하는 함수
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.port || 5000;

const data = fs.readFileSync('./database.json');
const config = JSON.parse(data);
const mssql = require('mssql');


mssql.connect(config, function(err){
  if(err){
    console.log(err);
    console.log(config);
    return console.error('error발생');
  }
  console.log('mssql 연결 완료');
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/hello', (req,res) => {
    res.send({message : 'Hello Express'});
});

app.get('/api/customers', (req,res) => {
  var request = new mssql.Request();
  request.stream = true;
  request.query("select * from customer",
  (err,rows) => {
    if(err){
      return console.log('query error')
    }
  });
  var result = [];
    request.on('error', function(err){
        console.log(err); 
    })
    .on('row', (row) => {
        result.push(row)
    })
    .on
    ('done', () => { // 마지막에 실행되는 부분
        console.log('result :', result)
        res.send(result);
        //res.render('list.ejs',{'posts' : result})
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`))