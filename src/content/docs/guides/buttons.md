---
title: Buttons
description: A tutorial for buttons, a spiritual successor the the buttons plugin.
---

Button are well... Buttons, inside your notes.
They can be configured to do a variety of things, like opening a file, running a command, or even running a JavaScript file.

## Creating a button

:::tip
Buttons can be easily created using the `Open Button Builder` command.
:::

To create a button, you need to create a code block with the language set to `meta-bind-button`.
The inside of the code block belongs the configuration in YAML format for the button.

The following example button displays `Meta Bind Help` and opens the meta bind FAQ page.

````custom_markdown
```meta-bind-button
style: primary
label: Meta Bind Help
action:
  type: command
  command: obsidian-meta-bind-plugin:mb-open-faq
```
````

## Inline Buttons

Inline buttons are buttons that are displayed inline with the text.
They are created using inline code blocks starting with `BUTTON`.
Inline buttons must reference a button code block defined elsewhere in the **same note** via matching ids.

The following example button inline button references the code block button with the `help-button` id below it.
By referencing the button code block, the inline button will have the same configuration as the code block button.
The code block button can be hidden by setting the `hidden` YAML property to `true`.

````custom_markdown "BUTTON[help-button]" {6}
Meta Bind has an in plugin help page. `BUTTON[help-button]` Isn't that cool?

```meta-bind-button
style: primary
label: Meta Bind Help
id: help-button
action:
  type: command
  command: obsidian-meta-bind-plugin:open-faq
```
````

## Button Groups

Inline buttons can display multiple buttons in a row.
For this, multiple button ids separated by commas need to be passed to the `BUTTON` inline code block.

The following example displays a button group of two buttons.

````custom_markdown "BUTTON[light-mode, dark-mode]" {6-7, 16-17}
Theme Switcher: `BUTTON[light-mode, dark-mode]`

```meta-bind-button
style: destructive
label: Light Mode
id: light-mode
hidden: true
actions:
  - type: command
    command: theme:use-light
```

```meta-bind-button
style: primary
label: Dark Mode
id: dark-mode
hidden: true
actions:
  - type: command
    command: theme:use-dark
```
````

## Button Configuration

### Button Properties

The YAML configuration of a button has must follow the following TypeScript interface.

```ts
interface ButtonConfig {
	label: string; // The text displayed on the button
	style: 'default' | 'primary' | 'destructive' | 'plain'; // The style of the button
	class?: string; // Optional CSS classes to add to the button. Multiple classes can be separated by spaces
	tooltip?: string; // Optional tooltip to display when hovering over the button. If not set, the label is used
	id?: string; // The optional id of the button, used for referencing the button in inline buttons
	hidden?: boolean; // Whether this button should be hidden, useful when only using the button in inline buttons
	action?: ButtonAction; // The action to perform when the button is clicked
	actions?: ButtonAction[]; // Optionally multiple actions can be performed when the button is clicked
}
```

`action` and `actions` are mutually exclusive, meaning that only one of them can be used.

## Button Actions

Button actions can require multiple properties depending on the type of action, but every action has a `type` property, by which it is identified.

### Command Action

The command action runs an obsidian command.

```ts
interface CommandButtonAction {
	type: 'command';
	command: string; // the id of the command to run
}
```

#### Example

This button opens the Meta Bind FAQ page in obsidian.

````custom_markdown {5-6}
```meta-bind-button
style: primary
label: Meta Bind Help
action:
  type: command
  command: obsidian-meta-bind-plugin:open-faq
```
````

### Run JavaScript Action

The run JavaScript action runs a JavaScript file.

