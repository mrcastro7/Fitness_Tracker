const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var routes = require("./controller/fitness_controller.js");
var URI = process.env.MONGODB_URI || "mongodb://fitness-app:1C2a3s45@ds221115.mlab.com:23822/heroku_cpq91z8t";
// mongodb://heroku_cpq91z8t:2hvajco87oba9j23jbhntq0n63@ds123822.mlab.com:23822/heroku_cpq91z8t
// mongodb://fitness-app:1C2a3s45@ds221115.mlab.com:21115/heroku_rjgh246j
mongoose.connect(URI, {
    useCreateIndex: true,
    useNewUrlParser: true
});

app.use(routes);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});