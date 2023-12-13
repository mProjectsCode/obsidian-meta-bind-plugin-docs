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

````md
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
Inline buttons must reference a button code block defined elsewhere in the note via matching ids.

The following example button inline button references the code block button with the `help-button` id below it.
By referencing the button code block, the inline button will have the same configuration as the code block button.
The code block button can be hidden by setting the `hidden` YAML property to `true`.

````md
Meta Bind has an in plugin help page. `BUTTON[help-button]` Isn't that cool?

```meta-bind-button
style: primary
label: Meta Bind Help
id: help-button
action:
  type: command
  command: obsidian-meta-bind-plugin:mb-open-faq
```
````

## Button Groups

Inline buttons can display multiple buttons in a row.
For this, multiple button ids separated by commas need to be passed to the `BUTTON` inline code block.

The following example displays a button group of two buttons.

````md
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
	style: "default" | "primary" | "destructive" | "plain"; // The style of the button
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
	type: "command";
	command: string; // the id of the command to run
}
```

#### Example

This button opens the Meta Bind FAQ page in obsidian.

````md
```meta-bind-button
style: primary
label: Meta Bind Help
action:
  type: command
  command: obsidian-meta-bind-plugin:mb-open-faq
```
````

### Run JavaScript Action

The run JavaScript action runs a JavaScript file.

:::note
This requires the [JS Engine](https://github.com/mProjectsCode/obsidian-js-engine-plugin) plugin to be installed and enabled.
:::

```ts
interface JSButtonAction {
    type: "js";
    file: string; // the path to the JavaScript file to run, relative to the vault root
}
```

#### Example

````md
```meta-bind-button
style: primary
label: Run JavaScript
action:
  type: js
  command: someScript.js
```
````

With the following `someScript.js` file in the vault root.

```js
console.log("Hello World!");
```

You should see the string `Hello World!` printed to the console, when you click the button.

### Open Action

The open file action opens a file or URL.

```ts
interface OpenButtonAction {
	type: "open";
	link: string; // the file link ([[file]]) or URL (https://www.example.com) to open
}
```

#### Example

This button opens the Meta Bind Docs in your default browser.

````md
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
	type: "imput";
	str: string; // the string to insert
}
```

#### Example

This button opens the command palette and inserts the string `help`.
Resulting in the command palette being opened with `help` already typed in the search bar.

````md
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
	type: "sleep";
	ms: number; // the time to wait in milliseconds
}
```

#### Example

This button will open the command palette, wait for 1 second, and then type `help` into the search bar.

````md
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
	type: "templaterCreateNote";
	templateFile: string; // the path to the template file, relative to the vault root
	folderPath?: string; // the optional path to the folder to create the note in, relative to the vault root
	fileName?: string; // the optional name of the file to create
	openNote?: boolean; // whether to open the created note
}
```

#### Example

This button creates a new note titled `New Lecture Note - RENAME ME` in the `Lectures` folder using the `Lecture Template` 
template from the `templates` folder.

````md
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