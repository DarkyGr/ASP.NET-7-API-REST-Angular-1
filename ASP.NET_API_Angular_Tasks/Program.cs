using Microsoft.EntityFrameworkCore;
using ASP.NET_API_Angular_Tasks.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add context of database
builder.Services.AddDbContext<DbTasksContext>(option => {
    option.UseSqlServer(builder.Configuration.GetConnectionString("SQLString"));
});

// Active Cors 1
builder.Services.AddCors(options => {
    options.AddPolicy("NewPolicy", app => {     // Active any method of our API
        app.AllowAnyOrigin()
        .AllowAnyHeader()
        .AllowAnyMethod();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseSwagger();
app.UseSwaggerUI();

// Active Cors 2
app.UseCors("NewPolicy");

app.UseAuthorization();

app.MapControllers();

app.Run();
