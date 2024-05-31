---
title: Obsidian Publish Support
description: A tutorial for setting up Meta Bind to work in publish.
---

:::danger

I am currently waiting for the Obsidian Team to deliver on promised improvements to the Obsidian Publish API.
Until then, Meta Binds publish support will be broken.

Use at your own risk. I do not accept issues and feature requests for publish specific issues at this point in time.

:::

This guide assumes that you already have Obsidian Publish set up with a custom domain, so that you can use a `publish.js` file.

To get meta bind working in Obsidian Publish, you need to copy the contents of [this file](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/master/PublishLoad.js) into your `publish.js` file.
For the correct appearance, you need to copy [this file](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/master/styles.css) into your `publish.css` file.
