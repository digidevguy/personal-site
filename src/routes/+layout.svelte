<script lang="ts">
	import '@fontsource/arvo/400.css';
	import '@fontsource/arvo/700.css';
	import '@fontsource/lato';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	import Header from './header.svelte';
	import Footer from './footer.svelte';

	import '../app.css';

	let { children } = $props();
	inject({ mode: dev ? 'development' : 'production' });
</script>

<div class="mx-auto max-w-5xl p-4">
	<Header />

	<main>
		{@render children?.()}
	</main>

	<Footer />
</div>

<style>
	:root {
		--font-serif: 'Arvo', serif;
		--font-sans: 'Lato', sans-serif;
		font-family: var('--font-sans');
	}
</style>
