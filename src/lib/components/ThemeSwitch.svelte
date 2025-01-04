<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Sun from '$lib/components/ui/icons/Sun.svelte';
	import Moon from '$lib/components/ui/icons/Moon.svelte';
	import { browser } from '$app/environment';
	let { classes }: { classes?: string } = $props();

	let darkMode = $state(true);

	function handleSwitchDarkMode() {
		darkMode = !darkMode;

		localStorage.setItem('theme', darkMode ? 'dark' : 'light');

		darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	}

	if (browser) {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			darkMode = true;
		} else {
			document.documentElement.classList.remove('dark');
			darkMode = false;
		}
	}
</script>

<div class={classes}>
	<Button id="theme-toggle" variant="ghost" size="icon" on:click={handleSwitchDarkMode}>
		{#if darkMode}
			<Sun />
		{:else}
			<Moon />
		{/if}
	</Button>
</div>
