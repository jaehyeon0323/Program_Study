namespace TodoList
{
    public class TodoList
    {
        public long id {  get; set; }
        public Boolean isDone { get; set; }
        public string content { get; set; } = string.Empty;
        public DateTime createdDate { get; set; } = DateTime.Now;

    }
}
