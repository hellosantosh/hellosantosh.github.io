---
title: Hello, world
description: A sample post showing how to write for this site. Delete it or set draft to false.
date: 2026-09-22
topics: [engineering]
draft: true
---

This post is a **draft**, so it shows up when you run `npm run dev` but not on the live site.

## Writing a new post

1. Add a Markdown file to `src/content/posts/`. The file name becomes the URL, so `my-first-post.md` is published at `/blog/my-first-post/`.
2. Fill in the front matter at the top: `title`, `description`, `date`, and optionally `topics`.
3. Commit and push. The site rebuilds and deploys itself.

You can also write posts in the browser at [/admin](/admin/).

## Formatting

Everything Markdown supports works here, including tables, code blocks, and quotes.

> Simplicity is prerequisite for reliability. — Edsger Dijkstra

```ts
const greeting = (name: string) => `Hello, ${name}!`;
```

| Topic        | Status      |
| ------------ | ----------- |
| Architecture | In progress |
| AI           | Always      |
