# hellosantosh.github.io

Santosh Shanbhag's personal site, live at **https://hellosantosh.github.io**.

It's built with [Astro](https://astro.build) and deploys to GitHub Pages automatically on every push to `main`. The site lives in [`gh-pages/`](gh-pages/).

## Updating the site

You can edit content in two ways. Both produce Markdown or YAML files in this repo.

### Option 1: in the browser (no code editor)

Go to **https://hellosantosh.github.io/admin/** and sign in with GitHub. The editor ([Sveltia CMS](https://github.com/sveltia/sveltia-cms)) lets you write posts, edit topics and pages, and update your learning journey. Saving commits straight to `main`, and the site redeploys in about a minute.

Signing in: choose **Sign in with Token** and paste a GitHub [fine-grained personal access token](https://github.com/settings/personal-access-tokens/new) that has **Contents: Read and write** access to this repository only. In Chrome or Edge, you can instead choose **Work with Local Repository** to edit a local clone without a token.

### Option 2: edit files directly

| To change…                           | Edit                                                   |
| ------------------------------------ | ------------------------------------------------------ |
| Write a new post                     | Add `gh-pages/src/content/posts/my-post-name.md`        |
| A topic's intro, books, courses, …   | `gh-pages/src/content/topics/<topic>.md`                |
| About, Projects, or a new page       | `gh-pages/src/content/pages/<page>.md` (→ `/<page>/`)   |
| Courses, certifications, licenses    | `gh-pages/src/data/learning.yaml`                       |
| Name, tagline, social links, nav     | `gh-pages/src/site.config.ts`                           |
| Your photo                           | Replace `gh-pages/src/assets/santosh.jpg`               |

A post looks like this:

```markdown
---
title: Why I rebuilt my site
description: One or two sentences shown in post lists and search results.
date: 2026-09-22
topics: [architecture, ai] # optional; file names from src/content/topics/
draft: false # true = visible locally only
---

Write in Markdown here. Put images in `src/assets/posts/` and reference them as
![Alt text](../../assets/posts/diagram.png).
```

The file name becomes the URL, so `my-post-name.md` is published at `/blog/my-post-name/`. The home page, archive, topic pages, and RSS feed update automatically.

## Running locally

Requires Node.js 22.12 or later.

Run these from the repo root (or from `gh-pages/`; both work):

```sh
npm install
npm run dev     # http://localhost:4321, shows drafts
npm run build   # production build in dist/
npm run check   # type-check content and components
```
