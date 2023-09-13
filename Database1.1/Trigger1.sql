-- Create a trigger that sets RentalPrice in RentalDetails based on MovieId
CREATE TRIGGER [Trigger1]
ON RentalDetails
AFTER INSERT
AS
BEGIN
    UPDATE rd
    SET rd.RentalPrice = m.RentalPrice
    FROM RentalDetails rd
    INNER JOIN inserted i ON rd.RentalDetailId = i.RentalDetailId
    INNER JOIN Movies m ON i.MovieId = m.MovieId;
END;