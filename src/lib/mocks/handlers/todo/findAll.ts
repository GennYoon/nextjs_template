import { HttpResponse, http } from "msw";
import { todos } from "@/lib/mocks/data";

export const findAllTodo = http.get(`${process.env.NEXT_PUBLIC_API_URL}/todos`, () => {
  return HttpResponse.json(Array.from(todos.values()), { status: 200 });
});
