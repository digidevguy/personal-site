<script lang="ts">
	import { page } from '$app/stores';

	let {
		title,
		description,
		image,
		date,
		tags,
		author
	}: {
		title: string;
		description: string;
		image: string;
		date?: string;
		tags?: string;
		author?: string;
	} = $props();
</script>

<svelte:head>
	<title>{title} | mattlittrell.dev</title>
	<meta name="description" content={description} />

	<!-- Article-specific meta tags -->
	{#if date}
		<meta property="article:published_time" content={date} />
	{/if}
	{#if author}
		<meta property="article:author" content={author} />
	{/if}
	{#if tags}
		<meta property="article:tag" content={tags} />
	{/if}

	<!-- OG info -->
	<meta property="og_site_name" content="mattlittrell.dev" />
	<meta property="og:url" content="https://www.mattlittrell.dev{$page.url.pathname.toString()}" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={`https://mattlittrell.dev${image}`} />

	<!-- Twitter info -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="“example.com" />
	<meta
		property="twitter:url"
		content="https://www.mattlittrell.dev{$page.url.pathname.toString()}"
	/>
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={`https://mattlittrell.dev${image}`} />

	<!-- TODO: Add logo -->
	<!-- {@html `  <script type="application/ld+json">{
   "@context": "https://schema.org",
   "@type": "Website",
   "name": "${title} | mattlittrell.dev,
   "url": "https://www.mattlittrell.dev${$page.url.pathname}",
   "logo": ${image}  }</script>`} -->
</svelte:head>
