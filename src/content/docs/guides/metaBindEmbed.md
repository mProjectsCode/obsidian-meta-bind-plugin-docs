---
title: Meta Bind Embed
description: A tutorial for the Meta Bind Embed.
---

Meta Bind Embeds are a way to embed a note inside another note, which works a bit differently than the normal Obsidian embeds.

Let's say you have a note called `Note A` that you want to embed in `Note B`.

Using the normal Obsidian embeds, you would write `![[Note A]]` in `Note B`.
This would embed the note, but it's not seamless and the content of `Note A` still thinks it's in `Note A` and not `NoteB`.
This means any [Input Fields](/obsidian-meta-bind-plugin-docs/guides/inputfields) in `Note A` will still bind to `Note A` and not `Note B`
(as long as no file path is specified as part of the [Bind Target](/obsidian-meta-bind-plugin-docs/guides/bindtargets) of the [Input Fields](/obsidian-meta-bind-plugin-docs/guides/inputfields).

This is where Meta Bind Embeds come in.
They seamlessly embed `Note A` and make it think it is a part of `Note B`.
Meaning any [Input Fields](/obsidian-meta-bind-plugin-docs/guides/inputfields) in `Note A` will bind to `Note B` and not `Note A`.
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
