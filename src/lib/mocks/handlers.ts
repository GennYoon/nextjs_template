import { Todo } from "@/types/todo";
import { http, HttpResponse } from "msw";

const getId = () => Math.max(...todos.keys()) + 1;

const todos = new Map<number, Todo>([
  [1, { id: 1, userId: 1, title: "Wave hello", completed: false }],
  [2, { id: 2, userId: 1, title: "Get Coffee", completed: false }],
  [3, { id: 3, userId: 1, title: "Go to Work", completed: false }],
  [4, { id: 4, userId: 1, title: "Write Code", completed: false }],
]);

export const handlers = [
  http.get("http://localhost:5000/todos", () => {
    return HttpResponse.json(Array.from(todos.values()), { status: 200 });
  }),
  http.post<{}, { title: string }>("http://localhost:5000/todo", async ({ request }) => {
    const { title } = await request.json();
    const id = getId();
    const newTodo = { id, userId: 1, title, completed: false };

    todos.set(id, newTodo);

    return HttpResponse.json(newTodo, { status: 201 });
  }),
  http.patch<{ id: string }, { title: string; completed: boolean }>(
    "http://localhost:5000/todo/:id",
    async ({ request, params }) => {
      const id = Number(params.id);
      const data = await request.json();

      const todo = todos.get(id);
      if (todo) {
        const modifiedTodo = Object.assign(todo, data);
        todos.set(id, modifiedTodo);
        return HttpResponse.json(modifiedTodo, { status: 200 });
      } else {
        return HttpResponse.json({ error: "Not Found" }, { status: 404 });
      }
    },
  ),
  http.delete<{ id: string }>("http://localhost:5000/todo/:id", async ({ params }) => {
    const id = Number(params.id);

    const todo = todos.get(id);
    if (todo) {
      todos.delete(id);
      return HttpResponse.json(todo, { status: 200 });
    } else {
      return HttpResponse.json({ error: "Not Found" }, { status: 404 });
    }
  }),
];
