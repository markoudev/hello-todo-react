import { useEffect } from "react";
import NewTodo from "../components/NewTodo";
import TodoList from "../components/TodoList";
import { useAppDispatch, useAppSelector } from "../store";
import { loadTodosAction } from "../store/actions/todos";

export default function TodoView() {

  const { todos } = useAppSelector(state => state.todos);
  const dispatch = useAppDispatch();

  // When this component is mounted, load todo's
  useEffect(() => {
    dispatch(loadTodosAction());
  }, [dispatch]);

  const openTodos = todos.filter(todo => !todo.completed)
  const completedTodos = todos.filter(todo => todo.completed)

  // The <> is used here to make it a React Fragment. For rendering you can
  // only return a single element.
  return <>
    <h1>Here are your todo's</h1>
    <NewTodo title="Feel like doing more? Add something new." />
    <TodoList title="Open to-do's, go get 'em!" todos={openTodos} />
    <TodoList title="Completed to-do's" todos={completedTodos} />
  </>;
}
