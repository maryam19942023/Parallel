using Microsoft.EntityFrameworkCore;
using Parallel.Infrastructure.Persistence;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();
builder.Services.AddHealthChecks();

var connectionString = builder.Configuration.GetConnectionString("Parallel")
    ?? "Host=localhost;Port=5432;Database=parallel;Username=parallel;Password=parallel_dev";

builder.Services.AddDbContext<ParallelDbContext>(options =>
    options.UseNpgsql(connectionString));

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.MapHealthChecks("/health");

app.MapGet("/api/v1/world", () => Results.Ok(new
{
    name = "Vesper",
    year = 2089,
    status = "Foundation",
    message = "The city is waiting."
}))
.WithName("GetWorldStatus")
.WithOpenApi();

app.Run();
