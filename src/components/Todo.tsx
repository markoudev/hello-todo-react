import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../store";
import { todosDeleteAction, todosToggleCompleteAction } from "../store/actions/todos";
import styles from './Todo.module.css';

interface TodoProps {
  /**
   * The todo that should be displayed.
   */
  todo: Todo;
}

/**
 * Rendering a simple Todo as a list item.
 */
export default function Todo({
  todo
}: TodoProps) {

  const dispatch = useAppDispatch();

  /**
   * Handler for the button that will delete a todo
   */
  function handleClickDelete() {
    dispatch(todosDeleteAction(todo.id));
  }

  /**
   * Handler for the button that will complete a todo (or actually toggle it)
   */
  function handleClickToggleCompleted() {
    dispatch(todosToggleCompleteAction(todo));
  }

  // Note that we're adding styles through an import. This again gives us auto
  // code completion with the classes in the CSS file that are available, but
  // more importantly: TypeScript won't be able to compile your component if
  // you're using CSS classes that don't exist! Which is awesome and avoids
  // unncessary missing classes or mistakes when deployed.
  //
  // Using clsx() we can set conditional class names.
  //
  return <li>
    <Link to={`/todos/${todo.id}`} className={clsx(styles.todo, todo.completed && styles.completed)}>
      {todo.title}
    </Link>
    <button onClick={handleClickDelete}>delete</button>
    <button onClick={handleClickToggleCompleted}>{todo.completed && 'un'}complete</button>
  </li>;

}
