import { authHandlers } from "./auth";
import { customerHandlers } from "./customer";
import { todoHandlers } from "./todo";
import { etcHandlers } from "./etc";

export const handlers = [...authHandlers, ...customerHandlers, ...todoHandlers, ...etcHandlers];
