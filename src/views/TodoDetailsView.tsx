import { useParams } from "react-router-dom";
import { useAppSelector } from "../store";

interface TodoDetailsParams {
  /**
   * An ID is coming in for this view.
   */
  id: string;
}

/**
 * Shows the details of a todo.
 */
export default function TodoDetailsView() {

  // Get parameters for this route
  const { id } = useParams<TodoDetailsParams>();

  // Find the todo from state, but it could be that we didn't find it of course
  const todo = useAppSelector(state => state.todos.todos.find(todo => `${todo.id}` === id));

  if (!todo) {
    // If a todo wasn't  found, immediately return with simple rendering. This
    // makes that the rest of our component can safely assume that the todo
    // exists, rather than having to check there again.
    return <h1>Todo not found</h1>;
  }

  return <>
    <h1>Todo details for {id}</h1>
    <dl>
      <dt>ID</dt>
      <dd>{todo.id}</dd>
      <dt>Title</dt>
      <dd>{todo.title}</dd>
      <dt>Completed</dt>
      <dd>{todo.completed ? "Yes!" : "Not yet"}</dd>
    </dl>
  </>;
}
