---
title: Input Fields
description: A tutorial for Meta Bind Input Fields.
---

Input fields allow you to create input fields for your notes metadata and interact with them in live preview and reading mode.
A bit like properties, but not just at the top of your note.

### Creating Input Fields

There are two ways of creating an input field in your note.

The first is using an **inline** code block, like this `INPUT[inputType]`.
The second one is using a **code block** with meta-bind as the language, something like this.

````meta-bind
```meta-bind
INPUT[inputType]
```
````

Where `inputType` is a valid input field type, like `toggle`.

## Binding to Metadata

:::tip
You can find an in depth guide on bind targets and what is possible [here](/obsidian-meta-bind-plugin-docs/guides/bindtargets).
:::

Input fields can and should be bound to metadata fields, so properties in your frontmatter.
This is achieved by adding the bind target behind the input type, seperated by a colon.

In this example we will build a toggle that toggles the notes completion status by switching the `completed` front-mater field between `true` and `false`.

First, we create a toggle.

```meta-bind
INPUT[toggle]
```

Then we tell it to bind to the `completed` frontmatter field.

```meta-bind
INPUT[toggle:completed]
```

And our input field is working. The toggle will change the frontmatter and when the frontmatter changes, the toggle changes.

:::note
Specifying a bind target is optional, but recommended.

If you don't specify a bind target, the input field will not preserve its state when you reopen the note or restart Obsidian, since the input field has nowhere to store its data.
:::

## Arguments

Some input types support arguments to further customize them.
Arguments are specified in parentheses behind the input type.

Let's say we want to create a dropdown select where you can choose between different ratings. For this we will use the `inlineSelect` input field.
To add options to the dropdown select we will use the `option(name)` argument.

```meta-bind
INPUT[inlineSelect(
    option(trash),
    option(bad),
    option(ok),
    option(good),
    option(great)
):rating]
```

Now we can see four options in the dropdown.

If we want numeric values to represent the rating in our frontmatter, we can pass two values to `option(value, name)`.`value` will be the value written to the frontmatter and `name` will be the value displayed in the dropdown select.

```meta-bind
INPUT[inlineSelect(
    option(1, trash),
    option(2, bad),
    option(3, ok),
    option(4, good),
    option(5, great)
):rating]
```

We can also include commas in our value names by surrounding them with quotes.

```meta-bind
INPUT[inlineSelect(
    option(1, 'trash, do not watch'),
    ...
):rating]
```

Such strings also support escaping using a backslash. To have a single backslash in the name you can a double backslash `\\`.

```meta-bind
INPUT[inlineSelect(
    option(1, 'trash, don\'t watch'),
    ...
):rating]
```
