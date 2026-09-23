import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;
export type Topic = CollectionEntry<'topics'>;

/** Published posts, newest first. Drafts appear only in `npm run dev`. */
export async function getPosts(): Promise<Post[]> {
	const posts = await getCollection('posts', ({ data }) => import.meta.env.DEV || !data.draft);
	return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getTopics(): Promise<Topic[]> {
	const topics = await getCollection('topics');
	return topics.sort((a, b) => a.data.order - b.data.order);
}

export function postsInTopic(posts: Post[], topicId: string): Post[] {
	return posts.filter((post) => post.data.topics.some((t) => t.id === topicId));
}

export function readingTime(body = ''): string {
	const words = body.trim().split(/\s+/).filter(Boolean).length;
	return `${Math.max(1, Math.round(words / 225))} min read`;
}

export function formatDate(date: Date, style: 'long' | 'short' = 'long'): string {
	return date.toLocaleDateString('en-US', {
		year: 'numeric',
		month: style === 'long' ? 'long' : 'short',
		day: 'numeric',
		timeZone: 'UTC',
	});
}
