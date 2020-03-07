const fs = require("fs");
const uuidv4 = require("uuid/v4");



module.exports = app => {

    app.get("/api/notes", function(req, res){
        fs.readFile("db/db.json",(err, data) =>{
            res.send(JSON.parse(data));
        })
    })

    app.post("/api/notes", function(req, res){
        fs.readFile("db/db.json",(err, data) =>{
            let currentData = req.body;
            let parsedDoc = JSON.parse(data);
            currentData.id = uuidv4();
            parsedDoc.push(currentData);
            fs.writeFile("db/db.json", JSON.stringify(parsedDoc, null, 2), err => {
                if(err) throw err;
                res.send(req.body)
            })
        })
    })
    app.delete("/api/notes/:id", function(req, res){
        fs.readFile("db/db.json", (err, data) =>{
            let parsedDoc = JSON.parse(data);
            let finalParsedDoc = parsedDoc.filter(item => item.id != req.params.id);
            fs.writeFile("db/db.json", JSON.stringify(finalParsedDoc, null, 2), err => {
                if(err) throw err;
                res.send(req.body)
            })
        })
    })
}