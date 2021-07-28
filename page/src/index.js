const express = require('express');
const app = express();
const path = require('path');
const method = require('method-override');


// App server
app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"),() => console.log("server on http://localhost:" + app.get("port")));


// App Access public
app.use(express.static(path.resolve(__dirname,"../public")));


/* View Engine */
app.set("view engine", "ejs");
app.set("views",path.resolve(__dirname, "./views"));


/* Data Configuration */
app.use(express.urlencoded({extended:true})); // Not fund req.body
app.use(method("_method")); // ?_method=PUT o ?_method=DELETE


// Rutas
app.use(require('./routes/main'));
app.use(require('./routes/product'));


