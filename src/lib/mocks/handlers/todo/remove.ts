import { HttpResponse, http } from "msw";
import { todos } from "@/lib/mocks/data";

interface RemoveTodoParams {
  id: string;
}

export const removeTodo = http.delete<RemoveTodoParams>(
  `${process.env.NEXT_PUBLIC_API_URL}/todo/:id`,
  async ({ params }) => {
    const id = Number(params.id);

    const todo = todos.get(id);
    if (todo) {
      todos.delete(id);
      return HttpResponse.json(todo, { status: 200 });
    } else {
      return new HttpResponse(null, { status: 404 });
    }
  },
);
