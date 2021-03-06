var mysql = require('mysql');
var prompt = require('prompt');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : ' ',
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
	console.log("Please select 1, 2, 3 or 4");
	console.log("1) View Products for Sale");
	console.log("2) View Low Inventory");
	console.log("3) Add to Inventory");
	console.log("4) Add New Product");
	console.log("\n");
	prompt.get(['vamazonNav'], function (err, result, vamazonNav) {
		if (result.vamazonNav == "1"){
			for(var i=0;i<rows.length;i++){
				console.log(("ItemId: " + rows[i].ItemID) + " | " + " " + rows[i].ProductName + " | $" + rows[i].Price + " | " + rows[i].StockQuantity + " available" + " | " + rows[i].DepartmentName);
			}
			connection.end();				    
		}else if (result.vamazonNav == "2"){
			for(var i=0;i<rows.length;i++){
				if (rows[i].StockQuantity < 100) {
					console.log(("ItemId: " + rows[i].ItemID) + " | " + " " + rows[i].ProductName + " | $" + rows[i].Price + " | " + rows[i].StockQuantity + " available");
				}
			}
			connection.end();	    
		}else if (result.vamazonNav == "3"){
			prompt.get(['ItemID', 'StockQuantity'], function (err, result, ItemID) {
				var updatedQty = parseInt(result.StockQuantity) + parseInt(rows[result.ItemID - 1].StockQuantity);
				connection.query("UPDATE Vamazon.Products SET StockQuantity = ? Where ItemID = ?", [updatedQty, result.ItemID], function (err, result) {
						if (err) throw err;
					});
				connection.end();
			});
		}else if (result.vamazonNav == "4"){
			prompt.get(['ProductName', 'Price', 'StockQuantity'], function (err, result, ItemID) {
				var ProductName = (result.ProductName);
				console.log(ProductName);
					connection.query("INSERT INTO Vamazon.Products SET ProductName = ?, Price = ?, StockQuantity=?", [result.ProductName, result.Price, result.StockQuantity], function (err, result) {
						if (err) throw err;
					});
			});
		};
	});
});