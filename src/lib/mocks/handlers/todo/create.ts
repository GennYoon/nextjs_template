import { HttpResponse, http } from "msw";
import { getLastId } from "@/lib/utils";
import { todos } from "@/lib/mocks/data";

export const create = http.post<{}, CreateTodoDto>(`${process.env.NEXT_PUBLIC_API_URL}/todo`, async ({ request }) => {
  const { title } = await request.json();
  const id = getLastId(todos);
  const newTodo = { id, userId: 1, title, completed: false };

  todos.set(id, newTodo);

  return HttpResponse.json(newTodo, { status: 201 });
});
