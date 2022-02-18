CREATE DATABASE EmployeeService;

USE EmployeeService;

CREATE TABLE Employees
(
	Id int NOT NULL IDENTITY(1,1) PRIMARY KEY,
	Name nvarchar(50),
	Address nvarchar(255),
	Email varchar(50),
	PhoneNumber varchar(20),
	Gender nvarchar(10),
	--ImageUrl text,
	Role nvarchar(50),
	Dob datetime,
	CreatedAt datetime,
	UpdatedAt datetime
)

CREATE TABLE Users
(
	Id int NOT NULL IDENTITY(1,1) PRIMARY KEY,
	IdEmployee int, 
	Username varchar(50),
	Password text,
)



INSERT INTO Employees(Name, Address, Email, Phonenumber, Gender, Role, Dob, CreatedAt, UpdatedAt) 
VALUES 
('John22', 'Ha Noi', 'test1@gmail.com', '0343276423', 'Male', 'Admin', '10/01/1999', GETDATE(), GETDATE())


INSERT INTO Users(IdEmployee, Username, Password) 
VALUES 
('1', 'admin', '1'),
('2', 'user', '1')