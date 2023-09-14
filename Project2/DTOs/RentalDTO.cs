namespace Project2.DTOs
{
    public class RentalDTO
    {
        public Guid MovieId { get; set; }
        public Guid CustomerId { get; set; }
        public DateTime RentalDate { get; set; }
        public DateTime? ReturnDate { get; set; }
        public decimal RentalPrice { get; set; }
    }
}