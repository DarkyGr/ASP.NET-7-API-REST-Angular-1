# ASP.NET 7 - API REST - Angular - Tasks

This applcation was made with:
- ASP.NET Core 7
- SQL Server 2019

Also, this API was published on free hosting.
- Somee (Create Database and WebSite)

Required packages:
- Microsoft.EntityFrameworkCore.SqlServer 7.0.1
- Microsoft.EntityFrameworkCore.Tools 7.0.1

Use the following command line to add our database context to our project:
- In Visual Studio, find the "Tools" tab > NuGet Package Manager > Package Manager Console.
- And paste in the console -> Scaffold-DbContext "Server=(local); DataBase=db_tasks; Trusted_Connection=True; TrustServerCertificate=True;" Microsoft.EntityFrameworkCore.SqlServer -OutPutDir Models