using Microsoft.EntityFrameworkCore;
using Parallel.Domain.Characters;
using Parallel.Domain.Identities;

namespace Parallel.Application.Abstractions;

public interface IApplicationDbContext
{
    DbSet<Character> Characters { get; }
    DbSet<Identity> Identities { get; }
    Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
}
