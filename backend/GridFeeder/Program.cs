using GridFeeder;
using Sieve.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddScoped<ISieveProcessor, ApplicationSieveProcessor>();

var app = builder.Build();


// Configure the HTTP request pipeline.

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.UseCors(bldr =>
{
    bldr.AllowAnyOrigin();
    bldr.AllowAnyHeader();
    bldr.AllowAnyMethod();
});

app.Run();
