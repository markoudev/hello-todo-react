import { AnyAppAction } from "../actions";

const defaultState: TodosState = {
  todos: []
}

/**
 * This todo-reducer makes sure that its state is adjusted if certain actions
 * are coming in.
 *
 * @param state
 * @param action
 */
export default function reducer(
  state: TodosState | undefined = defaultState,
  action: AnyAppAction
): TodosState {

  switch (action.type) {

    // If the action dispatch is Loaded: simply set the todos from the action
    // as the state's todo's. Since those are the ones retrieved by the API.
    case "TODOS/LOADED":
      return {
        ...state,
        todos: action.todos
      }

    // When a todo must be added, add it to the stat's collection of todo's.
    case "TODOS/ADD":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            // Very cool way of finding the next ID :D
            id: Math.max(...state.todos.map(todo => todo.id)) + 1,
            title: action.description,
            completed: false
          }
        ]
      }

    // Deleting a todo means returning a list of todo's that doesn't include
    // the todo with the ID that we want to delete.
    case "TODOS/DELETE":
      return {
        ...state,
        todos: [
          ...state.todos.filter(todo => todo.id !== action.id)
        ]
      }

    // Toggling it as completed, means returning a state with a copy of all
    // todo's except the one we're toggling, plus the one we're toggling and then
    // setting the `completed` property to the opposite value.
    case "TODOS/TOGGLE_COMPLETE":
      return {
        ...state,
        todos: [
          ...state.todos.filter(todo => todo.id !== action.todo.id),
          { ...action.todo, completed: !action.todo.completed }
        ]
      }

    default:
      return state;
  }

}
