namespace Parallel.Domain.Identities;

public enum IdentityType
{
    Public = 1,
    Underground = 2,
    Corporate = 3,
    Custom = 4
}

public sealed class Identity
{
    public Guid Id { get; private set; } = Guid.NewGuid();
    public Guid CharacterId { get; private set; }
    public string Alias { get; private set; } = string.Empty;
    public IdentityType Type { get; private set; }
    public DateTimeOffset CreatedAtUtc { get; private set; } = DateTimeOffset.UtcNow;

    private Identity() { }

    public Identity(Guid characterId, string alias, IdentityType type)
    {
        if (characterId == Guid.Empty)
            throw new ArgumentException("Character id is required.", nameof(characterId));
        if (string.IsNullOrWhiteSpace(alias))
            throw new ArgumentException("Alias is required.", nameof(alias));

        CharacterId = characterId;
        Alias = alias.Trim();
        Type = type;
    }
}
