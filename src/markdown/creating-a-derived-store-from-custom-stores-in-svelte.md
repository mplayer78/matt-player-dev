---
path: "/blog/creating-a-derived-store-from-custom-stores-in-svelte"
category: "blog"
date: "2020-04-21"
title: "Creating a derived store from custom stores in Svelte"
imgSrc: "../images/railway-tracks.jpg"
---

**I recently came across a problem in Svelte when trying to create a custom store taking 2 custom stores I had created.**

The way the inbuilt state API works in Svelte definietely takes a little bit of getting used to and this had me scratching my head from some time.

Basically I was creating 2 stores like this 

```javascript

function daysStore() {
  const { subscribe, set, update } = writable({});

  return {
    subscribe,
    addMonth: (year, month) => {
      let newMonth = createMonth(year, month);
      update((dataObj) => ({
        ...newMonth,
        ...dataObj,
      }));
    },
  };
}

function currentFocus() {
  const { subscribe, set, update } = writable({
    year: 0,
    month: 0,
  });

export const days = daysStore();

export const current = currentFocus();
```

and then creating a derived store like this

```javascript
export const display = derived(
  [daysStore, currentFocus],
  ([$daysStore, $currentFocus]) => {
    let encMonth = [];
    // do something to populate encMonth
    return encMonth;
  }
);
``` 
The logic of what was happening here within the store reducers is not important but this would continually give a "store.subscribe is not a function". 

I won't pretend to be an expert in Svelte but the solution 
