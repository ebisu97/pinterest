const express = require('express');
const app = express();

app.use(express.json());

app.use(express.static("."));
const cors = require("cors");
app.use(cors())
//domain
app.listen(8080,() => {
    console.log("8080 connected")
})


const rootRoute = require('./routes/index');

app.use("/api",rootRoute);
