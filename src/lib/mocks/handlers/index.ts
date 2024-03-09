import { authHandlers } from "./auth";
import { todoHandlers } from "./todo";
import { etcHandlers } from "./etc";

export const handlers = [...authHandlers, ...todoHandlers, ...etcHandlers];
