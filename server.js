const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

const app = express();

app.use(logger("dev"));

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology:true
});

// app.use(require("./routes/apiRoutes"));
app.use(require("./routes/frontendRoutes"));

app.listen(PORT, () => console.log('Now listening'));