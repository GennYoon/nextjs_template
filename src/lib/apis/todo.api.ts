import { instanceAxios } from "./instance";

export const findTodoApi = async () => {
  const { data } = await instanceAxios.get<Todo[]>("/todo");
  return data;
};

export const fundOneTodoApi = async (id: number) => {
  const { data } = await instanceAxios.get<Todo>(`/todo/${id}`);
  return data;
};

export const createTodoApi = async (body: { title: string }) => {
  const { data } = await instanceAxios.post<Todo>("/todo", body);
  return data;
};

export const updateTodoApi = async ({ id, ...body }: { id: string; title?: string; completed?: boolean }) => {
  const { data } = await instanceAxios.patch<Todo>(`/todo/${id}`, body);
  return data;
};

export const deleteTodoApi = async (id: number) => {
  const { data } = await instanceAxios.delete(`/todo/${id}`);
  return data;
};
