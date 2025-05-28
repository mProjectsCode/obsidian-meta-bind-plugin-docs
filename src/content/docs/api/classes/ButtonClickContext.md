---
editUrl: false
next: false
prev: false
title: "ButtonClickContext"
---

Defined in: [packages/core/src/config/ButtonConfig.ts:210](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/config/ButtonConfig.ts#L210)

Provides information about the button click event.

## Constructors

### Constructor

> **new ButtonClickContext**(`type`, `shiftKey`, `ctrlKey`, `altKey`): `ButtonClickContext`

Defined in: [packages/core/src/config/ButtonConfig.ts:216](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/config/ButtonConfig.ts#L216)

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`type`

</td>
<td>

[`ButtonClickType`](/obsidian-meta-bind-plugin-docs/api/enumerations/buttonclicktype/)

</td>
</tr>
<tr>
<td>

`shiftKey`

</td>
<td>

`boolean`

</td>
</tr>
<tr>
<td>

`ctrlKey`

</td>
<td>

`boolean`

</td>
</tr>
<tr>
<td>

`altKey`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

`ButtonClickContext`

## Properties

### altKey

> **altKey**: `boolean`

Defined in: [packages/core/src/config/ButtonConfig.ts:214](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/config/ButtonConfig.ts#L214)

***

### ctrlKey

> **ctrlKey**: `boolean`

Defined in: [packages/core/src/config/ButtonConfig.ts:213](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/config/ButtonConfig.ts#L213)

***

### shiftKey

> **shiftKey**: `boolean`

Defined in: [packages/core/src/config/ButtonConfig.ts:212](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/config/ButtonConfig.ts#L212)

***

### type

> **type**: [`ButtonClickType`](/obsidian-meta-bind-plugin-docs/api/enumerations/buttonclicktype/)

Defined in: [packages/core/src/config/ButtonConfig.ts:211](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/config/ButtonConfig.ts#L211)

## Methods

### openInNewTab()

> **openInNewTab**(): `boolean`

Defined in: [packages/core/src/config/ButtonConfig.ts:233](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/config/ButtonConfig.ts#L233)

Whether the click should cause a link to open in a new tab.
Only applicable when the click is on a link.

#### Returns

`boolean`

***

### fromMouseEvent()

> `static` **fromMouseEvent**(`event`, `type`): `ButtonClickContext`

Defined in: [packages/core/src/config/ButtonConfig.ts:223](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/config/ButtonConfig.ts#L223)

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`event`

</td>
<td>

[`MouseEvent`](https://developer.mozilla.org/docs/Web/API/MouseEvent)

</td>
</tr>
<tr>
<td>

`type`

</td>
<td>

[`ButtonClickType`](/obsidian-meta-bind-plugin-docs/api/enumerations/buttonclicktype/)

</td>
</tr>
</tbody>
</table>

#### Returns

`ButtonClickContext`
