using System.ComponentModel.DataAnnotations;

namespace Project2.DTOs
{
    public class MovieCreateDTO
    {
        [Required]
        public string Title { get; set; }

        public int? ReleaseYear { get; set; }

        public string Genre { get; set; }

        public string Rating { get; set; }

        [Required]
        public decimal RentalPrice { get; set; }

        [Required]
        public int TotalCopies { get; set; }
    }
}
