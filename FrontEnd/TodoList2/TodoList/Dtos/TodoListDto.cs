namespace TodoList.Dtos
{
   public record TodoListDto(
    long Id,
    string Content,
    bool IsDone,
    DateTime CreatedDate
);


}
