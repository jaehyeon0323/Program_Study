namespace TodoList.Dto
{
    public record TodoListDto(
        long Id,
        bool isDone,
        string content,
        DateTime createdDate
    );

}
