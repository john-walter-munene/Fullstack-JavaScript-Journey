import User from "./user.mjs";
import { printName as PrintUserName, printAage } from "./user.mjs";

let walter = new User('Walter', 24);

PrintUserName(walter);
printAage(walter);