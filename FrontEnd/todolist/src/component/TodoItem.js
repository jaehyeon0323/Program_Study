import './TodoItem.css';

export const TodoItem = () =>{
  return (
    <div className = "TodoItem">
      <div className = "heckbox_col">
        <input type = "checkbox"/>
      </div>
      <div className = "title_col">할 일</div>
      <div className = "date_col">{new Date().toLocaleString()}</div>
      <div className = "btn_col">
        <button>삭제</button>
      </div>
    </div>
  );
}