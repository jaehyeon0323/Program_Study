using Microsoft.EntityFrameworkCore;
using TodoList.Data;
using TodoList.Dtos;

namespace TodoList.Services
{
    public class TodoListService
    {
        private readonly DataContext _context;

        public TodoListService(DataContext context)
        {
            _context = context;
        }
        public async Task<List<TodoListDto>> GetAllAsync()
        {
            return await _context.TodoLists
                .Select(todo => new TodoListDto(
                    todo.id,
                    todo.content,
                    todo.isDone,
                    todo.createdDate
                ))
                .ToListAsync();
        }

        public async Task<TodoListDto> CreateAsync(TodoListDto dto)
        {
            var entity = new TodoList
            {
                content = dto.Content,
                isDone = dto.IsDone,
                createdDate = DateTime.Now
            };

            _context.TodoLists.Add(entity);
            await _context.SaveChangesAsync();

            return new TodoListDto(
                entity.id,
                entity.content,
                entity.isDone,
                entity.createdDate
            );
        }

        public async Task<TodoListDto?> UpdateAsync(long id, TodoListDto dto)
        {
            var todo = await _context.TodoLists.FindAsync(id);
            if (todo == null) return null;

            todo.content = dto.Content;
            todo.isDone = dto.IsDone;

            await _context.SaveChangesAsync();

            return new TodoListDto(
                todo.id,
                todo.content,
                todo.isDone,
                todo.createdDate
            );
        }

        public async Task<bool> DeleteAsync(long id)
        {
            var todo = await _context.TodoLists.FindAsync(id);
            if (todo == null) return false;

            _context.TodoLists.Remove(todo);
            await _context.SaveChangesAsync();
            return true;
        }





    }
}
