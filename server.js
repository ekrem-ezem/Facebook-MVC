const express = require("express");
const app = express();
const router = require("./config/router");
const port = 8000




app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

//require mongoose
require("./config/db");

//require router
app.use(router);

app.listen(port,()=>console.info(`app listten on port:${port}`));
