import { oauth } from "./oauth";
import { signin } from "./signin";
import { signup } from "./signup";
import { update } from "./update";
import { signout } from "./signout";
import { withdraw } from "./withdraw";

export const authHandlers = [oauth, signin, signup, update, signout, withdraw];
