import { ThunkAction } from "redux-thunk";
import { AnyAppAction } from ".";
import * as todoApi from "../../api/todos";

////////////////////////////////////////////////////////////////////////////////
// Async function to load todo's.

export function loadTodosAction(): ThunkAction<void, AppState, unknown, AnyAppAction> {
  return async function (dispatch) {
    const todos = await todoApi.fetchTodos();
    dispatch(todosLoadedAction(todos));
  }
}

////////////////////////////////////////////////////////////////////////////////
// Constant, type and function for loaded action.

const TODOS_LOADED = "TODOS/LOADED";

type TodosLoadedAction = {
  type: typeof TODOS_LOADED;
  todos: Todo[];
}

export function todosLoadedAction(todos: Todo[]): TodosLoadedAction {
  return { type: TODOS_LOADED, todos };
}

////////////////////////////////////////////////////////////////////////////////
// Constant, type and function for adding a todo.

const TODOS_ADD = "TODOS/ADD";

type TodosAddAction = {
  type: typeof TODOS_ADD;
  description: string
}

export function todosAddAction(description: string): TodosAddAction {
  return { type: TODOS_ADD, description };
}

////////////////////////////////////////////////////////////////////////////////
// Constant, type and function to delete a todo.

const TODOS_DELETE = "TODOS/DELETE";

type TodosDeleteAction = {
  type: typeof TODOS_DELETE;
  id: number;
}

export function todosDeleteAction(id: number): TodosDeleteAction {
  return { type: TODOS_DELETE, id };
}

////////////////////////////////////////////////////////////////////////////////
// Constant, type and function for toggling a todo

const TODOS_TOGGLE_COMPLETE = "TODOS/TOGGLE_COMPLETE";

type TodosToggleCompleteAction = {
  type: typeof TODOS_TOGGLE_COMPLETE;
  todo: Todo;
}

export function todosToggleCompleteAction(todo: Todo): TodosToggleCompleteAction {
  return { type: TODOS_TOGGLE_COMPLETE, todo };
}

////////////////////////////////////////////////////////////////////////////////
// Export a single type holding all the action types that exist here.

export type TodoAction =
  TodosLoadedAction |
  TodosAddAction |
  TodosDeleteAction |
  TodosToggleCompleteAction;
