namespace TodoList
{
    public class TodoList
    {
        public long Id { get; set; }
        public bool isDone { get; set; }
        public string content { get; set; }
        public DateTime createdDate { get; set; } = DateTime.Now;

    }
}
