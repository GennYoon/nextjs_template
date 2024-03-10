import { create } from "./create";
import { find } from "./find";
import { findOne } from "./findOne";
import { update } from "./update";
import { remove } from "./remove";

export const todoHandlers = [create, find, findOne, update, remove];
