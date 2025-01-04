import type { Post } from '$lib/types.js';
import { error } from '@sveltejs/kit';
import type { Component } from 'svelte';

export async function load({ params, data }) {
	try {
		const post = await import(`../../content/${params.slug}/${params.slug}.md`);

		const views = data?.views[0]?.views;

		return {
			content: post.default as Component,
			meta: post.metadata as Post,
			views: views ? views : 0
		};
	} catch {
		error(404, `Could not find ${params.slug}`);
	}
}
