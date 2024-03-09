import { HttpResponse, http } from "msw";
import { todos } from "@/lib/mocks/data";

interface FindTodoParams {
  id: string;
}

export const findOneTodo = http.get<FindTodoParams>(`${process.env.NEXT_PUBLIC_API_URL}/todo/:id`, ({ params }) => {
  const id = parseInt(params.id);
  const todo = todos.get(id);
  if (!todo) return new HttpResponse(null, { status: 404 });

  return HttpResponse.json(todo, { status: 200 });
});
