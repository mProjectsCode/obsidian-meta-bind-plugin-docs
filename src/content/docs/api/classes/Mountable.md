---
editUrl: false
next: false
prev: false
title: "Mountable"
---

Defined in: [packages/core/src/utils/Mountable.ts:1](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/utils/Mountable.ts#L1)

## Extended by

- [`FieldMountable`](/obsidian-meta-bind-plugin-docs/api/classes/fieldmountable/)

## Constructors

### Constructor

> **new Mountable**(): `Mountable`

Defined in: [packages/core/src/utils/Mountable.ts:6](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/utils/Mountable.ts#L6)

#### Returns

`Mountable`

## Methods

### getTargetEl()

> **getTargetEl**(): `undefined` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

Defined in: [packages/core/src/utils/Mountable.ts:22](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/utils/Mountable.ts#L22)

Get the element that the mountable is currently mounted to.

#### Returns

`undefined` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

***

### isMounted()

> **isMounted**(): `boolean`

Defined in: [packages/core/src/utils/Mountable.ts:15](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/utils/Mountable.ts#L15)

Check if the mountable is currently mounted.

#### Returns

`boolean`

***

### mount()

> **mount**(`targetEl`): `void`

Defined in: [packages/core/src/utils/Mountable.ts:50](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/utils/Mountable.ts#L50)

Mount the mountable to the given element.
Will throw an error if the mountable is already mounted.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`targetEl`

</td>
<td>

[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

</td>
<td>

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

***

### registerUnmountCb()

> **registerUnmountCb**(`cb`): `void`

Defined in: [packages/core/src/utils/Mountable.ts:91](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/utils/Mountable.ts#L91)

Register a callback that will be called when the mountable is unmounted.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`cb`

</td>
<td>

() => `void`

</td>
<td>

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

***

### unmount()

> **unmount**(): `void`

Defined in: [packages/core/src/utils/Mountable.ts:70](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/utils/Mountable.ts#L70)

Unmount the mountable from the current element.

#### Returns

`void`
