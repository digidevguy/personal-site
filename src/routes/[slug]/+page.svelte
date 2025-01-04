<script lang="ts">
	import { formatDate, toIsoDate } from '$lib/utils';
	import Tag from '$lib/components/ui/tag/tag.svelte';
	import Seo from '$lib/components/Seo.svelte';

	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();

	const author = 'Matthew Littrell';
	const isoDate = toIsoDate(data.meta.date);
	const tags = data.meta.tags.join(',');

	type Image = {
		sources: {
			avif: string;
			webp: string;
			jpg: string;
		};
		img: {
			src: string;
			w: number;
			h: number;
		};
	};

	const images = import.meta.glob<Image>(`$lib/assets/article-images/*.jpg`, {
		query: { enhanced: true },
		import: 'default',
		eager: true
	});
</script>

<Seo
	title={data.meta.title}
	description={data.meta.description}
	image={images[`/src/lib/assets/article-images/${data.meta.image}.jpg`].img.src}
	date={isoDate}
	{tags}
	{author}
/>

<article class="prose prose-slate mx-auto px-2 dark:prose-invert lg:prose-lg xl:prose-xl md:px-0">
	<hgroup>
		<h1>
			{data.meta.title}
		</h1>
		<time class="text-center" datetime={isoDate}>Published {formatDate(data.meta.date)}</time>
	</hgroup>
	<div class="space-x-2">
		{#each data.meta.tags as tag}
			<Tag>{tag}</Tag>
		{/each}
	</div>

	<!-- svelte-ignore hydration_attribute_changed-->
	<enhanced:img
		src={images[`/src/lib/assets/article-images/${data.meta.image}.jpg`]}
		alt="Article banner"
		class="rounded-md"
	/>

	<data.content />
</article>
