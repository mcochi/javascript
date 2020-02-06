const router = app => {
	app.get('/',(request,response) => {
		response.send({
			message: 'Te quiero un montón pequeñaja!!!'
		});
	});
	app.get('/users',(request,response) => {
		pool.query('SELECT * FROM Biotecnologia',(error,result) => {
			if(error) throw error;
			response.send(result);
		});
	app.get('/users/:id',(request,response) => {
			const id = request.params.id;
			pool.query('SELECT * FROM Biotecnologia WHERE id = ?', id, (error,result) => {
					if(error) throw error;
					response.send(result);
				});
		});
	});
}
/* Creaamos información falsa para hacer las pruebas
const users = [{
		id : 1,
		name: "Richard Hendricks",
		email: "richard@gmail.es",
	},
	{
		id: 2,
		name: "Marcos Cochi",
		email: "*@hotmail.com",
	},
];*/

// Load the MySQL pool connection
const pool = require('../data/config');


//Export the router
module.exports = router;
