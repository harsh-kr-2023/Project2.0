using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Project2.Model
{
    public class RentalDetail
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid RentalDetailId { get; set; }

        [Required]
        public Guid CustomerId { get; set; }

        [Required]
        public Guid MovieId { get; set; }

        [Required]
        public DateTime RentalDate { get; set; }

        public DateTime? ReturnDate { get; set; }

        [Required]
        public decimal RentalPrice { get; set; }

        // Navigation properties to related tables
        public Customer Customer { get; set; }
        public Movie Movie { get; set; }
    }
}
