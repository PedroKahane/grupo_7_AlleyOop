const express = require('express');
const app = express();
const path = require('path');

app.listen(process.env.PORT || 4000, function() {
    console.log("Servidor corriendo en puerto 4000");
});



app.use(express.static(path.resolve(__dirname,"../public")));


app.use(require('./routes/web'))


