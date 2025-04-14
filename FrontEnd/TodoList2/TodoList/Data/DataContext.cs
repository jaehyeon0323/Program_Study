using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace TodoList.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) 
        { 
        }
        public DbSet<TodoList> TodoLists { get; set; }
    }
}
