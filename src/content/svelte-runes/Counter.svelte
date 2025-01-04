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

<div class="flex flex-col items-center gap-2">
	<div>
		<button onclick={decrement} class="mr-2 rounded-md bg-slate-500 px-4 py-2 font-mono text-white"
			>-</button
		>
		<span class="font-mono">{count}</span>
		<button onclick={increment} class="ml-2 rounded-md bg-slate-500 px-4 py-2 font-mono text-white"
			>+</button
		>
	</div>
	<div class="font-mono">Double value: {doubled}</div>
</div>
