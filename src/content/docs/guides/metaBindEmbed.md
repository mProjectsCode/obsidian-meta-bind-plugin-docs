---
title: Meta Bind Embed
description: A tutorial for the Meta Bind Embed.
---

Meta Bind Embeds are a way to embed a note inside another note, which works a bit differently than the normal Obsidian embeds.

Together with Meta Binds other features, they allow you to build dynamic templates.
The major disadvantage with a traditional template based approach is that modifications to the templates don't automatically apply to all notes created using that template.
Meta Bind Embeds on the other hand propagate changes to the "template" to all notes embedding it instantly, since the "template" file is read every time the note renders and not just once when the note is created.

## Differences to Obsidian Embeds

Let's say you have a note called `Note A` that you want to embed in `Note B`.

Using the normal Obsidian embeds, you would write `![[Note A]]` in `Note B`.
This embeds the note, but it's not seamless.
The content of `Note A` still thinks it's part of `Note A` and not `NoteB`.
This means any widgets like [Input Fields](/obsidian-meta-bind-plugin-docs/guides/inputfields) in the embed will bind to and change the frontmatter of `Note A` instead of `Note B`.

This is where Meta Bind Embeds come in.
They seamlessly embed `Note A` and make it think it is a part of `Note B`.
Meaning any [Input Fields](/obsidian-meta-bind-plugin-docs/guides/inputfields) in the embed will bind to `Note B` and not `Note A`.
And this even extends to markdown decorations added by other plugins.

## Syntax

Meta Bind Embeds are created using a code block with the language `meta-bind-embed`.
The content of the code block is a single link to the note you want to embed.

The following example embeds `Note A` in `Note B`.

````md
This is Note B.

```meta-bind-embed
[[Note A]]
```
````
