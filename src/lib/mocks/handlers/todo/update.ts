import { HttpResponse, http } from "msw";
import { todos } from "@/lib/mocks/data";

interface UpdateTodoParams {
  id: string;
}

export const update = http.patch<UpdateTodoParams, UpdateTodoDto>(
  `${process.env.NEXT_PUBLIC_API_URL}/todo/:id`,
  async ({ request, params }) => {
    const id = Number(params.id);
    const updateData = await request.json();

    const todo = todos.get(id);
    if (todo) {
      const modifiedTodo = Object.assign(todo, updateData);
      todos.set(id, modifiedTodo);
      return HttpResponse.json(modifiedTodo, { status: 200 });
    } else {
      return new HttpResponse(null, { status: 404 });
    }
  },
);
