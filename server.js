const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

const publicDir = path.join(__dirname, 'dist'); 
const publicPath = express.static(path.join(__dirname, 'dist'));
const indexPath = path.join(__dirname, 'dist', 'index.html');


app.use(publicPath);

app.get('/', (req, res) => {
  res.sendFile(indexPath);
})

console.log("server.js - publicDir :", publicDir);
console.log("server.js - indexPath :", indexPath);

const port = process.env.PORT || 8080;
app.listen(port);

console.log(`Listening on port ${port}`);



