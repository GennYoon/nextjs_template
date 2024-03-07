import { Todo } from "@/types/todo";
import { instanceAxios } from "./instance";

export async function fetchTodosApi() {
  try {
    const { data } = await instanceAxios.get<Todo[]>("/todos");
    return data;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    return [];
  }
}

export async function addTodoApi(todo: { title: string }) {
  try {
    const { data } = await instanceAxios.post<Todo>("/todo", todo);
    return data;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
}

export async function updateTodoApi(data: { id: string; title?: string; completed?: boolean }) {
  const { id, ...todo } = data;
  try {
    const { data } = await instanceAxios.patch<Todo>(`/todo/${id}`, todo);
    return data;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
}

export async function deleteTodoApi(id: string) {
  try {
    const { data } = await instanceAxios.delete(`/todo/${id}`);
    return data;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
}
