---
path: "/projects/what-a-todo"
category: "project"
date: "2020-04-20"
title: "What a Todo"
description: "The go-to, to-do for getting to grips with a new Framework. This time, learning how to use Svelte"
imgSrc: ""
githubURL: "https://github.com/mplayer78/svelte-todo-list"
depolyedURL: "https://mplayer-svelte-todos.netlify.app/"
---

###I have been looking to checkout Svelte, somewhat of a NKOTB (ask your parents!) for a while so decided to put together a simple todo app###

What is immediately noticable about working in Svelte is that it feels a lot more HTML'y. It really does feel like HTML6 (tm) instead of React's JSX which definitely feels more like Javascript with some HTML chucked in (via JSX). I'm not sure wether I prefer this method of working or not; it can feel clunky but then so can React.

Svelte incorporates its own state handling in 3 different ways; passing props directly to components, writing state to a context object and stores. The way that props are accessed in a child component definitely takes some getting used to; exported within a script tag at the head of the file. Luckily the docs are pretty clear.

I have yet to experiment with the Context API but have used the Stores. These are just objects which are imported but have a subscribe property on them, data can be accessed via a callback function. This means that to lift a variable outside of the scope of the function it has to be declared outside and then assigned in the function which can make the script tag quite verbose. Where it does score is that you can just write pretty normal HTML directly into a component (.svelte file) without having to encapsulate everything in a wrapper (a la React).

Within the actual body of the HTML a store can be prefixed with a "\$" which denotes that the store should be subscribed to and the data passed back but this is not the case in the script tag so you have to be mindful about updates.
