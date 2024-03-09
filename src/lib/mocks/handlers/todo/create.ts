import { HttpResponse, http } from "msw";
import { getListId } from "@/lib/utils";
import { todos } from "@/lib/mocks/data";

interface CreateTodoReq {
  title: string;
}

export const createTodo = http.post<{}, CreateTodoReq>(
  `${process.env.NEXT_PUBLIC_API_URL}/todo`,
  async ({ request }) => {
    const { title } = await request.json();
    const id = getListId(todos);
    const newTodo = { id, userId: 1, title, completed: false };

    todos.set(id, newTodo);

    return HttpResponse.json(newTodo, { status: 201 });
  },
);
