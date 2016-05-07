var mysql = require('mysql');
var prompt = require('prompt');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'q1w2e3r4',
  database: 'Vamazon'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
});

connection.query("SELECT * FROM Vamazon.Products, Vamazon.Departments", function(err, rows, fields) {
	if (err) throw err;
	console.log("\n");
	console.log("Welcome to Vamazon!");
	console.log("Please select 1 or 2");
	console.log("1) View Product Sales by Department");
	console.log("2) Create New Department");
	console.log("\n");
	prompt.get(['vamazonNav'], function (err, result, vamazonNav) {
		if (result.vamazonNav == "1"){
				console.log("Department Id | Department Name |  Overhead Costs | Total Sales");
			for(var i=0;i<rows.length;i++){
				console.log((+ rows[i].DepartmentID) + " | " + " " + rows[i].DepartmentName + " | $" + rows[i].OverHeadCosts + " | $" + rows[i].TotalSales);
			}
			connection.end();				    
		}else if (result.vamazonNav == "2"){
			prompt.get(['DepartmentName'], function (err, result, DepartmentName) {
				var ProductName = (result.ProductName);
				console.log(ProductName);
					connection.query("INSERT INTO Vamazon.Departments SET DepartmentName = ?", [result.DepartmentName], function (err, result) {
						if (err) throw err;
					});
			});    
		};

		for(var j=0;j<rows.length;j++){
		};
	});
});