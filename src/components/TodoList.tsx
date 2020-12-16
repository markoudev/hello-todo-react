import Todo from "./Todo";

interface TodoListProps {
  /**
   * Which title should we show at the top of this list.
   */
  title: string;

  /**
   * A collection of todo's to display.
   */
  todos: Todo[];
}

/**
 * This TodoList is not aware of the kind of todo's it's rendering. It's just
 * building a 'styled' list of them.
 */
export default function TodoList({
  title,
  todos
}: TodoListProps) {

  return <>
    <h2>{title} ({todos.length})</h2>
    {/* You can just use JavaScript to add conditions */}
    {todos.length === 0 ? (
      <p>Nothing here.</p>
    ) : (
      <ul>
        {todos.map(t => <Todo key={t.id} todo={t} />)}
      </ul>
    )}
  </>

}
