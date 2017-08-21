const connection = require('./connection.js')

var orm = {
  // Use this to insert a new burger. This will pull data from the text area and give it a false value of (devoured)
  selectAll(cb) {
    let queryString = "SELECT * FROM burgers"
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result)
    }) 
  },

  insertOne() {

  },
  updateOne() {

  }
}

module.exports = orm;