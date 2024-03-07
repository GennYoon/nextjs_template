"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { addTodoApi } from "@/lib/apis/todo.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface Inputs {
  title: string;
}

const schema = z.object({
  title: z.string({ required_error: "title is required" }),
});

const TodoForm = () => {
  const queryClient = useQueryClient();
  const onSuccess = () => queryClient.invalidateQueries({ queryKey: ["todo-list"] });

  const { mutateAsync } = useMutation({ mutationFn: addTodoApi, onSuccess });
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
        placeholder="Enter you todo"
      />
      {formState.errors.title && <p>{formState.errors.title.message}</p>}
    </form>
  );
};

export default TodoForm;
