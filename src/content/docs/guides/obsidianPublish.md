---
title: Obsidian Publish Support
description: A tutorial for setting up Meta Bind to work in publish.
---

This guide assumes that you already have Obsidian Publish set up with a custom domain, so that you can use a `publish.js` file.

To get meta bind working in Obsidian Publish, you need to copy the contents of [this file](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/master/PublishLoad.js) into your `publish.js` file.
For the correct appearance, you need to copy [this file](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/master/styles.css) into your `publish.css` file.

## What it can do and what it can't

For input fields, due to the limited publish API, the plugin will only display the bound metadata instead of showing input field.

View fields should be mostly functional.

Binding to metadata of a different note is not possible for both fields.

