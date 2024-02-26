---
title: Bind Targets
description: A tutorial for Meta Bind's Bind Targets.
---

Bind Targets are a core concept of Meta Bind.
They are a text based way to point the plugin at a specific frontmatter property.
This tutorial will teach you how to use them.

## Syntax

Bind Targets consist of three parts.

```meta-bind
storageType^storagePath#property
```

Certain parts can be omitted, causing them to default to their default values.

The following bind target will always use the default storage type `frontmatter`,
meaning it points to a frontmatter property.

```meta-bind
storagePath#property
```

The following bind targets will always use the current file as the storage path.

```meta-bind
property

storageType^property
```

This means that the following bind targets are **equivalent**, assuming the current file is `Test Note`.

```meta-bind
property

frontmatter^Test Note#property
```

### 1. The Storage Type

The storage type tells the plugin where the storage path is pointing to.
There are four different storage types.
The default is `frontmatter` and will be used if you don't specify a storage type.

| Storage Type            | Description                                                                    |
| ----------------------- | ------------------------------------------------------------------------------ |
| `frontmatter` (default) | The storage path points to a file and the property to a frontmatter field.     |
| `memory`                | The storage path points to a file and the property to an in memory field.      |
| `globalMemory`          | The storage path is not allowed and the property points to an in memory field. |
| `scope`                 | The storage path is not allowed and the property extends another bind target.  |

### 2. The Storage Path

The storage path usually points to a file.
If it is omitted, the current file is used.

#### Example

Let's imagine we are in a note called `Overview` and we want our toggle not to change this note's completion status, but the status of our task note called `Task A`.
This is also possible. We just need to tell the plugin to change `completed` in note `Task A`. We do this by binding to `Task A#completed` (`file_name#frontmatter_field`).

The input field declaration now looks like this.

```meta-bind "Task A#completed"
INPUT[toggle:Task A#completed]
```

If you have multiple notes with the same name, simply specifying the name will not be enough, as the plugin can't figure out which one you are referring to.
In that case you need to specify the full path relative to the vault root.

```meta-bind "path/to/Task A#completed"
INPUT[toggle:path/to/Task A#completed]
```

### 3. The Property

The property is the name of the field you want to bind to.
For the default storage type `frontmatter`, this is the name of the frontmatter property.

#### Properties with Spaces and Nested Properties

The plugin uses JavaScript-like syntax to access the frontmatter.
This means that in order to bind to a frontmatter field with special characters such as spaces,
you need to use JavaScript's bracket syntax.

This will **not** work.

```meta-bind "is completed"
INPUT[toggle:is completed]
```

But this will.

```meta-bind '["is completed"]'
INPUT[toggle:["is completed"]]
```

To access nested frontmatter fields, you can use a simple `.` or bracket syntax.
The following two examples are **equivalent**.

```meta-bind "this.is.nested"
INPUT[toggle:this.is.nested]
```

```meta-bind 'this["is"].nested'
INPUT[toggle:this["is"].nested]
```

## Limitations

Bind targets are static, meaning that they can not be changed after they have been created.
This means that you can not have a property that controls where a bind target points to.
