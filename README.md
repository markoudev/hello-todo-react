# Example Todo App

# Editor
Use [VScode](https://code.visualstudio.com/) to get proper TypeScript, React
and CSS support (auto-completion and type-checking) out-of-the-box:

```
brew cask install visual-studio-code
```

It's the only editor that has ever succeeded in making me switch from Sublime ;)

Except for Vim. (just kidding)

# Getting Started
Clone the repo using Git or GH CLI:

```
git clone git@github.com:markoudev/hello-todo-react.git

gh repo clone markoudev/hello-todo-react
```

Then it's time to install dependencies and run the development server. This
will also open your webbrowser to the example app. Please be advised that I'm
not very good at designing.

```
yarn
yarn start
```

If you don't have `yarn` installed yet, install it with `brew install yarn`.

# Comments in code
I've tried explaining what happens here and there through the code. Feel free to
ask if you're running into anything that is described in a vague or ambiguous
way, I'm more than happy to explain.

# What's being used?

## [React](https://reactjs.org/)
This project uses React as a showcase to build a simple web app with re-usable
components. Just as many other frameworks, React relies on the shadow DOM for
rendering and only changing the parts of the actual DOM that need changing.

## [React Router](https://reactrouter.com/web/)
The React Router allows you to route certain browser paths to desired components.
There's a question though whether it makes sense to have one big single page
application in whatever framework. Server-side rendering still exists, and is
very close to the actual data, and is very fast. If you don't need any user
interaction besides a couple of links, is a JavaScript SPA a good idea then, or
just overhead?

## [Redux](https://redux.js.org/)
Redux is being used to have an application state. It's useful to use if certain
data is needed in more than one place, or may be affected by actions dispatched
from other places. In some cases it may just be enough to have component state
hold a list of things.

Redux takes care of the application's store and dispatcher. It supports dispatching
actions through *reducers* that will take care of adjusting state based on the
action that was dispatched. An action is nothing more than a simple JavaScript
object. The only property that it should always have, is a `type`.

## [Redux-Thunk](https://github.com/reduxjs/redux-thunk)
Actions dispatched through Redux are synchronous. So if you want to dispatch
asynchronous actions (like an API call that will resolve later), you need to
include redux-thunk in a project. This project mimics an API to fetch some todo's
using a timeout, so that it resolves 'at some point', but not immediately.

Thunk is Redux middleware.

# Characteristics

## Flux
React does not use two-way binding as is the case with Angular or Vue but
instead uses an architecture called Flux. This makes that you know for sure that
your data flows in one way. No surprises. Views just follow whatever they are
provided with.

The Flux architecture consists of these four parts: dispatcher (receives actions
and dispatches them to stores), store (holds data of an application, in essence
nothing more than a JavaScript object in this app's case), actions (define the
internal API of your app, capture the ways in which things may change in an app),
and views (data from stores is displayed in views).

For more info, see: https://github.com/facebook/flux/tree/master/examples/flux-concepts

## Typings everywhere.
Everything is typed in this project. This helps, certainly in larger projects,
to know what kind of properties you can provide to a component, or what kind
of actions you can dispatch for example. That way you don't have to inspect the
code of a component you want to mount for example which saves you a lot of time
and effort. But even more so importantly: it helps avoid unnecessary errors: if
you were to provide a property that is unexpected, or forgot to provide one, the
TypeScript compiler will break making sure that the error doesn't end up on
production.

Styles are also typed in this app, so if your component references a class that
doesn't exist in the CSS, the TypeScript compiler will break. This makes sure
that you don't accidentally use a class in your HTML that doesn't exist.

## CSS modules
Importing CSS in a component and using proper webpack configuration, makes
sure that component styles are scoped to their component to avoid collisions with
other CSS classes that may have the same name.

## JSX
In React you use JSX to have your component return how it should be rendered.
This is pretty much HTML with JavaScript in it using curly-braces `{}` whenever
you need a little bit of logic. The difference with JSX and a Vue template, is
that in Vue you type JavaScript as plain text in a template that needs to be
parsed and `eval()`'d, whereas in JSX it's actually JavaScript all the time.

With JSX there's also a strong link between your template and your JavaScript.
Again, you get auto-completion whenever you want to assign a variable to some
HTML attribute for example, and the editor will also tell you whether or not the
variable is of the proper type. But while auto-completion makes your developer
life a lot easier, what may be even more important is that if you're assigning
the wrong or non-existing properties, the TypeScript compiler will break. You'll
see this in your editor, but also TypeScript won't compile so those mistakes
will never end up in production. And that includes that one if/else block that
wasn't hit during develpment.

# Why I like React
JavaScript has come a long way since it was first developed by Netscape in the
90s. Especially with ES6 it actually became fun to write and work with
JavaScript. React stays close to JS, and only adds some JSX to make the
rendering part readable. JavaScript at its core is functions and modules, and
that's also what React relies on. You could write class-components for more
complex components that need an API, but just as they say that "everything's a
file" on Unix, you could almost say in JavaScript that "everything's a function".
I like staying close to a language core and not add sauce for everything,
because really it's not needed often times.

Functional programming can be crazy fast (and JS can be run pretty fast), but
also something that may take a moment to wrap your head around since you're not
dealing with the usual classes. I'm impressed by how easy React makes it to
achieve this, by reducing a component to something you can't really make any
simpler: a function.

Component functions are very predictable and easy to understand. They only
take one argument: their properties. So everything a component can work with,
is provided in that one argument. It's not coming from several places, but just
that one place. Predictability is something I highly value because there's just
too much you have to know and investigate while working on the simplest things
sometimes. By making this predictable we can help each other.

Rendering may be a small part of your component. Whatever framework you're
using: if rendering becomes too long and complex you'll have to re-think your
component structure and maybe split up into multiple components. A lot of work
for component development goes into how it behaves. And that's written in JS,
also when it's related to styles: JS allows you to add/remove/change some class.
This is part of the reason why I like that React stays close to JS.

React's API has been pretty stable over the years and upgrading to new versions
hasn't really been a hassle.

Then there's hooks. They were introduced in React 16.8. Wow. They've made me
love React even more. How they work is a kind of magic (as is [any sufficiently
advanced technology](https://www.goodreads.com/quotes/14885-any-sufficiently-advanced-technology-is-indistinguishable-from-magic)).
In any case: they make your developer life a lot easier and allow you to focus
on whatever you want to focus on.

For example: need to keep track of something in a component using some kind
of state property? Simply `useState()`. Need to respond to some variable
changing? Use `useEffect(() => ..., [thingThatChanged])`. No need to compare
new and previous properties yourself.

Of course when your app gets bigger, there's the option to have application-wide
state. Libraries (and you as well) can write their own hooks. So Redux introduced
`useSelector()` to have your component fetch something from state. And it can
all be typed! Need parameters from React Router? `useParams()`.

These are some of the main things that make me love working in React. I get to
focus on the things I want, and React's just there to serve and help me achieve
the things I want. It's simple, intuitive, and predictable. Things I highly
value in frameworks because things tend to get over-engineered sometimes.
Every component written truly sparks joy :)
