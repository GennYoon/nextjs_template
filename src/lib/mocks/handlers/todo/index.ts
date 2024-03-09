import { createTodo } from "./create";
import { deleteTodo } from "./delete";
import { findAllTodo } from "./findAll";
import { findOneTodo } from "./findOne";
import { modifyTodo } from "./modify";

export const todoHandlers = [findAllTodo, findOneTodo, createTodo, modifyTodo, deleteTodo];
