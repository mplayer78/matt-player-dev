---
path: "/projects/nimbot-3000"
category: "project"
date: "2019-08-04"
title: "Nimbot 3000"
description: "React Hooks demo utilising useContext, useEffect and useState to manage state between screens. 

Rigged so that the computer always wins!"
imgSrc: ""
githubURL: "https://github.com/mplayer78/nimbot-3000"
depolyedURL: "https://nimbot3000.netlify.com/"
---

###I was recently helping my Daughter with a maths problem she had been set. It was regarding the game **Nim**. For those who don't know; Nim involves having a number of counters then taking it in turn to remove either one or two counters at a time. The last person to remove either one or two counters wins the game... it's an old hustler's game.###

Nim is a [**solved**](https://en.wikipedia.org/wiki/Solved_game) game so the question was simply to create a set of rules to ensure thqat you always win. We converted that into a simple online version built using **Create-React-App**.

Although the game and logic are pretty simplistic the project did give a chance to implement some (rather over the top) state management using the **React Hooks**; useState, useContext and useReducer.

Although this does give a more boilerplatey solution, by using a reducer; not only can the reducer be passed around the component tree at will but the actions can be stated **declaratively** improving readibility.

Overall, this is a great solution for a fairly straightforward App which is not complex enough to need **Redux** but is difficult to read by using useState alone.

###Caveat!!### useReducer does not give the ability to be able to call an action from within another action. For example :

````javascript
export function reducer(state, action) {
  switch (action.type) {
    // ...
    case "take_turn":
      const whosTurn = state.counter % 3 === 0 ? 1 : 2;
      return {
        ...state,
        turn: whosTurn,
        gameVisible: true
      };
    case "my_turn":
      return {
        ...state,
        currentCounter: action.counter
        dispatch({action: take_turn}) // this is not possible in useReducer
      };
    // ...
  }
}```
````
