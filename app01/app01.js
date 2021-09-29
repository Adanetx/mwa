const express = require("express");
const app = express();
app.set("port", 5353);
app.get('/', (req, res) => {
    console.log("request received")
    res.send(' request received')
})
const server = app.listen(app.get("port"), function() {
    var port = server.address().port;
    console.log("listening to port " + port)
})