using Microsoft.EntityFrameworkCore;
using Project2.Model;
using System.Collections.Generic;
using System.Reflection.Emit;

namespace Project2.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Customer> Customers { get; set; }
        public DbSet<Movie> Movies { get; set; }
        public DbSet<RentalDetail> RentalDetails { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configure Customer entity
            modelBuilder.Entity<Customer>(entity =>
            {
                entity.ToTable("Customers");

                entity.HasKey(e => e.CustomerId);

                entity.Property(e => e.CustomerId)
                    .HasColumnName("CustomerId")
                    .HasDefaultValueSql("NEWID()"); // Generate new GUIDs

                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .IsRequired()
                    .IsUnicode(false)
                    .HasColumnName("Name");

                entity.Property(e => e.Email)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("Email");

                entity.Property(e => e.Phone)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("Phone");

                entity.Property(e => e.Address)
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("Address");
            });

            // Configure Movie entity
            modelBuilder.Entity<Movie>(entity =>
            {
                entity.ToTable("Movies");

                entity.HasKey(e => e.MovieId);

                entity.Property(e => e.MovieId)
                    .HasColumnName("MovieId")
                    .HasDefaultValueSql("NEWID()"); // Generate new GUIDs

                entity.Property(e => e.Title)
                    .HasMaxLength(100)
                    .IsRequired()
                    .IsUnicode(false)
                    .HasColumnName("Title");

                entity.Property(e => e.ReleaseYear)
                    .HasColumnName("ReleaseYear");

                entity.Property(e => e.Genre)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Genre");

                entity.Property(e => e.Rating)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("Rating");

                entity.Property(e => e.RentalPrice)
                    .HasColumnType("decimal(5, 2)")
                    .HasColumnName("RentalPrice");

                entity.Property(e => e.TotalCopies)
                    .HasColumnName("TotalCopies");
            });

            // Configure RentalDetail entity
            modelBuilder.Entity<RentalDetail>(entity =>
            {
                entity.ToTable("RentalDetails");

                entity.HasKey(e => e.RentalDetailId);

                entity.Property(e => e.RentalDetailId)
                    .HasColumnName("RentalDetailId")
                    .HasDefaultValueSql("NEWID()"); // Generate new GUIDs

                entity.Property(e => e.MovieId)
                    .HasColumnName("MovieId")
                    .IsRequired();

                entity.Property(e => e.CustomerId)
                    .HasColumnName("CustomerId")
                    .IsRequired();

                entity.Property(e => e.RentalDate)
                    .HasColumnType("datetime")
                    .HasColumnName("RentalDate")
                    .IsRequired();

                entity.Property(e => e.ReturnDate)
                    .HasColumnType("datetime")
                    .HasColumnName("ReturnDate");

                // Define foreign key relationships
                entity.HasOne(d => d.Movie)
                    .WithMany(p => p.RentalDetails)
                    .HasForeignKey(d => d.MovieId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_RentalDetails_Movies");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.RentalDetails)
                    .HasForeignKey(d => d.CustomerId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_RentalDetails_Customers");
            });

            base.OnModelCreating(modelBuilder);
        }
    }
}