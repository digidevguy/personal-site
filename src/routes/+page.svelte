<script lang="ts">
	import Tag from '$lib/components/ui/tag/tag.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { formatDate } from '$lib/utils';
	import * as config from '$lib/config';
	import profileImg from '$lib/assets/profile.png';

	let { data } = $props();
</script>

<Seo title="Home" description={config.description} image={profileImg} />

<div class="mb-4 flex items-center justify-center space-x-4">
	<div class="max-w-sm space-y-2">
		<h1 class="text-4xl font-bold">Hi, I'm Matthew</h1>
		<p class="text-lg">
			I want to code, and grow as a developer, and I chose this bit of the internet to do it.
		</p>
	</div>
</div>
<div class="mb-4 space-y-4">
	<h2 class="text-2xl font-semibold">A bit about me</h2>
	<p>
		I am a board game enthusiast and husky owner in the Dallas area, who is also passionate about
		web dev, design, books, and other topics. I get excited about creating things on the internet -
		it's amazing how we can build websites and apps that actually help people and make a difference.
	</p>
	<p>
		I’m an avid learner when it comes to programming, and though I still view myself as a babe in
		the woods I can’t help but want to explore the different paths available. There's so much to
		discover in the world of software development, and I'm excited to keep learning and growing.
	</p>
</div>
<div class="space-y-4">
	<h2 class="text-3xl font-semibold">Blog posts</h2>
	<ul class="space-y-4">
		{#each data.posts as post}
			<li>
				<a href={post.slug} class="group">
					<article>
						<h2 class="text-lg font-medium group-hover:underline">
							{post.title}
						</h2>
						<div class="flex items-center gap-4 py-1">
							<time class="flex-shrink-0">{formatDate(post.date)}</time>
							<span>|</span>
							<div class="flex flex-wrap gap-2">
								{#each post.tags as tag}
									<Tag>{tag}</Tag>
								{/each}
							</div>
						</div>

						<p>{post.description}</p>
					</article>
				</a>
			</li>
		{/each}
	</ul>
</div>
