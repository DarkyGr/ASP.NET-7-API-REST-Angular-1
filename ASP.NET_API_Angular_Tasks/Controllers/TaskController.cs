using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using Microsoft.EntityFrameworkCore;
using ASP.NET_API_Angular_Tasks.Models;

namespace ASP.NET_API_Angular_Tasks.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly DbTasksContext _dbTasksContext;

        public TaskController(DbTasksContext dbTasksContext)
        {
            _dbTasksContext = dbTasksContext;
        }

        // Methods to Get List Tasks
        [HttpGet]
        [Route("List")]
        public async Task<IActionResult> List()
        {
            var listTask = await _dbTasksContext.Tasks.ToListAsync();   // Get Asyc List of database
            return Ok(listTask);
        }

        // Methods to Save Task
        [HttpPost]
        [Route("Save")]
        public async Task<IActionResult> Save([FromBody] Models.Task request)
        {

            await _dbTasksContext.Tasks.AddAsync(request);      // Add Task of database
            await _dbTasksContext.SaveChangesAsync();           // Save changes
            return Ok(request);
        }

        // Methods to Delete Task
        [HttpDelete]
        [Route("Delete/{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            var deleteTask = await _dbTasksContext.Tasks.FindAsync(id);

            if (deleteTask == null)
            {
                return BadRequest("The task doesn't exist");
            }

            _dbTasksContext.Tasks.Remove(deleteTask);   // Remove Task of database
            await _dbTasksContext.SaveChangesAsync();   // Save changes of database
            return Ok();
        }
    }
}
