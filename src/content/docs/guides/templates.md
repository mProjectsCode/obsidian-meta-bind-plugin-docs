---
title: Templates
description: A tutorial for Meta Bind Templates.
---

Templates allow you to reuse input fields across your vault. You can specify them in the plugins settings.

## Using Templates

First we need to create a template in the plugin settings. Let's create the following template.

| Template Name    | Template String                                      |
|------------------|------------------------------------------------------|
| `sliderTemplate` | `INPUT[slider(addLabels, minValue(0), maxValue(10)]` |

Notice that the template is not bound to any metadata.

Then we can go into our note and use the template.

To use the template we need to follow the following syntax.

```
INPUT[templateName][overrides]
```

Where `overrides` may consist of an input field type, arguments and a bind target. 
Overrides can also be empty if you don't want to override anything.

In our case this would look like this.

```
INPUT[sliderTemplate][:rating]
```

We use the `sliderTemplate` as the base and adds a bind target pointing to `rating`.



