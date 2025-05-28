---
editUrl: false
next: false
prev: false
title: "FieldMountable"
---

Defined in: [packages/core/src/fields/FieldMountable.ts:4](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/fields/FieldMountable.ts#L4)

## Extends

- [`Mountable`](/obsidian-meta-bind-plugin-docs/api/classes/mountable/)

## Constructors

### Constructor

> **new FieldMountable**(`mb`, `uuid`, `filePath`): `FieldMountable`

Defined in: [packages/core/src/fields/FieldMountable.ts:9](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/fields/FieldMountable.ts#L9)

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

`mb`

</td>
<td>

`MetaBind`

</td>
</tr>
<tr>
<td>

`uuid`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`filePath`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

#### Returns

`FieldMountable`

#### Overrides

[`Mountable`](/obsidian-meta-bind-plugin-docs/api/classes/mountable/).[`constructor`](/obsidian-meta-bind-plugin-docs/api/classes/mountable/#constructor)

## Properties

### mb

> `readonly` **mb**: `MetaBind`

Defined in: [packages/core/src/fields/FieldMountable.ts:5](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/fields/FieldMountable.ts#L5)

## Methods

### getFilePath()

> **getFilePath**(): `string`

Defined in: [packages/core/src/fields/FieldMountable.ts:21](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/fields/FieldMountable.ts#L21)

#### Returns

`string`

***

### getTargetEl()

> **getTargetEl**(): `undefined` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

Defined in: [packages/core/src/utils/Mountable.ts:22](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/utils/Mountable.ts#L22)

Get the element that the mountable is currently mounted to.

#### Returns

`undefined` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

#### Inherited from

[`Mountable`](/obsidian-meta-bind-plugin-docs/api/classes/mountable/).[`getTargetEl`](/obsidian-meta-bind-plugin-docs/api/classes/mountable/#gettargetel)

***

### getUuid()

> **getUuid**(): `string`

Defined in: [packages/core/src/fields/FieldMountable.ts:17](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/fields/FieldMountable.ts#L17)

#### Returns

`string`

***

### isMounted()

> **isMounted**(): `boolean`

Defined in: [packages/core/src/utils/Mountable.ts:15](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/utils/Mountable.ts#L15)

Check if the mountable is currently mounted.

#### Returns

`boolean`

#### Inherited from

[`Mountable`](/obsidian-meta-bind-plugin-docs/api/classes/mountable/).[`isMounted`](/obsidian-meta-bind-plugin-docs/api/classes/mountable/#ismounted)

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

#### Inherited from

[`Mountable`](/obsidian-meta-bind-plugin-docs/api/classes/mountable/).[`mount`](/obsidian-meta-bind-plugin-docs/api/classes/mountable/#mount)

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

#### Inherited from

[`Mountable`](/obsidian-meta-bind-plugin-docs/api/classes/mountable/).[`registerUnmountCb`](/obsidian-meta-bind-plugin-docs/api/classes/mountable/#registerunmountcb)

***

### unmount()

> **unmount**(): `void`

Defined in: [packages/core/src/utils/Mountable.ts:70](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/utils/Mountable.ts#L70)

Unmount the mountable from the current element.

#### Returns

`void`

#### Inherited from

[`Mountable`](/obsidian-meta-bind-plugin-docs/api/classes/mountable/).[`unmount`](/obsidian-meta-bind-plugin-docs/api/classes/mountable/#unmount)
