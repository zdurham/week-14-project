const mysql = require('mysql')

const connection = mysql.createConnection({
  host: "localhost",
  user: "codingbootcamp",
  database: "burgers_db"
})


connection.connect(function(err) {
  if (err) throw err;

  console.log("Your connection id is: " + connection.threadID)
})

module.exports = connection;