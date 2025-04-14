export interface TodoItemProps {
  id: number;
  isDone: boolean;
  content: string;
  createdDate: number;
}

export interface TodoDispatches {
  onCreate: (content: string) => void;
  onUpdate: (id: number) => void;
  onDelete: (id: number) => void;
}

export type Action =
  | { type: 'CREATE'; newItem: TodoItemProps }
  | { type: 'UPDATE'; targetId: number }
  | { type: 'DELETE'; targetId: number }
  | { type: 'SET'; todoList: TodoItemProps[] }; // ✅ 추가
