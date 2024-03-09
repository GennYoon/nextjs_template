"use client";

import { deleteTodoApi, findTodoApi, updateTodoApi } from "@/lib/apis/todo.api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const TodoList = () => {
  const queryClient = useQueryClient();
  const onSuccess = () => queryClient.invalidateQueries({ queryKey: ["todo-list"] });
  const { mutate: updateTodo } = useMutation({ mutationFn: updateTodoApi, onSuccess });
  const { mutate: deleteTodo } = useMutation({ mutationFn: deleteTodoApi, onSuccess });

  const { data } = useQuery<Todo[]>({ queryKey: ["todo-list"], queryFn: () => findTodoApi() });

  const completedTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    updateTodo({ id: name, completed: checked });
  };

  return (
    <ul className="w-96 mt-6">
      {data
        ?.sort((a, b) => b.id - a.id)
        .map((item) => (
          <li key={item.id} className="flex items-center p-1 gap-2 hover:bg-red-50 transition-all">
            <label tabIndex={0} htmlFor={`check${item.id}`} className="outline-red-400">
              <input
                id={`check${item.id}`}
                className="peer"
                name={`${item.id}`}
                type="checkbox"
                defaultChecked={item.completed}
                onChange={completedTodo}
                hidden
              />
              <div className="flex justify-center items-center w-4 h-4 bg-red-500/20 border border-red-500 before:content[''] before:w-[10px] before:h-[10px] peer-checked:before:bg-red-500" />
            </label>
            <label htmlFor={`check${item.id}`} className="flex-1 text-red-500">
              {item.title}
            </label>
            <button
              className="border border-red-500 h-8 px-3 text-red-500 outline-red-400 text-sm rounded-sm hover:bg-red-500 hover:text-white transition-all"
              onClick={() => deleteTodo(item.id)}
            >
              remove
            </button>
          </li>
        ))}
    </ul>
  );
};

export default TodoList;
