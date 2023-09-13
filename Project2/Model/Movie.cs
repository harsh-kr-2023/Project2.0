using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Project2.Model
{
    public class Movie
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid MovieId { get; set; }

        [Required]
        public string Title { get; set; }

        public int? ReleaseYear { get; set; }

        public string Genre { get; set; }

        public string Rating { get; set; }

        [Required]
        public decimal RentalPrice { get; set; }

        public int TotalCopies { get; set; }

        // Navigation property to RentalDetails
        public ICollection<RentalDetail> RentalDetails { get; set; }

    }
}
