---
editUrl: false
next: false
prev: false
title: "Mountable"
---

## Extended by

- [`FieldMountable`](/obsidian-meta-bind-plugin-docs/api/classes/fieldmountable/)

## Constructors

### new Mountable()

> **new Mountable**(): [`Mountable`](/obsidian-meta-bind-plugin-docs/api/classes/mountable/)

#### Returns

[`Mountable`](/obsidian-meta-bind-plugin-docs/api/classes/mountable/)

#### Defined in

[packages/core/src/utils/Mountable.ts:6](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/f6219a613aed1d40ff7f62bc1faab53d3dd969bb/packages/core/src/utils/Mountable.ts#L6)

## Methods

### getTargetEl()

> **getTargetEl**(): `undefined` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

Get the element that the mountable is currently mounted to.

#### Returns

`undefined` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

#### Defined in

[packages/core/src/utils/Mountable.ts:22](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/f6219a613aed1d40ff7f62bc1faab53d3dd969bb/packages/core/src/utils/Mountable.ts#L22)

***

### isMounted()

> **isMounted**(): `boolean`

Check if the mountable is currently mounted.

#### Returns

`boolean`

#### Defined in

[packages/core/src/utils/Mountable.ts:15](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/f6219a613aed1d40ff7f62bc1faab53d3dd969bb/packages/core/src/utils/Mountable.ts#L15)

***

### mount()

> **mount**(`targetEl`): `void`

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

#### Defined in

[packages/core/src/utils/Mountable.ts:50](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/f6219a613aed1d40ff7f62bc1faab53d3dd969bb/packages/core/src/utils/Mountable.ts#L50)

***

### registerUnmountCb()

> **registerUnmountCb**(`cb`): `void`

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

#### Defined in

[packages/core/src/utils/Mountable.ts:85](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/f6219a613aed1d40ff7f62bc1faab53d3dd969bb/packages/core/src/utils/Mountable.ts#L85)

***

### unmount()

> **unmount**(): `void`

Unmount the mountable from the current element.
Will throw an error if the mountable is not mounted.

#### Returns

`void`

#### Defined in

[packages/core/src/utils/Mountable.ts:65](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/f6219a613aed1d40ff7f62bc1faab53d3dd969bb/packages/core/src/utils/Mountable.ts#L65)
