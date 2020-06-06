const express = require("express");
const server = express();

const db = require("./database/db.js");

const nunjucks = require("nunjucks");

nunjucks.configure("src/views", {
    express: server,
    noCache: true
})


server.use(express.static("public"));
server.use(express.urlencoded({ extended: true })); // permite fazer requisição ao body

server.get("/", (req, res) => {
    return res.render("index.html")
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {
    const query = `
        INSERT INTO places (
            name,
            imgurl,
            address,
            number,
            addresscomp,
            state,
            city,
            items
        ) VALUES(?,?,?,?,?,?,?,?);
    `

    const values = [
        req.body.name,
        req.body.imgurl,
        req.body.address,
        req.body.number,
        req.body.addresscomp,
        req.body.state,
        req.body.city,
        req.body.items
    ];

    function afterInsertData(err) {
        if(err) {
            console.log(err);
            return res.render("create-point.html", {error: true}) // fazer html para este erro!
        }
        
        console.log("Cadastro realizado com sucesso");
        console.log(this);
        return res.render("create-point.html", {saved: true})

    }

    db.run(query, values, afterInsertData);
})

server.get("/search", (req, res) => {

    const search = req.query.search;
    if(search == ""){
        return res.render("search-results.html", {total: 0});
    }

    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows) {
        if(err){
            console.log(err);
            return res.render("search-results.html", {total: 0});
        }

        const total = rows.length;

        return res.render("search-results.html", {places: rows, total: total});
    })
  
})




server.listen(3000)