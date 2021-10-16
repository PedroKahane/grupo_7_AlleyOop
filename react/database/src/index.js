const express = require("express")
const app = express()
const path = require('path');
const cors = require('cors')

app.use(express.urlencoded({extended: false}))
app.use(express.json())

const productRoutes = require("./router/products")
const ventasRoutes = require("./router/ventas")
const usersRoutes = require("./router/users")

app.use(cors())
app.use(express.json())

app.use("/products", productRoutes)
app.use("/ventas", ventasRoutes)
app.use("/users", usersRoutes)


app.use(express.static(path.resolve(__dirname,"../public")));

app.listen(3001, () => console.log("Servidor andando en el puerto 3001"))