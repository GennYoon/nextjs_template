import { createTodo } from "./create";
import { removeTodo } from "./remove";
import { findTodo } from "./find";
import { findOneTodo } from "./findOne";
import { updateTodo } from "./update";

export const todoHandlers = [findTodo, findOneTodo, createTodo, updateTodo, removeTodo];
