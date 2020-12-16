/**
 * A very simple "API" implemented using setTimeout. But it at least mimics
 * a Promise that will resolve whenever it's completed.
 */
export async function fetchTodos(): Promise<Todo[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { id: 1, title: 'Wake up', completed: true },
        { id: 2, title: 'Drink coffee', completed: false }
      ]);
    }, 1000);
  })
}
