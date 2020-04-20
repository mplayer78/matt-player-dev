---
path: "/blog/using-useReducer-and-useContext-instead-for-state"
category: "blog"
date: "2020-05-14"
title: "A simple state management pattern in React with no external dependencies & less boilerplate"
imgSrc: "../images/useReducer-useContext.png"
---

**In the olden days life was simple**

If you wanted share state between components in your application you could either;

- Either pass the state down the component heirachy as props
- Or reach for something like redux to expose your data to components

The former was really straightforward but meant that youd have to pass props through components which didn't need to be concerned with the data that they were handling.

The latter involved a load of boilerplate and at least one additional dependency. Now there is a 3rd option which takes a stripped down version of the Redux workflow and gives it to us as built-in functionality via the useContext and useReducer hooks.

It basically works something like this:

- You create an empty context object.
- Create a reducer to update the state.
- At the top level of your application destructure [state, dispatch] from the useReducer hook (passing your reducer and initial state)
- Wrap your whole app in a Context.Provider passing the value attribute an object with your state and dispatch actions.
- From here, in whichever component you need your context data you can destructure {state, dispatch} from the useContext hook passing your context object.

As an example:

```javascript
// App.js

export const Context = React.createContext();
const initialState = { counter: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count = state.count + 1
      };
    ...
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    </>
      <GameContext.Provider value={{ state, dispatch }}>
        <ChildComponent/>
      </GameContext.Provider>
    </div>
  );
}

// ChildComponent.js
import { Context } from "./App"

function ChildComponent(){ // look mom, no props!!
  const {state, dispatch} = useContext(Context);
  return (
    <h1>{state.count}</h1>
    <button onClick={() => dispatch({type: "increment"})}>Increment</button>
  )
}

export default App;
```

The code above is not complete as it doesn't include all imports and you are unlikely to keep all of the state management within the App.js file but hopefully it gives a gist.
