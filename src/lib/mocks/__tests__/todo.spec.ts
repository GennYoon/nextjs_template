import { addTodoApi, fetchTodosApi, updateTodoApi } from "../apis/todo.api";
import { http, HttpResponse } from "msw";
import { server } from "../server";

describe("Todo", () => {
  it("GET /todos - 데이터를 가져옵니다.", async () => {
    const todos = await fetchTodosApi();
  });
  //
  // it("GET /todos - 호출중 에러발생시", async () => {
  //   server.use(
  //     http.get("http://localhost:3000/api/todos", () => {
  //       return HttpResponse.error();
  //     }),
  //   );
  //   const todos = await fetchTodosApi();
  //   expect(todos.length).toBe(0);
  // });
  //
  // it("POST /todo - 데이터를 추가합니다.", async () => {
  //   const title = "하이!";
  //   const todo = await addTodoApi({ title });
  //   expect(todo?.title).toBe(title);
  //
  //   const todos = await fetchTodosApi();
  //   expect(todos.length).toBe(5);
  // });
  //
  // it("PATCH /todo - 2번째 todo의 completed 처리", async () => {
  //   const todo = await updateTodoApi({ id: "2", completed: true });
  //   expect(todo?.completed).toBe(true);
  //
  //   const todos = await fetchTodosApi();
  //   expect(todos[1].completed).toBe(true);
  // });
});
