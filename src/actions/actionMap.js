import { changeVisibilityAll, changeTodosAll } from "./index";
// import { store } from "../index";

const actionMap = {
  todos: changeTodosAll,
  visibilityFilter: changeVisibilityAll,
};

export default actionMap;
