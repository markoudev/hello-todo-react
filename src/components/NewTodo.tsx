import React, { useState } from "react";
import { useAppDispatch } from "../store";
import { todosAddAction } from "../store/actions/todos";
import styles from "./NewTodo.module.css";

interface NewTodoProps {
  /**
   * What title should we give our new-todo form thingy.
   */
  title: string;

  /**
   * Minimum length of a todo. It's optional.
   */
  minLength?: number;
}

/**
 * The <code>NewTodo</code> component allows a user to add a new todo.
 */
export default function NewTodo({
  title,
  minLength = 5 // optional prop, so set the default value
}: NewTodoProps) {

  const [description, setDescription] = useState("");
  const dispatch = useAppDispatch();

  // Submitting is only possible if the description has a certain length
  const canSubmit = description.length >= minLength;

  /**
   * Whenever the user is typing, make sure our state reflects what was typed
   * @param e ChangeEvent from te <input> element
   */
  function handleChangeDescription(e: React.ChangeEvent<HTMLInputElement>) {
    setDescription(e.target.value);
  }

  /**
   * When the form is submitted, add a new todo!
   */
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!canSubmit) {
      return;
    }

    dispatch(todosAddAction(description));
    setDescription("")
  }

  return <>
    <h2>{title}</h2>
    {!canSubmit &&
      // Show an error message as long as we're not meeting requirements
      <p className={styles.error}>Minimum length of a todo is {minLength} characters.</p>
    }
    <form onSubmit={handleSubmit}>
      <input type="text" value={description} onChange={handleChangeDescription} />
      <input type="submit" value="Add" disabled={!canSubmit} />
    </form>
  </>;

}
