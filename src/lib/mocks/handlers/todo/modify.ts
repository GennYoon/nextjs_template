import { HttpResponse, http } from "msw";
import { todos } from "@/lib/mocks/data";

interface ModifyTodoParams {
  id: string;
}

interface ModifyTodoReq {
  title?: string;
  completed?: boolean;
}

export const modifyTodo = http.patch<ModifyTodoParams, ModifyTodoReq>(
  `${process.env.NEXT_PUBLIC_API_URL}/todo/:id`,
  async ({ request, params }) => {
    const id = Number(params.id);
    const data = await request.json();

    const todo = todos.get(id);
    if (todo) {
      const modifiedTodo = Object.assign(todo, data);
      todos.set(id, modifiedTodo);
      return HttpResponse.json(modifiedTodo, { status: 200 });
    } else {
      return new HttpResponse(null, { status: 404 });
    }
  },
);
