const router = app => {
	app.get('/',(request,response) => {
		response.send({
			message: 'Te quiero un montón pequeñaja!!!'
		});
	});
	app.get('/ProyEu',(request,response) => {
		pool.query('SELECT Id, Deadline, title FROM ProyEuropeos WHERE STR_TO_DATE(Deadline,\'%Y/%m/%d\')> CURDATE() ORDER BY STR_TO_DATE(Deadline, \'%Y/%m/%d\');',(error,result) => {
			if(error) throw error;
			response.send(result);
		});
	});
	app.get('/Equip',(request,response) => {
		pool.query('SELECT INV, MARCA, MODEL, NSERIE, DESCRIPCION, dto FROM Equip;',(error,result) => {
			if(error) throw error;
			response.send(result);
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
/*
CREATE TABLE Equipamiento(INVENTARIO varchar(30) primary key, FECHA varchar(20), DESCRIPCIÓN varchar(200), MARCA varchar (50), MODELO varchar(50), NÚMERO SERIE varchar(50), EDIFICIO varchar(50), PLANTA varchar(10), LOCAL varchar(30), FAMILIA CONTABLE varchar(40), CÓDIGO CONTABLE varchar(50), IMPORTE INICIAL varchar(20), CÓDIGO DPTO varchar(20), DEPARTAMENTO varchar(50), ANTIGÜEDAD varchar(20));

CREATE TABLE Equip (INV varchar(30) primary key, DATE varchar(20), DESCRIPCION varchar(200), MARCA varchar(50), MODEL varchar(50), NSERIE varchar(50), EDIFICIO varchar(50), PLANTA varchar(10), LOCAL varchar(30), Fcontable varchar(40), codCont varchar(50), impini varchar(50), coddpto varchar(20), dto varchar(50), ant varchar(20));

TABLA EQUIP
LOAD DATA LOCAL INFILE "/home/pi/Desktop/listadoequipos.csv" INTO TABLE Equip FIELDS TERMINATED BY ';' ENCLOSED BY '\"' LINES TERMINATED BY '\n

SELECT INV, MARCA, MODEL, NSERIE, DESCRIPCION, dto FROM Equip LIMIT 10;
*/
// Load the MySQL pool connection
const pool = require('../data/config');


//Export the router
module.exports = router;
