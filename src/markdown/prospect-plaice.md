---
path: "/projects/prospect-plaice"
category: "project"
date: "2020-05-05"
title: "Prospect Plaice Interactive Menu & Ordering System"
description: "A small e-commerce site built in Gatsby and using the Stripe Checkout system"
imgSrc: ""
githubURL: "https://github.com/mplayer78/prospect-plaice"
depolyedURL: "https://prospect-plaice.netlify.app/"
---

###With the outbreak of Covid-19 I was approached by a local businessman who was looking for an easy way to take orders for his Fish and Chip shop###

As the timing was exceptionally tight, the products are relatively static and to get the project up and running I decided that the easiest way would be to generate the products within Stripe's dashboard. From there Gatsby makes a GraphQL query from the Stripe API to get the prioduct details and maps them to details on the page.

All of the ordering is done on one page and the page is designed so that it is responsive by nature.

On ordering the customer is redirected, along with an array of products, to stripes one-click checkout and upon a successful transaction the order is marked of as paid and pending. All of the outstanding orders are displayed on the owners own dashboard where he can mark items as paid and completed.
