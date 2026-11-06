using Microsoft.EntityFrameworkCore;
using Parallel.Application.Abstractions;
using Parallel.Domain.Characters;
using Parallel.Domain.Identities;

namespace Parallel.Infrastructure.Persistence;

public sealed class ParallelDbContext(DbContextOptions<ParallelDbContext> options)
    : DbContext(options), IApplicationDbContext
{
    public DbSet<Character> Characters => Set<Character>();
    public DbSet<Identity> Identities => Set<Identity>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Character>(entity =>
        {
            entity.HasKey(x => x.Id);
            entity.Property(x => x.DisplayName).HasMaxLength(80).IsRequired();
        });

        modelBuilder.Entity<Identity>(entity =>
        {
            entity.HasKey(x => x.Id);
            entity.Property(x => x.Alias).HasMaxLength(40).IsRequired();
            entity.HasIndex(x => new { x.CharacterId, x.Alias }).IsUnique();
            entity.HasOne<Character>()
                .WithMany()
                .HasForeignKey(x => x.CharacterId)
                .OnDelete(DeleteBehavior.Cascade);
        });
    }
}
