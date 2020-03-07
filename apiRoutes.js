const fs = require("fs");

module.exports = app => {

    app.get("/api/notes", function(req, res){
        fs.readFile("db/db.json",(err, data) =>{
            res.send(JSON.parse(data));
        })
    })

    app.post("/api/notes", function(req, res){
        fs.appendFile("db.json", JSON.stringify(req.body, null, 2), err => {
            if(err) throw err;
            res.send(req.body)
        })
    })

}