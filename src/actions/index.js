let nextTodoId = 0;
export const addTodo = (text) => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  text,
});

export const setVisibilityFilter = (filter) => ({
  type: "SET_VISIBILITY_FILTER",
  filter,
});

export const changeVisibilityAll = (data) => ({
  type: "CHANGE_VISIBILITY_ALL",
  data,
});

export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  id,
});

export const changeTodosAll = (data) => ({
  type: "CHANGE_TODOS_ALL",
  data,
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
};
