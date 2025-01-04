<script lang="ts">
	import profile from '$lib/assets/profile.png';
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
</script>

<!-- TODO: Need better styling solution -->
<header class="relative flex items-center justify-center p-2">
	<a href="/guestbook" class="absolute left-2 top-6 hover:underline">guestbook</a>
	<a href="/">
		<img src={profile} alt="Drawn profile" class="size-16" />
	</a>
	<ThemeSwitch classes="absolute top-4 right-2" />
</header>
