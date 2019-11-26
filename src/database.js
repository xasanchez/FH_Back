const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'us-cdbr-iron-east-05.cleardb.net',
  user: 'be21fb80c6a2dc',
  password: '1831d24adb30bcd',
  database: 'heroku_dcb235d094c2b3e',
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.log("ENtro al error");
    console.error(err);
    return;
  } else {
    console.log('db is connected');
  }
});

module.exports = mysqlConnection;