<script lang="ts">
	import profileImg from '$lib/assets/profile.png';
	import Seo from '$lib/components/Seo.svelte';
	import { enhance } from '$app/forms';
	import Button from '$lib/components/ui/button/button.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import Label from '$lib/components/ui/label/label.svelte';
	import type { PageData, ActionData } from './$types';

	let { data, form }: { data: PageData; form: ActionData } = $props();
</script>

<Seo title="Guestbook" description="Sign my guestbook" image={profileImg} />

<h1 class="mb-4">sign my guestbook</h1>
<form use:enhance method="POST" class="flex flex-col gap-4 md:flex-row md:items-end">
	<div class="space-y-2">
		<Label for="name" class="font-serif">Name</Label>
		<Input id="name=" name="name" required />
	</div>
	<div class="space-y-2">
		<Label for="message" class="font-serif">Message</Label>
		<Input id="message" name="message" required />
	</div>
	<Button type="submit">Submit</Button>
	{#if form?.name && form?.invalid}
		<p>Please include a name and keep it under 50 characters.</p>
	{:else if form?.message && form?.invalid}
		<p>Please include a name and keep it under 100 characters.</p>
	{/if}
	{#if form?.success}
		<p>Thank you for your message!</p>
	{:else if form?.submitted && !form?.success}
		<p>Unable to add your message at this time.</p>
	{/if}
</form>

{#each data.messages as message}
	<div class="my-4">
		<p class="font-serif font-semibold">{message.name}</p>
		<p>{message.message}</p>
	</div>
{/each}
