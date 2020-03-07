const fs = require("fs");

module.exports = app => {

    app.get("/api/notes", function(req, res){
        fs.readFile("db/db.json",(err, data) =>{
            res.send(JSON.parse(data));
        })
    })

    app.post("/api/notes", function(req, res){
        fs.readFile("db/db.json",(err, data) =>{
            let parsedDoc = JSON.parse(data);
            parsedDoc.push(req.body);
            fs.writeFile("db/db.json", JSON.stringify(parsedDoc, null, 2), err => {
                if(err) throw err;
                res.send(req.body)
            })
        })
    })
    app.delete("/api/notes/:id", function(req, res){
        
    })
}