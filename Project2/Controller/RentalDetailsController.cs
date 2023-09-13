using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Project2.Data;
using Project2.DTOs;
using Project2.Model;

namespace Project2.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class RentalDetailsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public RentalDetailsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/RentalDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RentalDetail>>> GetRentalDetails()
        {
          if (_context.RentalDetails == null)
          {
              return NotFound();
          }
            return await _context.RentalDetails.ToListAsync();
        }

        // GET: api/RentalDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RentalDetail>> GetRentalDetail(Guid id)
        {
          if (_context.RentalDetails == null)
          {
              return NotFound();
          }
            var rentalDetail = await _context.RentalDetails.FindAsync(id);

            if (rentalDetail == null)
            {
                return NotFound();
            }

            return rentalDetail;
        }

        // PUT: api/RentalDetails/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRentalDetail(Guid id, RentalDetail rentalDetail)
        {
            if (id != rentalDetail.RentalDetailId)
            {
                return BadRequest();
            }

            _context.Entry(rentalDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RentalDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/RentalDetails
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<RentalDTO>> PostRental(RentalDTO rentalDTO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // Map the RentalDTO to your entity model (Rental)
            var rental = new RentalDetail
            {
                MovieId = rentalDTO.MovieId,
                CustomerId = rentalDTO.CustomerId,
                RentalDate = rentalDTO.RentalDate,
                ReturnDate = rentalDTO.ReturnDate,
                RentalPrice = rentalDTO.RentalPrice
            };

            // Add the rental to the database
            _context.RentalDetails.Add(rental);
            await _context.SaveChangesAsync();

            // Map the saved rental back to a DTO
            var savedRentalDTO = new RentalDTO
            {
                MovieId = rental.MovieId,
                CustomerId = rental.CustomerId,
                RentalDate = rental.RentalDate,
                ReturnDate = (DateTime)rental.ReturnDate,
                RentalPrice = rental.RentalPrice
            };

            // Return a CreatedAtAction result
            return CreatedAtAction("GetRental", new { id = rental.RentalDetailId }, savedRentalDTO);
        }


        // DELETE: api/RentalDetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRentalDetail(Guid id)
        {
            if (_context.RentalDetails == null)
            {
                return NotFound();
            }
            var rentalDetail = await _context.RentalDetails.FindAsync(id);
            if (rentalDetail == null)
            {
                return NotFound();
            }

            _context.RentalDetails.Remove(rentalDetail);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RentalDetailExists(Guid id)
        {
            return (_context.RentalDetails?.Any(e => e.RentalDetailId == id)).GetValueOrDefault();
        }
    }
}
