using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace TodoList.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoListController : ControllerBase
    {

        [HttpGet]
        public async Task<ActionResult<List<TodoList>>> GetAllList()
        {
            var list = new List<TodoList>();
            return Ok(list);
        }
    }
}
