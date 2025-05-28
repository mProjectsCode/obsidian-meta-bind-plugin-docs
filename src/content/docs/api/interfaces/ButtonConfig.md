---
editUrl: false
next: false
prev: false
title: "ButtonConfig"
---

Defined in: [packages/core/src/config/ButtonConfig.ts:151](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/config/ButtonConfig.ts#L151)

## Properties

### action?

> `optional` **action**: [`ButtonAction`](/obsidian-meta-bind-plugin-docs/api/type-aliases/buttonaction/)

Defined in: [packages/core/src/config/ButtonConfig.ts:193](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/config/ButtonConfig.ts#L193)

A single action to run when the button is clicked
Mutually exclusive with `actions`

***

### actions?

> `optional` **actions**: [`ButtonAction`](/obsidian-meta-bind-plugin-docs/api/type-aliases/buttonaction/)[]

Defined in: [packages/core/src/config/ButtonConfig.ts:198](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/config/ButtonConfig.ts#L198)

Multiple actions to run when the button is clicked
Mutually exclusive with `action`

***

### backgroundImage?

> `optional` **backgroundImage**: `string`

Defined in: [packages/core/src/config/ButtonConfig.ts:176](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/config/ButtonConfig.ts#L176)

Optional background image to add to the button,
needed since you can't load images from the vault via pure CSS

***

### class?

> `optional` **class**: `string`

Defined in: [packages/core/src/config/ButtonConfig.ts:167](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/config/ButtonConfig.ts#L167)

Optional CSS class to add to the button

***

### cssStyle?

> `optional` **cssStyle**: `string`

Defined in: [packages/core/src/config/ButtonConfig.ts:171](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/config/ButtonConfig.ts#L171)

Optional CSS styles to add to the button

***

### hidden?

> `optional` **hidden**: `boolean`

Defined in: [packages/core/src/config/ButtonConfig.ts:188](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/config/ButtonConfig.ts#L188)

Whether the button is hidden

***

### icon?

> `optional` **icon**: `string`

Defined in: [packages/core/src/config/ButtonConfig.ts:159](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/config/ButtonConfig.ts#L159)

Optional icon to display in front of the label

***

### id?

> `optional` **id**: `string`

Defined in: [packages/core/src/config/ButtonConfig.ts:184](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/config/ButtonConfig.ts#L184)

Optional ID for use in inline buttons

***

### label

> **label**: `string`

Defined in: [packages/core/src/config/ButtonConfig.ts:155](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/config/ButtonConfig.ts#L155)

The text displayed on the button

***

### style

> **style**: [`ButtonStyleType`](/obsidian-meta-bind-plugin-docs/api/enumerations/buttonstyletype/)

Defined in: [packages/core/src/config/ButtonConfig.ts:163](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/config/ButtonConfig.ts#L163)

The style of the button

***

### tooltip?

> `optional` **tooltip**: `string`

Defined in: [packages/core/src/config/ButtonConfig.ts:180](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/config/ButtonConfig.ts#L180)

Optional tooltip to display when hovering over the button
