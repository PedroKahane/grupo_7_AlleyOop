const express = require('express');
const app = express();

app.listen(3030, () => {
    return console.log("Server start", "http://localhost:4000")
})


app.use(express.static("../public"))

app.use(require("./routes/web"))


