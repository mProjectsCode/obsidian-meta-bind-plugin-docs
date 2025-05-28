---
title: Input Fields
description: A tutorial for Meta Bind Input Fields.
---

Input fields allow you to create input fields for your notes metadata and interact with them in live preview and reading mode.
A bit like Obsidians properties UI, but not just at the top of your note.

### Creating Input Fields

There are two ways of creating an input field in your note.

The first is using an **inline** code block, like this `INPUT[inputType]`.
The second one is using a **code block** with meta-bind as the language, something like this.

````custom_markdown
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
This is achieved by adding the bind target behind the input type, separated by a colon.

In this example we will build a toggle that toggles the notes completion status by switching the `completed` front-mater field between `true` and `false`.

First, we create a toggle.

```meta-bind
INPUT[toggle]
```

Then we tell it to bind to the `completed` frontmatter field using a [Bind Target](/obsidian-meta-bind-plugin-docs/guides/bindtargets).

```meta-bind ":completed"
INPUT[toggle:completed]
```

And our input field is working. The toggle will change the frontmatter and when the frontmatter changes, the toggle changes.

Of course you can utilize the full functionality of [Bind Targets](/obsidian-meta-bind-plugin-docs/guides/bindtargets) with input field. E.g. the following is possible.

```meta-bind ":memory^completed"
INPUT[toggle:memory^completed]
```

:::note
Specifying a bind target is optional, but recommended.

If you don't specify a bind target, the input field will not preserve its state when you reopen the note or restart Obsidian, since the input field has nowhere to store its data.
:::

An input field will only write to it's bound value when it's interacted with.
This means for example, that an input field does not automatically, on load, create it's bound property when that property does not yet exist.

## Arguments

Some input types support arguments to further customize them.
Arguments are specified in parentheses behind the input type.

Let's say we want to create a dropdown select where you can choose between different ratings. For this we will use the `inlineSelect` input field.
To add options to the dropdown select we will use the `option(name)` argument.

```meta-bind
INPUT[inlineSelect(
    option(bad),
    option(meh),
    option(ok),
    option(good),
    option(great)
):rating]
```

Now we can see four options in the dropdown.

If we want numeric values to represent the rating in our frontmatter, we can pass two values to `option(value, name)`.`value` will be the value written to the frontmatter and `name` will be the value displayed in the dropdown select.

```meta-bind
INPUT[inlineSelect(
    option(1, bad),
    option(2, meh),
    option(3, ok),
    option(4, good),
    option(5, great)
):rating]
```

We can also include commas in our value names by surrounding them with single quotes. Note that only single quotes are supported, double quotes will not work.

```meta-bind
INPUT[inlineSelect(
    option(1, 'if you value your time, do not watch'),
    ...
):rating]
```

Such strings also support escaping using a backslash. To have a single backslash in the name you can use a double backslash `\\`.

```meta-bind
INPUT[inlineSelect(
    option(1, 'if you value your time, don\'t watch'),
    ...
):rating]
```
