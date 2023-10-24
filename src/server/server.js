const express = require("express");
const app = express();
const PORT = process.env.port || 4000;
const db = require('./config/db.js')
const bodyParser = require('body-parser')

 app.use(bodyParser.json())
  

app.get("/list", (req, res) => {
    console.log('root!')
  
  })

  
app.get("/board", (req, res) => {
    console.log('root!')
    db.query("select * from person",(err,data)=>{
        if(!err){
            res.send(data)
        }else{
            console.log(err)
        }
    })

  
  })

app.listen(PORT, () => {
  console.log(`running on : http://localhost: ${PORT}/`);
});