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

### new ObsidianAPI(plugin)

> **new ObsidianAPI**(`plugin`): [`ObsidianAPI`](/obsidian-meta-bind-plugin-docs/api/classes/obsidianapi/)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `plugin` | `default` |

#### Returns

[`ObsidianAPI`](/obsidian-meta-bind-plugin-docs/api/classes/obsidianapi/)

#### Overrides

`API<MetaBindPlugin>.constructor`

#### Source

[packages/obsidian/src/ObsidianAPI.ts:37](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/bf383cc50e22f56b35d4d9074e74a4639c99d45e/packages/obsidian/src/ObsidianAPI.ts#L37)

## Properties

### bindTargetParser

> **`readonly`** **bindTargetParser**: `BindTargetParser`

#### Inherited from

`API.bindTargetParser`

#### Source

[packages/core/src/api/API.ts:92](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/bf383cc50e22f56b35d4d9074e74a4639c99d45e/packages/core/src/api/API.ts#L92)

***

### buttonActionRunner

> **`readonly`** **buttonActionRunner**: `ButtonActionRunner`

#### Inherited from

`API.buttonActionRunner`

#### Source

[packages/core/src/api/API.ts:97](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/bf383cc50e22f56b35d4d9074e74a4639c99d45e/packages/core/src/api/API.ts#L97)

***

### buttonManager

> **`readonly`** **buttonManager**: `ButtonManager`

#### Inherited from

`API.buttonManager`

#### Source

[packages/core/src/api/API.ts:98](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/bf383cc50e22f56b35d4d9074e74a4639c99d45e/packages/core/src/api/API.ts#L98)

***

### buttonParser

> **`readonly`** **buttonParser**: `ButtonParser`

#### Inherited from

`API.buttonParser`

#### Source

[packages/core/src/api/API.ts:91](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/bf383cc50e22f56b35d4d9074e74a4639c99d45e/packages/core/src/api/API.ts#L91)

***

### inputFieldFactory

> **`readonly`** **inputFieldFactory**: `InputFieldFactory`

#### Inherited from

`API.inputFieldFactory`

#### Source

[packages/core/src/api/API.ts:94](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/bf383cc50e22f56b35d4d9074e74a4639c99d45e/packages/core/src/api/API.ts#L94)

***

### inputFieldParser

> **`readonly`** **inputFieldParser**: `InputFieldParser`

#### Inherited from

`API.inputFieldParser`

#### Source

[packages/core/src/api/API.ts:88](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/bf383cc50e22f56b35d4d9074e74a4639c99d45e/packages/core/src/api/API.ts#L88)

***

### jsViewFieldParser

> **`readonly`** **jsViewFieldParser**: `JsViewFieldParser`

#### Inherited from

`API.jsViewFieldParser`

#### Source

[packages/core/src/api/API.ts:90](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/bf383cc50e22f56b35d4d9074e74a4639c99d45e/packages/core/src/api/API.ts#L90)

***

### plugin

> **`readonly`** **plugin**: `default`

#### Inherited from

`API.plugin`

#### Source

[packages/core/src/api/API.ts:86](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/bf383cc50e22f56b35d4d9074e74a4639c99d45e/packages/core/src/api/API.ts#L86)

***

### syntaxHighlighting

> **`readonly`** **syntaxHighlighting**: `SyntaxHighlightingAPI`

#### Inherited from

`API.syntaxHighlighting`

#### Source

[packages/core/src/api/API.ts:100](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/bf383cc50e22f56b35d4d9074e74a4639c99d45e/packages/core/src/api/API.ts#L100)

***

### viewFieldFactory

> **`readonly`** **viewFieldFactory**: `ViewFieldFactory`

#### Inherited from

`API.viewFieldFactory`

#### Source

[packages/core/src/api/API.ts:95](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/bf383cc50e22f56b35d4d9074e74a4639c99d45e/packages/core/src/api/API.ts#L95)

***

### viewFieldParser

> **`readonly`** **viewFieldParser**: `ViewFieldParser`

#### Inherited from

`API.viewFieldParser`

#### Source

[packages/core/src/api/API.ts:89](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/bf383cc50e22f56b35d4d9074e74a4639c99d45e/packages/core/src/api/API.ts#L89)

## Methods

### constructMDRCWidget()

> **constructMDRCWidget**(`mdrcType`, `content`, `filePath`, `component`): `MarkdownRenderChildWidget`

Creates a MDRC widget from a given widget type.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `mdrcType` | [`FieldType`](/obsidian-meta-bind-plugin-docs/api/enumerations/fieldtype/) |  |
| `content` | `string` |  |
| `filePath` | `string` |  |
| `component` | `Component` |  |

#### Returns

`MarkdownRenderChildWidget`

#### Source

[packages/obsidian/src/ObsidianAPI.ts:69](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/bf383cc50e22f56b35d4d9074e74a4639c99d45e/packages/obsidian/src/ObsidianAPI.ts#L69)

***

### createBindTarget()

> **createBindTarget**(`storageType`, `storagePath`, `property`, `listenToChildren`): `BindTargetDeclaration`

Creates a bind target declaration.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `storageType` | `string` | `undefined` | the storage type (also named metadata source sometimes) |
| `storagePath` | `string` | `undefined` | the storage path (usually the file path) |
| `property` | `string`[] | `undefined` | the property path a.b.c = ['a', 'b', 'c'] |
| `listenToChildren` | `boolean` | `false` | whether to listen to children, only relevant for arrays and objects |

#### Returns

`BindTargetDeclaration`

#### Inherited from

`API.createBindTarget`

#### Source

[packages/core/src/api/API.ts:591](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/bf383cc50e22f56b35d4d9074e74a4639c99d45e/packages/core/src/api/API.ts#L591)

***

### createButtonGroupMountable()

> **createButtonGroupMountable**(`filePath`, `options`): `ButtonGroupMountable`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `filePath` | `string` |
| `options` | [`ButtonGroupOptions`](/obsidian-meta-bind-plugin-docs/api/interfaces/buttongroupoptions/) |

#### Returns

`ButtonGroupMountable`

#### Inherited from

`API.createButtonGroupMountable`

#### Source

[packages/core/src/api/API.ts:407](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/bf383cc50e22f56b35d4d9074e74a4639c99d45e/packages/core/src/api/API.ts#L407)

***

### createButtonMountable()

> **createButtonMountable**(`filePath`, `options`): `ButtonMountable`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `filePath` | `string` |
| `options` | [`ButtonOptions`](/obsidian-meta-bind-plugin-docs/api/interfaces/buttonoptions/) |

#### Returns

`ButtonMountable`

#### Inherited from

`API.createButtonMountable`

#### Source

[packages/core/src/api/API.ts:438](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/bf383cc50e22f56b35d4d9074e74a4639c99d45e/packages/core/src/api/API.ts#L438)

***

### createEmbedMountable()

> **createEmbedMountable**(`filePath`, `options`): `EmbedMountable`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `filePath` | `string` |
| `options` | [`EmbedOptions`](/obsidian-meta-bind-plugin-docs/api/interfaces/embedoptions/) |

#### Returns

`EmbedMountable`

#### Inherited from

`API.createEmbedMountable`

#### Source

[packages/core/src/api/API.ts:462](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/bf383cc50e22f56b35d4d9074e74a4639c99d45e/packages/core/src/api/API.ts#L462)

***

### createExcludedMountable()

> **createExcludedMountable**(`filePath`): `ExcludedMountable`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `filePath` | `string` |

#### Returns

`ExcludedMountable`

#### Inherited from

`API.createExcludedMountable`

#### Source

[packages/core/src/api/API.ts:478](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/bf383cc50e22f56b35d4d9074e74a4639c99d45e/packages/core/src/api/API.ts#L478)

***

### createField()

> **createField**\<`Type`\>(`type`, `filePath`, `options`, `honorExcludedSetting`): `FieldMountable`

Creates a field of a given type.

#### Type parameters

| Type parameter |
| :------ |
| `Type` extends [`FieldType`](/obsidian-meta-bind-plugin-docs/api/enumerations/fieldtype/) |

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `type` | `Type` | `undefined` |  |
| `filePath` | `string` | `undefined` |  |
| `options` | [`FieldOptionMap`](/obsidian-meta-bind-plugin-docs/api/interfaces/fieldoptionmap/)\[`Type`\] | `undefined` |  |
| `honorExcludedSetting` | `boolean` | `true` |  |

#### Returns

`FieldMountable`

#### Inherited from

`API.createField`

#### Source

[packages/core/src/api/API.ts:128](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/bf383cc50e22f56b35d4d9074e74a4639c99d45e/packages/core/src/api/API.ts#L128)

***

### createInlineFieldFromString()

> **createInlineFieldFromString**(`fieldString`, `filePath`, `scope`, `renderChildType`, `position`?, `honorExcludedSetting`?): `FieldMountable`

Creates an inline field from a string.
Will throw an error if the string is not a valid declaration.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `fieldString` | `string` | `undefined` |  |
| `filePath` | `string` | `undefined` |  |
| `scope` | `undefined` \| `BindTargetScope` | `undefined` |  |
| `renderChildType` | [`RenderChildType`](/obsidian-meta-bind-plugin-docs/api/enumerations/renderchildtype/) | `RenderChildType.INLINE` |  |
| `position`? | [`NotePosition`](/obsidian-meta-bind-plugin-docs/api/classes/noteposition/) | `undefined` |  |
| `honorExcludedSetting`? | `boolean` | `true` |  |

#### Returns

`FieldMountable`

#### Inherited from

`API.createInlineFieldFromString`

#### Source

[packages/core/src/api/API.ts:188](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/bf383cc50e22f56b35d4d9074e74a4639c99d45e/packages/core/src/api/API.ts#L188)

***

### createInlineFieldOfTypeFromString()

> **createInlineFieldOfTypeFromString**(`type`, `declaration`, `filePath`, `scope`, `renderChildType`, `position`?, `honorExcludedSetting`?): `FieldMountable`

Creates an inline field of a given type and string.
Will throw an error if the string is not a valid inline field type.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `type` | [`InlineFieldType`](/obsidian-meta-bind-plugin-docs/api/type-aliases/inlinefieldtype/) | `undefined` |  |
| `declaration` | `string` | `undefined` |  |
| `filePath` | `string` | `undefined` |  |
| `scope` | `undefined` \| `BindTargetScope` | `undefined` |  |
| `renderChildType` | [`RenderChildType`](/obsidian-meta-bind-plugin-docs/api/enumerations/renderchildtype/) | `RenderChildType.INLINE` |  |
| `position`? | [`NotePosition`](/obsidian-meta-bind-plugin-docs/api/classes/noteposition/) | `undefined` |  |
| `honorExcludedSetting`? | `boolean` | `true` |  |

#### Returns

`FieldMountable`

#### Inherited from

`API.createInlineFieldOfTypeFromString`

#### Source

[packages/core/src/api/API.ts:245](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/bf383cc50e22f56b35d4d9074e74a4639c99d45e/packages/core/src/api/API.ts#L245)

***

### createInputFieldMountable()

> **createInputFieldMountable**(`filePath`, `options`): `InputFieldMountable`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `filePath` | `string` |
| `options` | [`APIConfigs`](/obsidian-meta-bind-plugin-docs/api/interfaces/apiconfigs/) |

#### Returns

`InputFieldMountable`

#### Inherited from

`API.createInputFieldMountable`

#### Source

[packages/core/src/api/API.ts:310](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/bf383cc50e22f56b35d4d9074e74a4639c99d45e/packages/core/src/api/API.ts#L310)

***

### createJsViewFieldMountable()

> **createJsViewFieldMountable**(`filePath`, `options`): `JsViewFieldMountable`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `filePath` | `string` |
| `options` | [`JsViewFieldOptions`](/obsidian-meta-bind-plugin-docs/api/interfaces/jsviewfieldoptions/) |

#### Returns

`JsViewFieldMountable`

#### Inherited from

`API.createJsViewFieldMountable`

#### Source

[packages/core/src/api/API.ts:366](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/bf383cc50e22f56b35d4d9074e74a4639c99d45e/packages/core/src/api/API.ts#L366)

***

### createNotePosition()

> **createNotePosition**(`lineStart`, `lineEnd`): [`NotePosition`](/obsidian-meta-bind-plugin-docs/api/classes/noteposition/)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `lineStart` | `number` |
| `lineEnd` | `number` |

#### Returns

[`NotePosition`](/obsidian-meta-bind-plugin-docs/api/classes/noteposition/)

#### Inherited from

`API.createNotePosition`

#### Source

[packages/core/src/api/API.ts:752](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/bf383cc50e22f56b35d4d9074e74a4639c99d45e/packages/core/src/api/API.ts#L752)

***

### createSignal()

> **createSignal**\<`T`\>(`value`): `Signal`\<`T`\>

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`Signal`\<`T`\>

#### Inherited from

`API.createSignal`

#### Source

[packages/core/src/api/API.ts:579](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/bf383cc50e22f56b35d4d9074e74a4639c99d45e/packages/core/src/api/API.ts#L579)

***

### createTableMountable()

> **createTableMountable**(`filePath`, `options`): `TableMountable`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `filePath` | `string` |
| `options` | [`TableOptions`](/obsidian-meta-bind-plugin-docs/api/interfaces/tableoptions/) |

#### Returns

`TableMountable`

#### Inherited from

`API.createTableMountable`

#### Source

[packages/core/src/api/API.ts:390](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/bf383cc50e22f56b35d4d9074e74a4639c99d45e/packages/core/src/api/API.ts#L390)

***

### createViewFieldMountable()

> **createViewFieldMountable**(`filePath`, `options`): `ViewFieldMountable`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `filePath` | `string` |
| `options` | [`ViewFieldOptions`](/obsidian-meta-bind-plugin-docs/api/interfaces/viewfieldoptions/) |

#### Returns

`ViewFieldMountable`

#### Inherited from

`API.createViewFieldMountable`

#### Source

[packages/core/src/api/API.ts:338](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/bf383cc50e22f56b35d4d9074e74a4639c99d45e/packages/core/src/api/API.ts#L338)

***

### getInlineFieldDeclarationPrefix()

> **getInlineFieldDeclarationPrefix**(`fieldType`): `string`

Gets the prefix of a given widget type. (e.g. INPUT or VIEW)

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `fieldType` | [`FieldType`](/obsidian-meta-bind-plugin-docs/api/enumerations/fieldtype/) |  |

#### Returns

`string`

#### Inherited from

`API.getInlineFieldDeclarationPrefix`

#### Source

[packages/core/src/api/API.ts:497](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/bf383cc50e22f56b35d4d9074e74a4639c99d45e/packages/core/src/api/API.ts#L497)

***

### getMetadata()

> **getMetadata**(`bindTarget`): `unknown`

Reads a property from meta binds metadata cache.
If the value is not present in the cache, it will check the underlying source. E.g. Obsidians metadata cache.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `bindTarget` | `BindTargetDeclaration` |  |

#### Returns

`unknown`

#### Inherited from

`API.getMetadata`

#### Source

[packages/core/src/api/API.ts:673](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/bf383cc50e22f56b35d4d9074e74a4639c99d45e/packages/core/src/api/API.ts#L673)

***

### isInlineFieldDeclaration()

> **isInlineFieldDeclaration**(`fieldType`, `str`): `boolean`

Checks if a string is a declaration of a given widget type.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `fieldType` | [`FieldType`](/obsidian-meta-bind-plugin-docs/api/enumerations/fieldtype/) |  |
| `str` | `string` |  |

#### Returns

`boolean`

#### Inherited from

`API.isInlineFieldDeclaration`

#### Source

[packages/core/src/api/API.ts:528](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/bf383cc50e22f56b35d4d9074e74a4639c99d45e/packages/core/src/api/API.ts#L528)

***

### isInlineFieldDeclarationAndGetType()

> **isInlineFieldDeclarationAndGetType**(`str`): `undefined` \| [`InlineFieldType`](/obsidian-meta-bind-plugin-docs/api/type-aliases/inlinefieldtype/)

Checks if a string is any declaration and if yes returns the widget type.
This does not use [isInlineFieldDeclaration](../../../../../obsidian-meta-bind-plugin-docs/api/classes/obsidianapi/#isinlinefielddeclaration) because of performance reasons.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` |  |

#### Returns

`undefined` \| [`InlineFieldType`](/obsidian-meta-bind-plugin-docs/api/type-aliases/inlinefieldtype/)

#### Inherited from

`API.isInlineFieldDeclarationAndGetType`

#### Source

[packages/core/src/api/API.ts:552](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/bf383cc50e22f56b35d4d9074e74a4639c99d45e/packages/core/src/api/API.ts#L552)

***

### parseBindTarget()

> **parseBindTarget**(`declarationString`, `filePath`, `scope`?): `BindTargetDeclaration`

Parses a bind target declaration from a string.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `declarationString` | `string` | the string to parse |
| `filePath` | `string` | the file path that this bind target is relative to |
| `scope`? | `BindTargetScope` | optional bind target scope |

#### Returns

`BindTargetDeclaration`

#### Inherited from

`API.parseBindTarget`

#### Source

[packages/core/src/api/API.ts:627](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/bf383cc50e22f56b35d4d9074e74a4639c99d45e/packages/core/src/api/API.ts#L627)

***

### reactiveMetadata()

> **reactiveMetadata**(`bindTargets`, `lifecycleHook`, `callback`): `ReactiveComponent`

Creates a JS Engine reactive component that will re-render when the given bind targets change.

This requires JS Engine to be installed and enabled!

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `bindTargets` | `BindTargetDeclaration`[] |  |
| `lifecycleHook` | `LifecycleHook` |  |
| `callback` | (...`values`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`unknown`\> |  |

#### Returns

`ReactiveComponent`

#### Source

[packages/obsidian/src/ObsidianAPI.ts:95](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/bf383cc50e22f56b35d4d9074e74a4639c99d45e/packages/obsidian/src/ObsidianAPI.ts#L95)

***

### setMetadata()

> **setMetadata**(`bindTarget`, `value`): `void`

Sets a property in meta binds metadata cache.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `bindTarget` | `BindTargetDeclaration` |  |
| `value` | `unknown` |  |

#### Returns

`void`

#### Inherited from

`API.setMetadata`

#### Source

[packages/core/src/api/API.ts:654](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/bf383cc50e22f56b35d4d9074e74a4639c99d45e/packages/core/src/api/API.ts#L654)

***

### subscribeToMetadata()

> **subscribeToMetadata**(`bindTarget`, `lifecycleHook`, `callback`): `void`

Subscribes to a property in meta binds metadata cache.
This returns a subscription that can be used to unsubscribe as well as update the cache.
IF YOU DON'T CALL `unsubscribe` THE SUBSCRIPTION WILL LEAK MEMORY.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `bindTarget` | `BindTargetDeclaration` |  |
| `lifecycleHook` | `LifecycleHook` | In Obsidian this is an instance of the Component class. The subscription will be automatically unsubscribed when the component is unloaded. |
| `callback` | (`value`) => `void` |  |

#### Returns

`void`

#### Inherited from

`API.subscribeToMetadata`

#### Source

[packages/core/src/api/API.ts:718](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/bf383cc50e22f56b35d4d9074e74a4639c99d45e/packages/core/src/api/API.ts#L718)

***

### updateMetadata()

> **updateMetadata**(`bindTarget`, `updateFn`): `void`

Updates a property in meta binds metadata cache.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `bindTarget` | `BindTargetDeclaration` |  |
| `updateFn` | (`value`) => `unknown` | a function that takes the current value and returns the new value |

#### Returns

`void`

#### Inherited from

`API.updateMetadata`

#### Source

[packages/core/src/api/API.ts:692](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/bf383cc50e22f56b35d4d9074e74a4639c99d45e/packages/core/src/api/API.ts#L692)

***

### wrapInMDRC()

> **wrapInMDRC**(`field`, `containerEl`, `component`): `MountableMDRC`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `field` | `Mountable` |
| `containerEl` | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) |
| `component` | [`ComponentLike`](/obsidian-meta-bind-plugin-docs/api/interfaces/componentlike/) |

#### Returns

`MountableMDRC`

#### Source

[packages/obsidian/src/ObsidianAPI.ts:41](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/bf383cc50e22f56b35d4d9074e74a4639c99d45e/packages/obsidian/src/ObsidianAPI.ts#L41)
