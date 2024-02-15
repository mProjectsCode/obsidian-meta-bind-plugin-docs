---
title: Input Field Templates
description: A tutorial for Meta Bind Input Field Templates.
---

Templates allow you to reuse input fields across your vault.
You can specify them in the plugins settings.

## Using Templates

First, we need to create a template in the plugin settings.
Let's create a template for a slider as follows.

| Template Name    | Template String                                       |
| ---------------- | ----------------------------------------------------- |
| `sliderTemplate` | `INPUT[slider(addLabels, minValue(0), maxValue(10))]` |

Notice that the template is **not** bound to any metadata.

To use the template, we open a note and write the following.

```meta-bind
INPUT[templateName][overrides]
```

Here, `overrides` may consist of an input field type, arguments and a bind target.
It can also be empty if you don't want to override anything from the template.

For example, if we want to use the `sliderTemplate` for some `rating` we have in frontmatter, we would write:

```meta-bind
INPUT[sliderTemplate][:rating]
```

We have set `templateName` to `sliderTemplate` (telling meta-bind to use the template we created earlier), and in the `overrides` we bind the input field to the frontmatter property `rating`.
