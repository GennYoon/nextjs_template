import { addTodo, fetchTodos } from "../apis/todo.api";
import { http, HttpResponse } from "msw";
import { server } from "../server";

describe("Todo", () => {
  it("GET /todos - 데이터를 가져옵니다.", async () => {
    const todos = await fetchTodos();
    expect(todos.length).toBe(4);
  });

  it("GET /todos - 호출중 에러발생시", async () => {
    server.use(
      http.get("http://localhost:5000/todos", () => {
        return HttpResponse.error();
      }),
    );
    const todos = await fetchTodos();
    expect(todos.length).toBe(0);
  });

  it("POST /todos - 데이터를 추가합니다.", async () => {
    const title = "하이!";
    const todo = await addTodo({ title });
    expect(todo?.title).toBe(title);

    const todos = await fetchTodos();
    expect(todos.length).toBe(5);
  });
});
