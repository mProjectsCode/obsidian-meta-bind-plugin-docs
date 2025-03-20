---
title: Buttons
description: A tutorial for buttons, a spiritual successor the the buttons plugin.
---

Button are well... Buttons, inside your notes.
They can be configured to do a variety of things, like opening a file, running a command, or even running a JavaScript file.

:::note
A list of button actions, their required properties, and examples can be found in the sidebar under `Reference -> Button Actions`.
:::

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

Buttons declared in the plugin's settings under `Button Templates` can be referenced by inline buttons in every note.

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

The YAML configuration of a button must adhere to the following TypeScript interface.

```ts
interface ButtonConfig {
	// Required fields:
	// The text displayed on the button.
	label: string;
	// The style of the button.
	style: 'default' | 'primary' | 'destructive' | 'plain';

	// Optional fields:
	// An optional lucide icon to display on the button.
	icon?: string;
	// Optional CSS classes to add to the button. Multiple classes can be separated by spaces.
	class?: string;
	// Optional CSS inline stiles to apply to the button.
	cssStyle?: string;
	// Optional path to a background image for the button.
	backgroundImage?: string;
	// Optional tooltip to display when hovering over the button. If not set, the label is used.
	tooltip?: string;
	// The optional id of the button, used for referencing the button in inline buttons.
	id?: string;
	// Whether this button should be hidden, useful when only using the button in inline buttons.
	hidden?: boolean;

	// Button Actions:
	// The action to perform when the button is clicked.
	action?: ButtonAction;
	// Optionally multiple actions can be performed when the button is clicked.
	actions?: ButtonAction[];
}
```

`action` and `actions` are mutually exclusive, meaning that only one of them can be used.

For examples of how to style buttons with CSS classes, see the [`Styling and CSS`](/obsidian-meta-bind-plugin-docs/guides/stylingandcss/#button-styling-example) page.

## Button Actions

Button actions can require multiple properties depending on the type of action, but every action has a `type` property, by which it is identified.

A list of button actions and their required properties can be found in the sidebar under `Reference -> Button Actions`.
