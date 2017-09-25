const express = require('express'),
    colors = require("colors"),
    bodyParser = require("body-parser"),
    logger = require("morgan"),
    routes = require("./controllers/reacting"),
    app = express(),
    port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({type: "application/vnd.api+json"}));
app.use(express.static("public"));

app.use("/", routes);
app.use((req, res) => res.status(404).send("Sorry can't find that!"));
app.listen(port, () => console.log(`==> 🌎  Listening on PORT ${port}. Visit http://localhost:${port}`.green));