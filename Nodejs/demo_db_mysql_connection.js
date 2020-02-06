var mysql = require('mysql');

var con = mysql.createConnection ( {
    host:"10.8.0.1",
    port: '3306',
	user: "exampleuser",
	password: "pimylifeup",
	database: "exampledb"

});

con.connect(function(err) {
	if (err) throw err;
	con.query("SELECT * FROM Biotecnologia",function(err,rows,fields) {
		if (err){
			throw err;
		}
		console.log(rows[1]['Region'] + rows[1]['Year']);
	});
});