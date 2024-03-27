require("dotenv").config();
const express = require("express"); // commonjs
const cors = require('cors');
const webRouters = require("./router/api");

const app = express(); //app express
const port = process.env.PORT || 8888; //port
const hostname = process.env.HOST_NAME;

app.use(cors());
//khai bao router
app.use("/", webRouters);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
