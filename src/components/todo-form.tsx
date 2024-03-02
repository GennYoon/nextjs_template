"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { addTodoApi } from "@/lib/mocks/apis/todo.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface Inputs {
  title: string;
}

const schema = z.object({
  title: z.string({ required_error: "제목을 입력해주세요." }),
});

const TodoForm = () => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: addTodoApi,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todo-list"] }),
  });
  const { reset, register, formState, handleSubmit } = useForm<Inputs>({
    resolver: zodResolver(schema),
    defaultValues: {},
  });

  const addTodo: SubmitHandler<Inputs> = async (data) => {
    await mutateAsync(data);
    reset();
  };

  return (
    <form className="mt-4" onSubmit={handleSubmit(addTodo)}>
      <input
        type="text"
        className="w-96 h-14 px-4 text-lg border border-red-500 text-red-500 font-semibold placeholder-red-300 outline-red-400 rounded-lg"
        {...register("title", { required: true })}
        placeholder="할일을 적어주세요."
      />
      {formState.errors.title && <p>{formState.errors.title.message}</p>}
    </form>
  );
};

export default TodoForm;
