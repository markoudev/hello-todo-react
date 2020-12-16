import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import styles from './App.module.css';
import store from './store';

// Build lazy components so that they're only imported whenever they're needed
const LazyHomeView = lazy(() => import('./views/HomeView'));
const LazyTodoView = lazy(() => import('./views/TodoView'));
const LazyTodoDetailsView = lazy(() => import('./views/TodoDetailsView'));

/**
 * This is the root of our app. It wraps the rest of our components and views
 * in the desired Router and Provider components.
 */
export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className={styles.app}>
          <div className={styles.nav}>
            <ul><Link to="/">Home</Link></ul>
            <ul><Link to="/todos">Todo's</Link></ul>
          </div>
          <div className={styles.content}>
            <Switch>
              <Suspense fallback={<div style={{color: 'red'}}>Loading...</div>}>
                <Route path="/todos/:id" exact component={LazyTodoDetailsView} />
                <Route path="/todos" exact component={LazyTodoView} />
                <Route path="/" exact>
                  {/* You could also write routes like this, but using component={}
                  is a bit cleaner. Leaving this here for demo purposes. */}
                  <LazyHomeView />
                </Route>
              </Suspense>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}
