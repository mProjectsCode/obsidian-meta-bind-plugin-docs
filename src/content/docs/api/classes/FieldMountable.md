---
editUrl: false
next: false
prev: false
title: "FieldMountable"
---

## Extends

- [`Mountable`](/obsidian-meta-bind-plugin-docs/api/classes/mountable/)

## Constructors

### new FieldMountable()

> **new FieldMountable**(`plugin`, `uuid`, `filePath`): [`FieldMountable`](/obsidian-meta-bind-plugin-docs/api/classes/fieldmountable/)

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

`plugin`

</td>
<td>

`IPlugin`

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

[`FieldMountable`](/obsidian-meta-bind-plugin-docs/api/classes/fieldmountable/)

#### Overrides

[`Mountable`](/obsidian-meta-bind-plugin-docs/api/classes/mountable/).[`constructor`](/obsidian-meta-bind-plugin-docs/api/classes/mountable/#constructors)

#### Defined in

[packages/core/src/fields/FieldMountable.ts:9](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/46993a4bea44fea6720d8d001cc5324f264501f1/packages/core/src/fields/FieldMountable.ts#L9)

## Properties

### plugin

> `readonly` **plugin**: `IPlugin`

#### Defined in

[packages/core/src/fields/FieldMountable.ts:5](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/46993a4bea44fea6720d8d001cc5324f264501f1/packages/core/src/fields/FieldMountable.ts#L5)

## Methods

### getFilePath()

> **getFilePath**(): `string`

#### Returns

`string`

#### Defined in

[packages/core/src/fields/FieldMountable.ts:21](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/46993a4bea44fea6720d8d001cc5324f264501f1/packages/core/src/fields/FieldMountable.ts#L21)

***

### getTargetEl()

> **getTargetEl**(): `undefined` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

Get the element that the mountable is currently mounted to.

#### Returns

`undefined` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

#### Inherited from

[`Mountable`](/obsidian-meta-bind-plugin-docs/api/classes/mountable/).[`getTargetEl`](/obsidian-meta-bind-plugin-docs/api/classes/mountable/#gettargetel)

#### Defined in

[packages/core/src/utils/Mountable.ts:22](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/46993a4bea44fea6720d8d001cc5324f264501f1/packages/core/src/utils/Mountable.ts#L22)

***

### getUuid()

> **getUuid**(): `string`

#### Returns

`string`

#### Defined in

[packages/core/src/fields/FieldMountable.ts:17](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/46993a4bea44fea6720d8d001cc5324f264501f1/packages/core/src/fields/FieldMountable.ts#L17)

***

### isMounted()

> **isMounted**(): `boolean`

Check if the mountable is currently mounted.

#### Returns

`boolean`

#### Inherited from

[`Mountable`](/obsidian-meta-bind-plugin-docs/api/classes/mountable/).[`isMounted`](/obsidian-meta-bind-plugin-docs/api/classes/mountable/#ismounted)

#### Defined in

[packages/core/src/utils/Mountable.ts:15](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/46993a4bea44fea6720d8d001cc5324f264501f1/packages/core/src/utils/Mountable.ts#L15)

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

#### Inherited from

[`Mountable`](/obsidian-meta-bind-plugin-docs/api/classes/mountable/).[`mount`](/obsidian-meta-bind-plugin-docs/api/classes/mountable/#mount)

#### Defined in

[packages/core/src/utils/Mountable.ts:50](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/46993a4bea44fea6720d8d001cc5324f264501f1/packages/core/src/utils/Mountable.ts#L50)

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

#### Inherited from

[`Mountable`](/obsidian-meta-bind-plugin-docs/api/classes/mountable/).[`registerUnmountCb`](/obsidian-meta-bind-plugin-docs/api/classes/mountable/#registerunmountcb)

#### Defined in

[packages/core/src/utils/Mountable.ts:85](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/46993a4bea44fea6720d8d001cc5324f264501f1/packages/core/src/utils/Mountable.ts#L85)

***

### unmount()

> **unmount**(): `void`

Unmount the mountable from the current element.
Will throw an error if the mountable is not mounted.

#### Returns

`void`

#### Inherited from

[`Mountable`](/obsidian-meta-bind-plugin-docs/api/classes/mountable/).[`unmount`](/obsidian-meta-bind-plugin-docs/api/classes/mountable/#unmount)

#### Defined in

[packages/core/src/utils/Mountable.ts:65](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/46993a4bea44fea6720d8d001cc5324f264501f1/packages/core/src/utils/Mountable.ts#L65)
