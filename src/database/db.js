const sqlite3 = require("sqlite3");
sqlite3.verbose();

const db = new sqlite3.Database("./src/database/database.db");


db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            imgurl TEXT,
		    address TEXT,
		    number TEXT,
		    addresscomp TEXT,
		    state TEXT,
		    city TEXT,
		    items TEXT
        )
    `)
        
})

module.exports = db;