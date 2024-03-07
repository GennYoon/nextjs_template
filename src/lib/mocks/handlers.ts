import { HttpHandler } from "msw";
import { etcHandlers } from "./etc";
import { todoHandlers } from "./todo";

export const handlers: HttpHandler[] = [...todoHandlers, ...etcHandlers];
