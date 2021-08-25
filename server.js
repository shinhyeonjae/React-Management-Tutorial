const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.port || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/hello', (req,res) => {
    res.send({message : 'Hello Express'});
});

app.get('/api/customers', (req,res) => {
    res.send([
        {
          'id' : 1,
          'image' : 'https://placeimg.com/50/50/1',
          'name' : '홍길동',
          'birthday' : '930817',
          'gender' : '남자',
          'job' : '직장인'
        },
        {
          'id' : 2,
          'image' : 'https://placeimg.com/50/50/2',
          'name' : '길동',
          'birthday' : '930817',
          'gender' : '남자',
          'job' : '직장인'
        },
        {
          'id' : 3,
          'image' : 'https://placeimg.com/50/50/any',
          'name' : '홍길',
          'birthday' : '93081',
          'gender' : '남',
          'job' : '직장인'
        }
      ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`))