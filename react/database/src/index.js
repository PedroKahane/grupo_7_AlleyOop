const express = require("express")
const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

const productRoutes = require("./router/products")
const ventasRoutes = require("./router/ventas")
const usersRoutes = require("./router/users")

app.use("/products", productRoutes)
app.use("/ventas", ventasRoutes)
app.use("/users", usersRoutes)


app.listen(3001, () => console.log("Servidor andando en el puerto 3001"))