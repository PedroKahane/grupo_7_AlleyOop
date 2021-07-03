const express = require('express');
const app = express();
const path = require('path');


// App server
app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"),() => console.log("server on http://localhost:" + app.get("port")));


// App Access public
app.use(express.static(path.resolve(__dirname,"../public")));

// App settings

app.use(require('./routes/main'))


