CREATE DATABASE vamazon_db;
USE vamazon_db;

CREATE TABLE Products 
(
	ItemID int NOT NULL AUTO_INCREMENT, 
	ProductName varchar(255), 
	DepartmentName varchar(255), 
	Price int, StockQuantity int, 
	PRIMARY KEY (ItemID)
);

INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('Toothpaste', 'Health Care', 1.89, 100);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('Lucky Charms Cereal', 'Groceries', 4.20, 150);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('Shampoo', 'Health Care', 4.40, 83);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('Yogert', 'Groceries', 3.00, 20);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('Eye Makeup', 'Health Care', 1.00, 59);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('Lobster', 'Seafood', 26.00, 30);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('Bread', 'Groceries', 3.79, 18);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('Tuna Fish', 'Seafood', 2.89, 88);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('MooseTracks Ice Cream', 'Groceries', 3.79, 72);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('Shrimp', 'Seafood', 22.00, 11);

CREATE TABLE Departments (DepartmentID int, DepartmentName varchar(255), OverHeadCosts int, TotalSales int);

INSERT INTO Departments (DepartmentID, DepartmentName, OverHeadCosts, TotalSales) VALUES ('0001', 'Health Care', 3, 243);
INSERT INTO Departments (DepartmentID, DepartmentName, OverHeadCosts, TotalSales) VALUES ('0002', 'Seafood', 29, 994);
INSERT INTO Departments (DepartmentID, DepartmentName, OverHeadCosts, TotalSales) VALUES ('0003', 'Groceries', 55, 1011);

SELECT * FROM Products INNER JOIN Departments ON Products.DepartmentName=Departments.DepartmentName;