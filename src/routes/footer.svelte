<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Github from '$lib/components/ui/icons/github.svelte';
	import Linkedin2 from '$lib/components/ui/icons/linkedin2.svelte';
	import Bluesky from '$lib/components/ui/icons/Bluesky.svelte';

	const year = new Date().getFullYear();
</script>

<footer class="m-8 flex flex-col items-center justify-center gap-8 p-8 opacity-75 sm:flex-row">
	&copy; 2024 - {year} Matthew Littrell.
	<div class="flex items-center gap-4">
		<Button variant="ghost" size="icon" href="https://github.com/digidevguy" target="_blank">
			<Github />
		</Button>
		<Button
			variant="ghost"
			size="icon"
			href="https://www.linkedin.com/in/mlittrelldev/"
			target="_blank"
		>
			<Linkedin2 />
		</Button>
		<Button
			variant="ghost"
			size="icon"
			href="https://bsky.app/profile/matthewcodes.bsky.social"
			target="_blank"
		>
			<Bluesky />
		</Button>
	</div>
</footer>
