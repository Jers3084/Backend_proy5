const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { dbConnection } = require("./config/database/mongodb");
const usuariosRouter = require("./routes/usuariosRouter");
const productosRouter = require("./routes/productRouter");
const pagoRoutes = require("./routes/pagoRoutes");
require("dotenv").config();

const app = express();

dbConnection();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/usuarios", usuariosRouter);
app.use("/api/productos", productosRouter);
app.use("/api/pagos", pagoRoutes);

app.listen(process.env.PORT, () => {
  console.log("corriendo servidor en Port.." + process.env.PORT);
});
