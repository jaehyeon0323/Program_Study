import axiosInstance from './axios';

export type TodoItemDto = {
  id: number;
  isDone: boolean;
  content: string;
  createdDate: string;
}

export const getTodoList = async (): Promise<TodoItemDto[]> => {
  const { data } = await axiosInstance.get('/TodoList');
  return data;
}

export type CreateTodoItemDto = {
  isDone: boolean;
  content: string;
  createdDate: string;
}

export const createTodoList = async (dto: CreateTodoItemDto): Promise<TodoItemDto> => {
  const response = await axiosInstance.post('/TodoList', dto);
  return response.data;
};

export type updateTodoItemDto= {
  id: number;
  isDone: boolean;
  content: string;
  createdDate: string;
}

export const updateTodoItem = async (id: number, dto: updateTodoItemDto): Promise<updateTodoItemDto> => {
  const response = await axiosInstance.put(`/TodoList/${id}`, dto);
  return response.data;
};

export const deleteTodoList = async (id: number): Promise<void> => {
  await axiosInstance.delete(`/TodoList/${id}`);
};