---
editUrl: false
next: false
prev: false
title: "ObsidianAPI"
---

Meta Bind API for Obsidian.

## Extends

- `API`\<`MetaBindPlugin`\>

## Constructors

### new ObsidianAPI()

> **new ObsidianAPI**(`plugin`): [`ObsidianAPI`](/obsidian-meta-bind-plugin-docs/api/classes/obsidianapi/)

#### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
<tr>
<td>

`plugin`

</td>
<td>

`MetaBindPlugin`

</td>
</tr>
</table>

#### Returns

[`ObsidianAPI`](/obsidian-meta-bind-plugin-docs/api/classes/obsidianapi/)

#### Overrides

`API<MetaBindPlugin>.constructor`

#### Defined in

[packages/obsidian/src/ObsidianAPI.ts:37](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6d84d4e1af13951a4f9f713d142b213b046a5a9e/packages/obsidian/src/ObsidianAPI.ts#L37)

## Properties

### bindTargetParser

> `readonly` **bindTargetParser**: `BindTargetParser`

#### Inherited from

`API.bindTargetParser`

#### Defined in

[packages/core/src/api/API.ts:92](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6d84d4e1af13951a4f9f713d142b213b046a5a9e/packages/core/src/api/API.ts#L92)

***

### buttonActionRunner

> `readonly` **buttonActionRunner**: `ButtonActionRunner`

#### Inherited from

`API.buttonActionRunner`

#### Defined in

[packages/core/src/api/API.ts:97](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6d84d4e1af13951a4f9f713d142b213b046a5a9e/packages/core/src/api/API.ts#L97)

***

### buttonManager

> `readonly` **buttonManager**: `ButtonManager`

#### Inherited from

`API.buttonManager`

#### Defined in

[packages/core/src/api/API.ts:98](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6d84d4e1af13951a4f9f713d142b213b046a5a9e/packages/core/src/api/API.ts#L98)

***

### buttonParser

> `readonly` **buttonParser**: `ButtonParser`

#### Inherited from

`API.buttonParser`

#### Defined in

[packages/core/src/api/API.ts:91](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6d84d4e1af13951a4f9f713d142b213b046a5a9e/packages/core/src/api/API.ts#L91)

***

### inputFieldFactory

> `readonly` **inputFieldFactory**: `InputFieldFactory`

#### Inherited from

`API.inputFieldFactory`

#### Defined in

[packages/core/src/api/API.ts:94](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6d84d4e1af13951a4f9f713d142b213b046a5a9e/packages/core/src/api/API.ts#L94)

***

### inputFieldParser

> `readonly` **inputFieldParser**: `InputFieldParser`

#### Inherited from

`API.inputFieldParser`

#### Defined in

[packages/core/src/api/API.ts:88](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6d84d4e1af13951a4f9f713d142b213b046a5a9e/packages/core/src/api/API.ts#L88)

***

### jsViewFieldParser

> `readonly` **jsViewFieldParser**: `JsViewFieldParser`

#### Inherited from

`API.jsViewFieldParser`

#### Defined in

[packages/core/src/api/API.ts:90](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6d84d4e1af13951a4f9f713d142b213b046a5a9e/packages/core/src/api/API.ts#L90)

***

### plugin

> `readonly` **plugin**: `MetaBindPlugin`

#### Inherited from

`API.plugin`

#### Defined in

[packages/core/src/api/API.ts:86](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6d84d4e1af13951a4f9f713d142b213b046a5a9e/packages/core/src/api/API.ts#L86)

***

### syntaxHighlighting

> `readonly` **syntaxHighlighting**: `SyntaxHighlightingAPI`

#### Inherited from

`API.syntaxHighlighting`

#### Defined in

[packages/core/src/api/API.ts:100](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6d84d4e1af13951a4f9f713d142b213b046a5a9e/packages/core/src/api/API.ts#L100)

***

### viewFieldFactory

> `readonly` **viewFieldFactory**: `ViewFieldFactory`

#### Inherited from

`API.viewFieldFactory`

#### Defined in

[packages/core/src/api/API.ts:95](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6d84d4e1af13951a4f9f713d142b213b046a5a9e/packages/core/src/api/API.ts#L95)

***

### viewFieldParser

> `readonly` **viewFieldParser**: `ViewFieldParser`

#### Inherited from

`API.viewFieldParser`

#### Defined in

[packages/core/src/api/API.ts:89](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6d84d4e1af13951a4f9f713d142b213b046a5a9e/packages/core/src/api/API.ts#L89)

## Methods

### constructMDRCWidget()

> **constructMDRCWidget**(`inlineFieldType`, `content`, `filePath`, `component`): `MarkdownRenderChildWidget`

Creates a CM6 widget from a given widget type.

This is only useful fur use in a CodeMirror plugin.

#### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
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
</table>

#### Returns

`MarkdownRenderChildWidget`

#### Defined in

[packages/obsidian/src/ObsidianAPI.ts:81](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6d84d4e1af13951a4f9f713d142b213b046a5a9e/packages/obsidian/src/ObsidianAPI.ts#L81)

***

### createBindTarget()

> **createBindTarget**(`storageType`, `storagePath`, `property`, `listenToChildren`): `BindTargetDeclaration`

Creates a bind target declaration.

#### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
<th>Description</th>
</tr>
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

the property path a.b.c = ['a', 'b', 'c']

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
</table>

#### Returns

`BindTargetDeclaration`

#### Inherited from

`API.createBindTarget`

#### Defined in

[packages/core/src/api/API.ts:642](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6d84d4e1af13951a4f9f713d142b213b046a5a9e/packages/core/src/api/API.ts#L642)

***

### createButtonGroupMountable()

> **createButtonGroupMountable**(`filePath`, `options`): `ButtonGroupMountable`

Creates a button group from an options object.

#### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
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
</table>

#### Returns

`ButtonGroupMountable`

#### Inherited from

`API.createButtonGroupMountable`

#### Defined in

[packages/core/src/api/API.ts:437](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6d84d4e1af13951a4f9f713d142b213b046a5a9e/packages/core/src/api/API.ts#L437)

***

### createButtonMountable()

> **createButtonMountable**(`filePath`, `options`): `ButtonMountable`

Creates a button from an options object.

#### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
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
</table>

#### Returns

`ButtonMountable`

#### Inherited from

`API.createButtonMountable`

#### Defined in

[packages/core/src/api/API.ts:474](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6d84d4e1af13951a4f9f713d142b213b046a5a9e/packages/core/src/api/API.ts#L474)

***

### createEmbedMountable()

> **createEmbedMountable**(`filePath`, `options`): `EmbedMountable`

Creates a meta bind embed fields from an options object.

#### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
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
</table>

#### Returns

`EmbedMountable`

#### Inherited from

`API.createEmbedMountable`

#### Defined in

[packages/core/src/api/API.ts:504](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6d84d4e1af13951a4f9f713d142b213b046a5a9e/packages/core/src/api/API.ts#L504)

***

### createExcludedMountable()

> **createExcludedMountable**(`filePath`): `ExcludedMountable`

Creates an excluded notification mountable for the excluded folders setting.

#### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
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
</table>

#### Returns

`ExcludedMountable`

#### Inherited from

`API.createExcludedMountable`

#### Defined in

[packages/core/src/api/API.ts:525](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6d84d4e1af13951a4f9f713d142b213b046a5a9e/packages/core/src/api/API.ts#L525)

***

### createField()

> **createField**\<`Type`\>(`type`, `filePath`, `options`, `honorExcludedSetting`): `FieldMountable`

Creates a field of a given type.

#### Type Parameters

<table>
<tr>
<th>Type Parameter</th>
</tr>
<tr>
<td>

`Type` *extends* [`FieldType`](/obsidian-meta-bind-plugin-docs/api/enumerations/fieldtype/)

</td>
</tr>
</table>

#### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
<th>Description</th>
</tr>
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
</table>

#### Returns

`FieldMountable`

#### Inherited from

`API.createField`

#### Defined in

[packages/core/src/api/API.ts:128](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6d84d4e1af13951a4f9f713d142b213b046a5a9e/packages/core/src/api/API.ts#L128)

***

### createInlineFieldFromString()

> **createInlineFieldFromString**(`fieldString`, `filePath`, `scope`, `renderChildType`, `position`?, `honorExcludedSetting`?): `FieldMountable`

Creates an inline field from a string.
Will throw an error if the string is not a valid declaration.

#### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
<th>Description</th>
</tr>
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

`position`?

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

`honorExcludedSetting`?

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
</table>

#### Returns

`FieldMountable`

#### Inherited from

`API.createInlineFieldFromString`

#### Defined in

[packages/core/src/api/API.ts:188](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6d84d4e1af13951a4f9f713d142b213b046a5a9e/packages/core/src/api/API.ts#L188)

***

### createInlineFieldOfTypeFromString()

> **createInlineFieldOfTypeFromString**(`type`, `declaration`, `filePath`, `scope`, `renderChildType`, `position`?, `honorExcludedSetting`?): `FieldMountable`

Creates an inline field of a given type and string.
Will throw an error if the string is not a valid inline field type.

#### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
<th>Description</th>
</tr>
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

`position`?

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

`honorExcludedSetting`?

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
</table>

#### Returns

`FieldMountable`

#### Inherited from

`API.createInlineFieldOfTypeFromString`

#### Defined in

[packages/core/src/api/API.ts:245](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6d84d4e1af13951a4f9f713d142b213b046a5a9e/packages/core/src/api/API.ts#L245)

***

### createInputFieldMountable()

> **createInputFieldMountable**(`filePath`, `options`): `InputFieldMountable`

Creates an input field from an options object.

#### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
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
</table>

#### Returns

`InputFieldMountable`

#### Inherited from

`API.createInputFieldMountable`

#### Defined in

[packages/core/src/api/API.ts:316](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6d84d4e1af13951a4f9f713d142b213b046a5a9e/packages/core/src/api/API.ts#L316)

***

### createJsViewFieldMountable()

> **createJsViewFieldMountable**(`filePath`, `options`): `JsViewFieldMountable`

Creates a JS view field from an options object.

#### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
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
</table>

#### Returns

`JsViewFieldMountable`

#### Inherited from

`API.createJsViewFieldMountable`

#### Defined in

[packages/core/src/api/API.ts:384](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6d84d4e1af13951a4f9f713d142b213b046a5a9e/packages/core/src/api/API.ts#L384)

***

### createNotePosition()

> **createNotePosition**(`lineStart`, `lineEnd`): [`NotePosition`](/obsidian-meta-bind-plugin-docs/api/classes/noteposition/)

Creates a note position from a line start and line end number.

#### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
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
</table>

#### Returns

[`NotePosition`](/obsidian-meta-bind-plugin-docs/api/classes/noteposition/)

#### Inherited from

`API.createNotePosition`

#### Defined in

[packages/core/src/api/API.ts:809](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6d84d4e1af13951a4f9f713d142b213b046a5a9e/packages/core/src/api/API.ts#L809)

***

### createSignal()

> **createSignal**\<`T`\>(`value`): `Signal`\<`T`\>

Creates a signal.

#### Type Parameters

<table>
<tr>
<th>Type Parameter</th>
</tr>
<tr>
<td>

`T`

</td>
</tr>
</table>

#### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
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
</table>

#### Returns

`Signal`\<`T`\>

#### Inherited from

`API.createSignal`

#### Defined in

[packages/core/src/api/API.ts:630](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6d84d4e1af13951a4f9f713d142b213b046a5a9e/packages/core/src/api/API.ts#L630)

***

### createTableMountable()

> **createTableMountable**(`filePath`, `options`): `TableMountable`

Creates a table from an options object.

#### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
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
</table>

#### Returns

`TableMountable`

#### Inherited from

`API.createTableMountable`

#### Defined in

[packages/core/src/api/API.ts:414](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6d84d4e1af13951a4f9f713d142b213b046a5a9e/packages/core/src/api/API.ts#L414)

***

### createViewFieldMountable()

> **createViewFieldMountable**(`filePath`, `options`): `ViewFieldMountable`

Creates a view field from an options object.

#### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
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
</table>

#### Returns

`ViewFieldMountable`

#### Inherited from

`API.createViewFieldMountable`

#### Defined in

[packages/core/src/api/API.ts:350](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6d84d4e1af13951a4f9f713d142b213b046a5a9e/packages/core/src/api/API.ts#L350)

***

### getInlineFieldDeclarationPrefix()

> **getInlineFieldDeclarationPrefix**(`fieldType`): `string`

Gets the prefix of a given widget type. (e.g. INPUT or VIEW).

#### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
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
</table>

#### Returns

`string`

#### Inherited from

`API.getInlineFieldDeclarationPrefix`

#### Defined in

[packages/core/src/api/API.ts:544](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6d84d4e1af13951a4f9f713d142b213b046a5a9e/packages/core/src/api/API.ts#L544)

***

### getMetadata()

> **getMetadata**(`bindTarget`): `unknown`

Reads a property from meta binds metadata cache.
If the value is not present in the cache, it will check the underlying source. E.g. Obsidians metadata cache.

#### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
<tr>
<td>

`bindTarget`

</td>
<td>

`BindTargetDeclaration`

</td>
<td>

</td>
</tr>
</table>

#### Returns

`unknown`

#### Inherited from

`API.getMetadata`

#### Defined in

[packages/core/src/api/API.ts:724](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6d84d4e1af13951a4f9f713d142b213b046a5a9e/packages/core/src/api/API.ts#L724)

***

### isInlineFieldDeclaration()

> **isInlineFieldDeclaration**(`fieldType`, `str`): `boolean`

Checks if a string is a declaration of a given widget type.

#### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
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
</table>

#### Returns

`boolean`

#### Inherited from

`API.isInlineFieldDeclaration`

#### Defined in

[packages/core/src/api/API.ts:575](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6d84d4e1af13951a4f9f713d142b213b046a5a9e/packages/core/src/api/API.ts#L575)

***

### isInlineFieldDeclarationAndGetType()

> **isInlineFieldDeclarationAndGetType**(`str`): `undefined` \| [`InlineFieldType`](/obsidian-meta-bind-plugin-docs/api/type-aliases/inlinefieldtype/)

Checks if a string is any declaration and if yes returns the widget type.

#### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
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
</table>

#### Returns

`undefined` \| [`InlineFieldType`](/obsidian-meta-bind-plugin-docs/api/type-aliases/inlinefieldtype/)

#### Inherited from

`API.isInlineFieldDeclarationAndGetType`

#### Defined in

[packages/core/src/api/API.ts:598](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6d84d4e1af13951a4f9f713d142b213b046a5a9e/packages/core/src/api/API.ts#L598)

***

### parseBindTarget()

> **parseBindTarget**(`declarationString`, `filePath`, `scope`?): `BindTargetDeclaration`

Parses a bind target declaration from a string.

#### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
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

`scope`?

</td>
<td>

`BindTargetScope`

</td>
<td>

optional bind target scope

</td>
</tr>
</table>

#### Returns

`BindTargetDeclaration`

#### Inherited from

`API.parseBindTarget`

#### Defined in

[packages/core/src/api/API.ts:678](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6d84d4e1af13951a4f9f713d142b213b046a5a9e/packages/core/src/api/API.ts#L678)

***

### reactiveMetadata()

> **reactiveMetadata**(`bindTargets`, `lifecycleHook`, `callback`): `ReactiveComponent`

Creates a JS Engine reactive component that will re-render when the given bind targets change.

This requires JS Engine to be installed and enabled!

#### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
<tr>
<td>

`bindTargets`

</td>
<td>

`BindTargetDeclaration`[]

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
</table>

#### Returns

`ReactiveComponent`

#### Defined in

[packages/obsidian/src/ObsidianAPI.ts:107](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6d84d4e1af13951a4f9f713d142b213b046a5a9e/packages/obsidian/src/ObsidianAPI.ts#L107)

***

### setMetadata()

> **setMetadata**(`bindTarget`, `value`): `void`

Sets a property in meta binds metadata cache.

#### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
<tr>
<td>

`bindTarget`

</td>
<td>

`BindTargetDeclaration`

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
</table>

#### Returns

`void`

#### Inherited from

`API.setMetadata`

#### Defined in

[packages/core/src/api/API.ts:705](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6d84d4e1af13951a4f9f713d142b213b046a5a9e/packages/core/src/api/API.ts#L705)

***

### subscribeToMetadata()

> **subscribeToMetadata**(`bindTarget`, `lifecycleHook`, `callback`): `void`

Subscribes to a property in meta binds metadata cache.
This returns a subscription that can be used to unsubscribe as well as update the cache.
IF YOU DON'T CALL `unsubscribe` THE SUBSCRIPTION WILL LEAK MEMORY.

#### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
<tr>
<td>

`bindTarget`

</td>
<td>

`BindTargetDeclaration`

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
</table>

#### Returns

`void`

#### Inherited from

`API.subscribeToMetadata`

#### Defined in

[packages/core/src/api/API.ts:769](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6d84d4e1af13951a4f9f713d142b213b046a5a9e/packages/core/src/api/API.ts#L769)

***

### updateMetadata()

> **updateMetadata**(`bindTarget`, `updateFn`): `void`

Updates a property in meta binds metadata cache.

#### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
<tr>
<td>

`bindTarget`

</td>
<td>

`BindTargetDeclaration`

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
</table>

#### Returns

`void`

#### Inherited from

`API.updateMetadata`

#### Defined in

[packages/core/src/api/API.ts:743](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6d84d4e1af13951a4f9f713d142b213b046a5a9e/packages/core/src/api/API.ts#L743)

***

### wrapInMDRC()

> **wrapInMDRC**(`mountable`, `containerEl`, `component`): `MountableMDRC`

Wraps any mountable in a [MarkdownRenderChild](https://docs.obsidian.md/Reference/TypeScript+API/MarkdownRenderChild)
and adds it as a child to the passed in [ComponentLike](../../../../../obsidian-meta-bind-plugin-docs/api/interfaces/componentlike).

A [ComponentLike](../../../../../obsidian-meta-bind-plugin-docs/api/interfaces/componentlike) is either a [Component](https://docs.obsidian.md/Reference/TypeScript+API/Component) or a [MarkdownPostProcessorContext](https://docs.obsidian.md/Reference/TypeScript+API/MarkdownPostProcessorContext)

#### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
<tr>
<td>

`mountable`

</td>
<td>

`Mountable`

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

the [ComponentLike](../../../../../obsidian-meta-bind-plugin-docs/api/interfaces/componentlike) to register the [MarkdownRenderChild](https://docs.obsidian.md/Reference/TypeScript+API/MarkdownRenderChild) to

</td>
</tr>
</table>

#### Returns

`MountableMDRC`

#### Defined in

[packages/obsidian/src/ObsidianAPI.ts:51](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/6d84d4e1af13951a4f9f713d142b213b046a5a9e/packages/obsidian/src/ObsidianAPI.ts#L51)