:::note
This requires the [JS Engine](https://github.com/mProjectsCode/obsidian-js-engine-plugin) plugin to be installed and enabled.
:::

```ts
interface JSButtonAction {
	type: 'js';
	file: string; // the path to the JavaScript file to run, relative to the vault root
}
```

#### Example

````custom_markdown {5-6}
```meta-bind-button
style: primary
label: Run JavaScript
action:
  type: js
  file: someScript.js
```
````

With the following `someScript.js` file in the vault root.

```js title="someScript.js"
console.log('Hello World!');
```

You should see the string `Hello World!` printed to the console, when you click the button.

### Open Action

The open file action opens a file or URL.

```ts
interface OpenButtonAction {
	type: 'open';
	link: string; // the file link ([[file]]) or URL (https://www.example.com) to open
}
```

#### Example

This button opens the Meta Bind Docs in your default browser.

````custom_markdown {5-6}
```meta-bind-button
style: primary
label: Open Meta Bind Docs
action:
  type: open
  link: https://www.moritzjung.dev/obsidian-meta-bind-plugin-docs/
```
````

### Input Action

The input action inserts text at the current cursor position in the focused element.

```ts
interface InputButtonAction {
	type: 'input';
	str: string; // the string to insert
}
```

#### Example

This button opens the command palette and inserts the string `help`.
Resulting in the command palette being opened with `help` already typed in the search bar.

````custom_markdown {7-8}
```meta-bind-button
style: primary
label: Help Commands
actions:
  - type: command
    command: command-palette:open
  - type: input
    str: help
```
````

### Sleep Action

The sleep action waits for a specified amount of time.

```ts
interface SleepButtonAction {
	type: 'sleep';
	ms: number; // the time to wait in milliseconds
}
```

#### Example

This button will open the command palette, wait for 1 second, and then type `help` into the search bar.

````custom_markdown {7-8}
```meta-bind-button
style: primary
label: Sleep
actions:
  - type: command
    command: command-palette:open
  - type: sleep
    ms: 1000
  - type: input
    str: help
```
````

### Templater Create Note Action

The templater create note action creates a new note using a [Templater](https://github.com/SilentVoid13/Templater) template.

```ts
interface TemplaterCreateNoteButtonAction {
	type: 'templaterCreateNote';
	templateFile: string; // the path to the template file, relative to the vault root
	folderPath?: string; // the optional path to the folder to create the note in, relative to the vault root
	fileName?: string; // the optional name of the file to create
	openNote?: boolean; // whether to open the created note
}
```

#### Example

This button creates a new note titled `New Lecture Note - RENAME ME` in the `Lectures` folder using the `Lecture Template`
template from the `templates` folder.

````custom_markdown {5-8}
```meta-bind-button
style: primary
label: Create Lecture Note
actions:
  - type: templaterCreateNote
    templateFile: "templates/Lecture Template.md"
    folderPath: Lectures
    fileName: "New Lecture Note - RENAME ME"
```
````

### Update Metadata Action

The update metadata action allows you to update a specific property specified via a [Bind Target](/obsidian-meta-bind-plugin-docs/guides/bindtargets).
This property can be any valid [Bind Target](/obsidian-meta-bind-plugin-docs/guides/bindtargets) such as the frontmatter of a file.

```ts
interface UpdateMetadataButtonAction {
	type: 'updateMetadata';
	bindTarget: string; // the bind target of the property to update
	evaluate: boolean; // whether to treat the value as a JavaScript expression
	value: string; // the value to set the property to or the JavaScript expression to evaluate
}
```

If `evaluate` is set to `true`, the value is treated as a JavaScript expression and evaluated.
The current value of the property is available in the expression as `x`.

#### Example

This button group allows you to increment, decrement, and reset a counter stored in the frontmatter of the current file.

````custom_markdown {7-10,19-22,31-34} "BUTTON[count-decrement, count-reset, count-increment]"
```meta-bind-button
label: "+1"
hidden: true
id: "count-increment"
style: default
actions:
  - type: updateMetadata
    bindTarget: count
    evaluate: true
    value: x + 1
```

```meta-bind-button
label: "-1"
hidden: true
id: "count-decrement"
style: default
actions:
  - type: updateMetadata
    bindTarget: count
    evaluate: true
    value: x - 1
```

```meta-bind-button
label: "Reset"
hidden: true
id: "count-reset"
style: default
actions:
  - type: updateMetadata
    bindTarget: count
    evaluate: false
    value: 0
```

`BUTTON[count-decrement, count-reset, count-increment]` `VIEW[{count}]`
````
