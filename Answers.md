1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
map forEach and filter
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
store manages global state, actions are a function that return an object, reducers handle chenges to global state
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
application state is the global state, component state is at the component level a good time to use component state would be in a component that uses a form
1.  What is middleware?
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
thunk allows us to make our apps asyncrounous 
1.  Which `react-redux` method links up our `components` with our `redux store`?
connect