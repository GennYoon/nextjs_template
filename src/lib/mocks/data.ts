import { Todo } from "@/types/todo";

export const adminsData = new Map([
  [1, { id: 1, name: "관리자", email: "admin@example.com", phone: "01011112222", password: "qwer1234!" }],
]);

export const customersData = new Map([
  [1, { id: 1, name: "사용자", email: "user@example.com", phone: "01022223333", password: "qwer1234!" }],
]);

export const phoneVerifyData = new Map<string, string>();

export const todos = new Map<number, Todo>([
  [1, { id: 1, userId: 1, title: "Wave hello", completed: false }],
  [2, { id: 2, userId: 1, title: "Get Coffee", completed: false }],
  [3, { id: 3, userId: 1, title: "Go to Work", completed: false }],
  [4, { id: 4, userId: 1, title: "Write Code", completed: false }],
]);
