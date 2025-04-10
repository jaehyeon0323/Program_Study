import './TodoItem.css';

export const TodoItem = ({id, content, isDone, createdDate, onUpdate, onDelete}) =>{
  const onChangeCheckbox = () =>{
    onUpdate(id);
  }

  const onClickDelete = () => {
    onDelete(id)
  }

  return (
    <div className = "TodoItem">
      <div className = "heckbox_col">
        <input checked = {isDone} type = "checkbox" onChange={onChangeCheckbox}/>
      </div>
      <div className = "title_col">{content}</div>
      <div className = "date_col">{new Date(createdDate).toLocaleString()}</div>
      <div className = "btn_col">
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  );
}