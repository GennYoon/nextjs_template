import { Todo } from "@/types/todo";
import { instanceAxios } from "./instance";

export async function fetchTodos() {
  try {
    const { data } = await instanceAxios.get<Todo[]>("/todos");
    return data;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    return [];
  }
}

export async function addTodo(todo: { title: string }) {
  try {
    const { data } = await instanceAxios.post<Todo>("/todos", todo);
    return data;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
}
