CREATE TABLE Movies (
    MovieId UNIQUEIDENTIFIER DEFAULT NEWID() PRIMARY KEY,
    Title NVARCHAR(100) NOT NULL,
    ReleaseYear INT,
    Genre NVARCHAR(50),
    Rating NVARCHAR(10),
    RentalPrice DECIMAL(5, 2),
    TotalCopies INT
);