---
path: "/blog/using-useReducer-and-useContext-instead-for-state"
category: "blog"
date: "2020-05-14"
title: "A simple state management pattern in React with no external dependencies & less boilerplate"
imgSrc: "../images/nimbot-3000.png"
---

**In the olden days life was simple**

If you wanted to do anything with state in your application then you had 2 choices;

- Either pass the state down the component heirachy as props
- Or reach for something like redux to expose your data to components

The former was really straightforward but meant that youd have to pass props through components which didn't need to be concerned with the data
