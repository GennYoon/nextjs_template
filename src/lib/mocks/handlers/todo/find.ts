import { HttpResponse, http } from "msw";
import { todos } from "@/lib/mocks/data";

export const findTodo = http.get(`${process.env.NEXT_PUBLIC_API_URL}/todo`, () => {
  return HttpResponse.json(Array.from(todos.values()), { status: 200 });
});
