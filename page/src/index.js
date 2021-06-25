const express = require('express');
const app = express();
const path = require('path');

app.listen(4000,() => console.log("Server on http://localhost:4000"));



app.use(express.static(path.resolve(__dirname,"../public")));


app.use(require('./routes/web'))


