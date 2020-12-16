import { ThunkAction } from 'redux-thunk';
import { TodoAction } from './todos';

/**
 * This type holds all the different actions that can be dispatched by the app.
 */
export type AnyAppAction =
  TodoAction;

/**
 * Export a second type including ThunkAction. If we would add it to the
 * AnyAppAction type we would get a circular reference.
 */
export type AnyAppActionWithThunk =
  AnyAppAction |
  ThunkAction<void, AppState, unknown, AnyAppAction>;
