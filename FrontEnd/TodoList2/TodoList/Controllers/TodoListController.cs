using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TodoList.Dtos;
using TodoList.Services;

namespace TodoList.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoListController : ControllerBase
    {
        private readonly TodoListService _TodoListService;

        public TodoListController(TodoListService TodoListService)
        {
            _TodoListService = TodoListService;
        }

        [HttpGet]
        public async Task<ActionResult<List<TodoListDto>>> GetAllTodoList()
        {
            var AllList = await _TodoListService.GetAllAsync();
            if (AllList == null)
            {
                return NotFound("찾지못함");
            }
            return Ok(AllList);
        }

        [HttpPost]
        public async Task<ActionResult<TodoListDto>> Create(TodoListDto dto)
        {
            var created = await _TodoListService.CreateAsync(dto);
            return CreatedAtAction(nameof(GetAllTodoList), new { }, created);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<TodoListDto>> Update(long id, TodoListDto dto)
        {
            var updated = await _TodoListService.UpdateAsync(id, dto);
            return updated == null ? NotFound() : Ok(updated);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(long id)
        {
            var result = await _TodoListService.DeleteAsync(id);
            return result ? NoContent() : NotFound();
        }

    }
}
