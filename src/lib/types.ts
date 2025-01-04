export type Post = {
	title: string;
	slug: string;
	date: string;
	image: string;
	description: string;
	published: boolean;
	tags: string[];
	displayDate?: string;
};
