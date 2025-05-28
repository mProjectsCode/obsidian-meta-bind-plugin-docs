---
editUrl: false
next: false
prev: false
title: "ObsAPI"
---

Defined in: [packages/obsidian/src/ObsAPI.ts:38](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/obsidian/src/ObsAPI.ts#L38)

Meta Bind API for Obsidian.

## Extends

- `API`\<`ObsComponents`\>

## Constructors

### Constructor

> **new ObsAPI**(`mb`): `ObsAPI`

Defined in: [packages/obsidian/src/ObsAPI.ts:42](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/obsidian/src/ObsAPI.ts#L42)

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

`ObsMetaBind`

</td>
</tr>
</tbody>
</table>

#### Returns

`ObsAPI`

#### Overrides

`API<ObsComponents>.constructor`

## Properties

### mb

> `readonly` **mb**: `MetaBind`\<`ObsComponents`\>

Defined in: [packages/core/src/api/API.ts:63](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/api/API.ts#L63)

#### Inherited from

`API.mb`

## Methods

### constructMDRCWidget()

> **constructMDRCWidget**(`inlineFieldType`, `content`, `filePath`, `component`): `MarkdownRenderChildWidget`

Defined in: [packages/obsidian/src/ObsAPI.ts:88](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/obsidian/src/ObsAPI.ts#L88)

Creates a CM6 widget from a given widget type.

This is only useful for use in a CodeMirror plugin.

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

`inlineFieldType`

</td>
<td>

[`InlineFieldType`](/obsidian-meta-bind-plugin-docs/api/type-aliases/inlinefieldtype/)

</td>
<td>

</td>
</tr>
<tr>
<td>

`content`

</td>
<td>

`string`

</td>
<td>

</td>
</tr>
<tr>
<td>

`filePath`

</td>
<td>

`string`

</td>
<td>

</td>
</tr>
<tr>
<td>

`component`

</td>
<td>

`Component`

</td>
<td>

</td>
</tr>
</tbody>
</table>

#### Returns

`MarkdownRenderChildWidget`

***

### createBindTarget()

> **createBindTarget**(`storageType`, `storagePath`, `property`, `listenToChildren`): [`BindTargetDeclaration`](/obsidian-meta-bind-plugin-docs/api/interfaces/bindtargetdeclaration/)

Defined in: [packages/core/src/api/API.ts:591](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/api/API.ts#L591)

Creates a bind target declaration.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`storageType`

</td>
<td>

`string`

</td>
<td>

`undefined`

</td>
<td>

the storage type (also named metadata source sometimes)

</td>
</tr>
<tr>
<td>

`storagePath`

</td>
<td>

`string`

</td>
<td>

`undefined`

</td>
<td>

the storage path (usually the file path)

</td>
</tr>
<tr>
<td>

`property`

</td>
<td>

`string`[]

</td>
<td>

`undefined`

</td>
<td>

the property access path as an array. E.g. for the path `cache.a.b.c`, the array would be `['a', 'b', 'c']`.

</td>
</tr>
<tr>
<td>

`listenToChildren`

</td>
<td>

`boolean`

</td>
<td>

`false`

</td>
<td>

whether to listen to children, only relevant for arrays and objects

</td>
</tr>
</tbody>
</table>

#### Returns

[`BindTargetDeclaration`](/obsidian-meta-bind-plugin-docs/api/interfaces/bindtargetdeclaration/)

#### Inherited from

`API.createBindTarget`

***

### createButtonGroupMountable()

> **createButtonGroupMountable**(`filePath`, `options`): `ButtonGroupMountable`

Defined in: [packages/core/src/api/API.ts:386](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/api/API.ts#L386)

Creates a button group from an options object.

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

`filePath`

</td>
<td>

`string`

</td>
<td>

the file path that the field is located in or an empty string

</td>
</tr>
<tr>
<td>

`options`

</td>
<td>

[`ButtonGroupOptions`](/obsidian-meta-bind-plugin-docs/api/interfaces/buttongroupoptions/)

</td>
<td>

</td>
</tr>
</tbody>
</table>

#### Returns

`ButtonGroupMountable`

#### Inherited from

`API.createButtonGroupMountable`

***

### createButtonMountable()

> **createButtonMountable**(`filePath`, `options`): `ButtonMountable`

Defined in: [packages/core/src/api/API.ts:423](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/api/API.ts#L423)

Creates a button from an options object.

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

`filePath`

</td>
<td>

`string`

</td>
<td>

the file path that the field is located in or an empty string

</td>
</tr>
<tr>
<td>

`options`

</td>
<td>

[`ButtonOptions`](/obsidian-meta-bind-plugin-docs/api/interfaces/buttonoptions/)

</td>
<td>

</td>
</tr>
</tbody>
</table>

#### Returns

`ButtonMountable`

#### Inherited from

`API.createButtonMountable`

***

### createEmbedMountable()

> **createEmbedMountable**(`filePath`, `options`): `EmbedMountable`

Defined in: [packages/core/src/api/API.ts:453](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/api/API.ts#L453)

Creates a meta bind embed fields from an options object.

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

`filePath`

</td>
<td>

`string`

</td>
<td>

the file path that the field is located in or an empty string

</td>
</tr>
<tr>
<td>

`options`

</td>
<td>

[`EmbedOptions`](/obsidian-meta-bind-plugin-docs/api/interfaces/embedoptions/)

</td>
<td>

</td>
</tr>
</tbody>
</table>

#### Returns

`EmbedMountable`

#### Inherited from

`API.createEmbedMountable`

***

### createExcludedMountable()

> **createExcludedMountable**(`filePath`): `ExcludedMountable`

Defined in: [packages/core/src/api/API.ts:474](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/api/API.ts#L474)

Creates an excluded notification mountable for the excluded folders setting.

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

`filePath`

</td>
<td>

`string`

</td>
<td>

the file path that the field is located in or an empty string

</td>
</tr>
</tbody>
</table>

#### Returns

`ExcludedMountable`

#### Inherited from

`API.createExcludedMountable`

***

### createField()

> **createField**\<`Type`\>(`type`, `filePath`, `options`, `honorExcludedSetting`): [`FieldMountable`](/obsidian-meta-bind-plugin-docs/api/classes/fieldmountable/)

Defined in: [packages/core/src/api/API.ts:77](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/api/API.ts#L77)

Creates a field of a given type.

#### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`Type` *extends* [`FieldType`](/obsidian-meta-bind-plugin-docs/api/enumerations/fieldtype/)

</td>
</tr>
</tbody>
</table>

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`type`

</td>
<td>

`Type`

</td>
<td>

`undefined`

</td>
<td>

the type of the field

</td>
</tr>
<tr>
<td>

`filePath`

</td>
<td>

`string`

</td>
<td>

`undefined`

</td>
<td>

the file path that the field is located in, or an empty string if it is not in a file

</td>
</tr>
<tr>
<td>

`options`

</td>
<td>

[`FieldOptionMap`](/obsidian-meta-bind-plugin-docs/api/interfaces/fieldoptionmap/)\[`Type`\]

</td>
<td>

`undefined`

</td>
<td>

</td>
</tr>
<tr>
<td>

`honorExcludedSetting`

</td>
<td>

`boolean`

</td>
<td>

`true`

</td>
<td>

whether to honor the excluded folders settings for this field

</td>
</tr>
</tbody>
</table>

#### Returns

[`FieldMountable`](/obsidian-meta-bind-plugin-docs/api/classes/fieldmountable/)

#### Inherited from

`API.createField`

***

### createInlineFieldFromString()

> **createInlineFieldFromString**(`fieldString`, `filePath`, `scope`, `renderChildType`, `position?`, `honorExcludedSetting?`): [`FieldMountable`](/obsidian-meta-bind-plugin-docs/api/classes/fieldmountable/)

Defined in: [packages/core/src/api/API.ts:137](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/api/API.ts#L137)

Creates an inline field from a string.
Will throw an error if the string is not a valid declaration.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`fieldString`

</td>
<td>

`string`

</td>
<td>

`undefined`

</td>
<td>

the declaration string of the field

</td>
</tr>
<tr>
<td>

`filePath`

</td>
<td>

`string`

</td>
<td>

`undefined`

</td>
<td>

the file path that the field is located in

</td>
</tr>
<tr>
<td>

`scope`

</td>
<td>

`undefined` \| `BindTargetScope`

</td>
<td>

`undefined`

</td>
<td>

optional bind target scope

</td>
</tr>
<tr>
<td>

`renderChildType`

</td>
<td>

[`RenderChildType`](/obsidian-meta-bind-plugin-docs/api/enumerations/renderchildtype/)

</td>
<td>

`RenderChildType.INLINE`

</td>
<td>

the render child type, default INLINE

</td>
</tr>
<tr>
<td>

`position?`

</td>
<td>

[`NotePosition`](/obsidian-meta-bind-plugin-docs/api/classes/noteposition/)

</td>
<td>

`undefined`

</td>
<td>

an optional note position

</td>
</tr>
<tr>
<td>

`honorExcludedSetting?`

</td>
<td>

`boolean`

</td>
<td>

`true`

</td>
<td>

whether to honor the excluded folders settings for this field

</td>
</tr>
</tbody>
</table>

#### Returns

[`FieldMountable`](/obsidian-meta-bind-plugin-docs/api/classes/fieldmountable/)

#### Inherited from

`API.createInlineFieldFromString`

***

### createInlineFieldOfTypeFromString()

> **createInlineFieldOfTypeFromString**(`type`, `declaration`, `filePath`, `scope`, `renderChildType`, `position?`, `honorExcludedSetting?`): [`FieldMountable`](/obsidian-meta-bind-plugin-docs/api/classes/fieldmountable/)

Defined in: [packages/core/src/api/API.ts:194](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/api/API.ts#L194)

Creates an inline field of a given type and string.
Will throw an error if the string is not a valid inline field type.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`type`

</td>
<td>

[`InlineFieldType`](/obsidian-meta-bind-plugin-docs/api/type-aliases/inlinefieldtype/)

</td>
<td>

`undefined`

</td>
<td>

the field type

</td>
</tr>
<tr>
<td>

`declaration`

</td>
<td>

`string`

</td>
<td>

`undefined`

</td>
<td>

the declaration string of the field

</td>
</tr>
<tr>
<td>

`filePath`

</td>
<td>

`string`

</td>
<td>

`undefined`

</td>
<td>

the file path that the field is located in

</td>
</tr>
<tr>
<td>

`scope`

</td>
<td>

`undefined` \| `BindTargetScope`

</td>
<td>

`undefined`

</td>
<td>

optional bind target scope

</td>
</tr>
<tr>
<td>

`renderChildType`

</td>
<td>

[`RenderChildType`](/obsidian-meta-bind-plugin-docs/api/enumerations/renderchildtype/)

</td>
<td>

`RenderChildType.INLINE`

</td>
<td>

the render child type, default INLINE

</td>
</tr>
<tr>
<td>

`position?`

</td>
<td>

[`NotePosition`](/obsidian-meta-bind-plugin-docs/api/classes/noteposition/)

</td>
<td>

`undefined`

</td>
<td>

an optional note position

</td>
</tr>
<tr>
<td>

`honorExcludedSetting?`

</td>
<td>

`boolean`

</td>
<td>

`true`

</td>
<td>

whether to honor the excluded folders settings for this field

</td>
</tr>
</tbody>
</table>

#### Returns

[`FieldMountable`](/obsidian-meta-bind-plugin-docs/api/classes/fieldmountable/)

#### Inherited from

`API.createInlineFieldOfTypeFromString`

***

### createInputFieldMountable()

> **createInputFieldMountable**(`filePath`, `options`): `InputFieldMountable`

Defined in: [packages/core/src/api/API.ts:265](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/api/API.ts#L265)

Creates an input field from an options object.

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

`filePath`

</td>
<td>

`string`

</td>
<td>

the file path that the field is located in or an empty string

</td>
</tr>
<tr>
<td>

`options`

</td>
<td>

[`InputFieldOptions`](/obsidian-meta-bind-plugin-docs/api/interfaces/inputfieldoptions/)

</td>
<td>

</td>
</tr>
</tbody>
</table>

#### Returns

`InputFieldMountable`

#### Inherited from

`API.createInputFieldMountable`

***

### createJsViewFieldMountable()

> **createJsViewFieldMountable**(`filePath`, `options`): `JsViewFieldMountable`

Defined in: [packages/core/src/api/API.ts:333](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/api/API.ts#L333)

Creates a JS view field from an options object.

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

`filePath`

</td>
<td>

`string`

</td>
<td>

the file path that the field is located in or an empty string

</td>
</tr>
<tr>
<td>

`options`

</td>
<td>

[`JsViewFieldOptions`](/obsidian-meta-bind-plugin-docs/api/interfaces/jsviewfieldoptions/)

</td>
<td>

</td>
</tr>
</tbody>
</table>

#### Returns

`JsViewFieldMountable`

#### Inherited from

`API.createJsViewFieldMountable`

***

### createNotePosition()

> **createNotePosition**(`lineStart`, `lineEnd`): [`NotePosition`](/obsidian-meta-bind-plugin-docs/api/classes/noteposition/)

Defined in: [packages/core/src/api/API.ts:783](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/api/API.ts#L783)

Creates a note position from a line start and line end number.

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

`lineStart`

</td>
<td>

`number`

</td>
<td>

</td>
</tr>
<tr>
<td>

`lineEnd`

</td>
<td>

`number`

</td>
<td>

</td>
</tr>
</tbody>
</table>

#### Returns

[`NotePosition`](/obsidian-meta-bind-plugin-docs/api/classes/noteposition/)

#### Inherited from

`API.createNotePosition`

***

### createSignal()

> **createSignal**\<`T`\>(`value`): `Signal`\<`T`\>

Defined in: [packages/core/src/api/API.ts:579](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/api/API.ts#L579)

Creates a signal.

#### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`T`

</td>
</tr>
</tbody>
</table>

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

`value`

</td>
<td>

`T`

</td>
<td>

</td>
</tr>
</tbody>
</table>

#### Returns

`Signal`\<`T`\>

#### Inherited from

`API.createSignal`

***

### createTableMountable()

> **createTableMountable**(`filePath`, `options`): `TableMountable`

Defined in: [packages/core/src/api/API.ts:363](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/api/API.ts#L363)

Creates a table from an options object.

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

`filePath`

</td>
<td>

`string`

</td>
<td>

the file path that the field is located in or an empty string

</td>
</tr>
<tr>
<td>

`options`

</td>
<td>

[`TableOptions`](/obsidian-meta-bind-plugin-docs/api/interfaces/tableoptions/)

</td>
<td>

</td>
</tr>
</tbody>
</table>

#### Returns

`TableMountable`

#### Inherited from

`API.createTableMountable`

***

### createViewFieldMountable()

> **createViewFieldMountable**(`filePath`, `options`): `ViewFieldMountable`

Defined in: [packages/core/src/api/API.ts:299](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/api/API.ts#L299)

Creates a view field from an options object.

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

`filePath`

</td>
<td>

`string`

</td>
<td>

the file path that the field is located in or an empty string

</td>
</tr>
<tr>
<td>

`options`

</td>
<td>

[`ViewFieldOptions`](/obsidian-meta-bind-plugin-docs/api/interfaces/viewfieldoptions/)

</td>
<td>

</td>
</tr>
</tbody>
</table>

#### Returns

`ViewFieldMountable`

#### Inherited from

`API.createViewFieldMountable`

***

### getInlineFieldDeclarationPrefix()

> **getInlineFieldDeclarationPrefix**(`fieldType`): `string`

Defined in: [packages/core/src/api/API.ts:493](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/api/API.ts#L493)

Gets the prefix of a given widget type. (e.g. INPUT or VIEW).

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

`fieldType`

</td>
<td>

[`FieldType`](/obsidian-meta-bind-plugin-docs/api/enumerations/fieldtype/)

</td>
<td>

</td>
</tr>
</tbody>
</table>

#### Returns

`string`

#### Inherited from

`API.getInlineFieldDeclarationPrefix`

***

### getMetadata()

> **getMetadata**(`bindTarget`): `unknown`

Defined in: [packages/core/src/api/API.ts:685](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/api/API.ts#L685)

Reads a property from meta binds metadata cache.
If the value is not present in the cache, it will check the underlying source. E.g. Obsidians metadata cache.

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

`bindTarget`

</td>
<td>

[`BindTargetDeclaration`](/obsidian-meta-bind-plugin-docs/api/interfaces/bindtargetdeclaration/)

</td>
<td>

</td>
</tr>
</tbody>
</table>

#### Returns

`unknown`

#### Example

```ts
// Assumes you use the JS Engine plugin to run this.
const mb = engine.getPlugin("obsidian-meta-bind-plugin").api;
const bindTarget = mb.parseBindTarget("property", context.file.path);
const value = mb.getMetadata(bindTarget);
```

#### Inherited from

`API.getMetadata`

***

### isInlineFieldDeclaration()

> **isInlineFieldDeclaration**(`fieldType`, `str`): `boolean`

Defined in: [packages/core/src/api/API.ts:524](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/api/API.ts#L524)

Checks if a string is a declaration of a given widget type.

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

`fieldType`

</td>
<td>

[`FieldType`](/obsidian-meta-bind-plugin-docs/api/enumerations/fieldtype/)

</td>
<td>

</td>
</tr>
<tr>
<td>

`str`

</td>
<td>

`string`

</td>
<td>

the declaration string

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

#### Inherited from

`API.isInlineFieldDeclaration`

***

### isInlineFieldDeclarationAndGetType()

> **isInlineFieldDeclarationAndGetType**(`str`): `undefined` \| [`InlineFieldType`](/obsidian-meta-bind-plugin-docs/api/type-aliases/inlinefieldtype/)

Defined in: [packages/core/src/api/API.ts:547](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/api/API.ts#L547)

Checks if a string is any declaration. If yes, it returns the widget type, otherwise undefined.

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

`str`

</td>
<td>

`string`

</td>
<td>

the declaration string

</td>
</tr>
</tbody>
</table>

#### Returns

`undefined` \| [`InlineFieldType`](/obsidian-meta-bind-plugin-docs/api/type-aliases/inlinefieldtype/)

#### Inherited from

`API.isInlineFieldDeclarationAndGetType`

***

### mathJSImport()

> **mathJSImport**(`object`, `options?`): `void`

Defined in: [packages/core/src/api/API.ts:805](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/api/API.ts#L805)

Import new definitions into the internal mathJS instance.
For details on how to use, see https://mathjs.org/docs/reference/functions/import.html

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

`object`

</td>
<td>

`ImportObject` \| `ImportObject`[]

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

`ImportOptions`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Inherited from

`API.mathJSImport`

***

### parseBindTarget()

> **parseBindTarget**(`declarationString`, `filePath`, `scope?`): [`BindTargetDeclaration`](/obsidian-meta-bind-plugin-docs/api/interfaces/bindtargetdeclaration/)

Defined in: [packages/core/src/api/API.ts:627](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/api/API.ts#L627)

Parses a bind target declaration from a string.

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

`declarationString`

</td>
<td>

`string`

</td>
<td>

the string to parse

</td>
</tr>
<tr>
<td>

`filePath`

</td>
<td>

`string`

</td>
<td>

the file path that this bind target is relative to

</td>
</tr>
<tr>
<td>

`scope?`

</td>
<td>

`BindTargetScope`

</td>
<td>

optional bind target scope

</td>
</tr>
</tbody>
</table>

#### Returns

[`BindTargetDeclaration`](/obsidian-meta-bind-plugin-docs/api/interfaces/bindtargetdeclaration/)

#### Inherited from

`API.parseBindTarget`

***

### reactiveMetadata()

> **reactiveMetadata**(`bindTargets`, `lifecycleHook`, `callback`): `ReactiveComponent`

Defined in: [packages/obsidian/src/ObsAPI.ts:114](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/obsidian/src/ObsAPI.ts#L114)

Creates a JS Engine reactive component that will re-render when the given bind targets change.

This requires JS Engine to be installed and enabled!

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

`bindTargets`

</td>
<td>

[`BindTargetDeclaration`](/obsidian-meta-bind-plugin-docs/api/interfaces/bindtargetdeclaration/)[]

</td>
<td>

the bind targets to listen to

</td>
</tr>
<tr>
<td>

`lifecycleHook`

</td>
<td>

`LifecycleHook`

</td>
<td>

a [Component](https://docs.obsidian.md/Reference/TypeScript+API/Component)

</td>
</tr>
<tr>
<td>

`callback`

</td>
<td>

(...`values`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`unknown`\>

</td>
<td>

the callback to call with all the values of the bind targets when one of them changes. What ever this callback returns will be rendered by the reactive component.

</td>
</tr>
</tbody>
</table>

#### Returns

`ReactiveComponent`

***

### setMetadata()

> **setMetadata**(`bindTarget`, `value`): `void`

Defined in: [packages/core/src/api/API.ts:660](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/api/API.ts#L660)

Sets a property in meta binds metadata cache.

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

`bindTarget`

</td>
<td>

[`BindTargetDeclaration`](/obsidian-meta-bind-plugin-docs/api/interfaces/bindtargetdeclaration/)

</td>
<td>

</td>
</tr>
<tr>
<td>

`value`

</td>
<td>

`unknown`

</td>
<td>

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Example

```ts
// Assumes you use the JS Engine plugin to run this.
const mb = engine.getPlugin("obsidian-meta-bind-plugin").api;
const bindTarget = mb.parseBindTarget("property", context.file.path);
mb.setMetadata(bindTarget, "some value");
```

#### Inherited from

`API.setMetadata`

***

### subscribeToMetadata()

> **subscribeToMetadata**(`bindTarget`, `lifecycleHook`, `callback`): `void`

Defined in: [packages/core/src/api/API.ts:743](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/api/API.ts#L743)

Subscribes to a property in meta binds metadata cache.
This expects some sort of lifecycle hook to be passed in.
This method will register a callback to the lifecycle hook.
To unsubscribe the subscription, the callback registered to the lifecycle hook must be called.
In the context of Obsidian, you should pass a `Component` instance as the lifecycle hook and
make sure to unload the component when you are done using the metadata subscription.

NOT UNSUBSCRIBING WILL LEAD TO MEMORY LEAKS.

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

`bindTarget`

</td>
<td>

[`BindTargetDeclaration`](/obsidian-meta-bind-plugin-docs/api/interfaces/bindtargetdeclaration/)

</td>
<td>

</td>
</tr>
<tr>
<td>

`lifecycleHook`

</td>
<td>

`LifecycleHook`

</td>
<td>

In Obsidian this is an instance of the Component class. The subscription will be automatically unsubscribed when the component is unloaded.

</td>
</tr>
<tr>
<td>

`callback`

</td>
<td>

(`value`) => `void`

</td>
<td>

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Inherited from

`API.subscribeToMetadata`

***

### updateMetadata()

> **updateMetadata**(`bindTarget`, `updateFn`): `void`

Defined in: [packages/core/src/api/API.ts:712](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/core/src/api/API.ts#L712)

Updates a property in meta binds metadata cache.

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

`bindTarget`

</td>
<td>

[`BindTargetDeclaration`](/obsidian-meta-bind-plugin-docs/api/interfaces/bindtargetdeclaration/)

</td>
<td>

</td>
</tr>
<tr>
<td>

`updateFn`

</td>
<td>

(`value`) => `unknown`

</td>
<td>

a function that takes the current value and returns the new value

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Example

```ts
// Assumes you use the JS Engine plugin to run this.
const mb = engine.getPlugin("obsidian-meta-bind-plugin").api;
const bindTarget = mb.parseBindTarget("property", context.file.path);
mb.updateMetadata(bindTarget, (value) => {
    return value + 1;
});
```

#### Inherited from

`API.updateMetadata`

***

### wrapInMDRC()

> **wrapInMDRC**(`mountable`, `containerEl`, `component`): `MountableMDRC`

Defined in: [packages/obsidian/src/ObsAPI.ts:58](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6e87907d27dd07b6437b63c980b11d2bfef62599/packages/obsidian/src/ObsAPI.ts#L58)

Wraps any mountable in a [MarkdownRenderChild](https://docs.obsidian.md/Reference/TypeScript+API/MarkdownRenderChild)
and adds it as a child to the passed in [ComponentLike](/obsidian-meta-bind-plugin-docs/api/interfaces/componentlike/).

A [ComponentLike](/obsidian-meta-bind-plugin-docs/api/interfaces/componentlike/) is either a [Component](https://docs.obsidian.md/Reference/TypeScript+API/Component) or a [MarkdownPostProcessorContext](https://docs.obsidian.md/Reference/TypeScript+API/MarkdownPostProcessorContext)

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

`mountable`

</td>
<td>

[`Mountable`](/obsidian-meta-bind-plugin-docs/api/classes/mountable/)

</td>
<td>

the mountable to wrap in a [MarkdownRenderChild](https://docs.obsidian.md/Reference/TypeScript+API/MarkdownRenderChild)

</td>
</tr>
<tr>
<td>

`containerEl`

</td>
<td>

[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

</td>
<td>

the element to mount the [MarkdownRenderChild](https://docs.obsidian.md/Reference/TypeScript+API/MarkdownRenderChild) to

</td>
</tr>
<tr>
<td>

`component`

</td>
<td>

[`ComponentLike`](/obsidian-meta-bind-plugin-docs/api/interfaces/componentlike/)

</td>
<td>

the [ComponentLike](/obsidian-meta-bind-plugin-docs/api/interfaces/componentlike/) to register the [MarkdownRenderChild](https://docs.obsidian.md/Reference/TypeScript+API/MarkdownRenderChild) to

</td>
</tr>
</tbody>
</table>

#### Returns

`MountableMDRC`
