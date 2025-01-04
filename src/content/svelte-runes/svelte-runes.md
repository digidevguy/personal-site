---
title: Understanding Svelte 5's New Runes System
date: '2025-1-03'
description: Svelte 5 introduces "runes," special functions for handling reactivity more explicitly, including $state for reactive variables, $derived for computed values, and $effect for side effects. This system enhances TypeScript integration, performance, and code organization while simplifying reactivity management.
published: true
image: neom-g6Me5mUQQIQ-unsplash
tags:
  - svelte
  - runes
  - reactivity
---

<script>
	import Counter from './Counter.svelte';
</script>

Svelte 5 introduces a revolutionary feature called "runes" that transforms how we handle reactivity. Let's explore this new system using a simple counter example to understand its benefits.

## What are Runes?

Runes are special functions in Svelte 5 that begin with $ (the dollar sign). They provide a more explicit and flexible way to handle reactive state and computations. The main runes include **$state**, **$derived**, and **$effect**.

## A Simple Counter Example

Let's create a basic counter to demonstrate how runes work:

```svelte
<script>
	let count = $state(0);

	function increment() {
		count++;
	}

	function decrement() {
		count--;
	}

	// Derived value example
	let doubled = $derived(count * 2);

	// Effect example
	$effect(() => {
		console.log(`Count changed to: ${count}`);
	});
</script>

<button onclick={decrement}>-</button>
<span>{count}</span>
<button onclick={increment}>+</button>

<div>Double value: {doubled}</div>
```

### Breaking Down the Code

1. **$state**: Declares reactive state variables instead of using **let count = 0**, we now use **$state** to explicitly mark reactive variables.
2. **$derived**: Creates computed values similar to the old $: syntax but more explicit and flexible.
3. **$effect**: Handles side effects and runs whenever dependencies change, replacing the old $: syntax for side effects.

## The End Result

<Counter />

## Benefits of Runes

- More explicit reactivity declarations
- Better TypeScript integration
- Improved performance through fine-grained reactivity
- Clearer code organization

## Important Notes

This new runes system represents a significant evolution in Svelte's reactivity model, making it more explicit and powerful while maintaining the framework's simplicity and elegance.
