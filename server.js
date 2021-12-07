const express = require('express')
const app = express()
const path = require('path'); 
require('dotenv').config()

/**
* Statics // rendre le dist en mode production 
* Va chercher les fichiers de rendus créés par vueJs 
*/

app.use(express.static( __dirname + "/myapp/dist")); 

// app.get('/', (req, res)=>{
//   const name =  process.env.NAME
//   // res.status(200).json({ "Server Node ok ! " :  name})
//   res.sendFile(__dirname + "/myapp/dist");
// })
// app.get('/test', (req, res)=>{
//   const name =  process.env.NAME
//   res.status(200).json({ "Server Node ok ! " :  name})
// })

app.listen(process.env.PORT || process.env.PORT, () => {
  console.log('server . js : App rendue sur le port :  ' + process.env.PORT)
});

