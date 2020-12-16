interface Todo {
  /**
   * ID of the Todo.
   */
  id: number;

  /**
   * Description of the Todo
   */
  title: string;

  /**
   * Whether or not the todo is completed.
   */
  completed: boolean;
}

interface TodosState {
  /**
   * The current collection of todo's.
   */
  todos: Todo[];
}
