<script lang="ts">
	let { children } = $props();
</script>

<span class="rounded-sm bg-slate-800 px-2 py-1 font-mono text-sm lowercase text-slate-200"
	>{@render children()}</span
>
