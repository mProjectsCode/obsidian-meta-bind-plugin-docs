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

[packages/obsidian/src/ObsidianAPI.ts:37](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/f9023ae676220bedb04ba32015467653a5c722bf/packages/obsidian/src/ObsidianAPI.ts#L37)

## Properties

### bindTargetParser

> **`readonly`** **bindTargetParser**: `BindTargetParser`

#### Inherited from

`API.bindTargetParser`

#### Source

[packages/core/src/api/API.ts:92](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/f9023ae676220bedb04ba32015467653a5c722bf/packages/core/src/api/API.ts#L92)

***

### buttonActionRunner

> **`readonly`** **buttonActionRunner**: `ButtonActionRunner`

#### Inherited from

`API.buttonActionRunner`

#### Source

[packages/core/src/api/API.ts:97](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/f9023ae676220bedb04ba32015467653a5c722bf/packages/core/src/api/API.ts#L97)

***

### buttonManager

> **`readonly`** **buttonManager**: `ButtonManager`

#### Inherited from

`API.buttonManager`

#### Source

[packages/core/src/api/API.ts:98](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/f9023ae676220bedb04ba32015467653a5c722bf/packages/core/src/api/API.ts#L98)

***

### buttonParser

> **`readonly`** **buttonParser**: `ButtonParser`

#### Inherited from

`API.buttonParser`

#### Source

[packages/core/src/api/API.ts:91](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/f9023ae676220bedb04ba32015467653a5c722bf/packages/core/src/api/API.ts#L91)

***

### inputFieldFactory

> **`readonly`** **inputFieldFactory**: `InputFieldFactory`

#### Inherited from

`API.inputFieldFactory`

#### Source

[packages/core/src/api/API.ts:94](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/f9023ae676220bedb04ba32015467653a5c722bf/packages/core/src/api/API.ts#L94)

***

### inputFieldParser

> **`readonly`** **inputFieldParser**: `InputFieldParser`

#### Inherited from

`API.inputFieldParser`

#### Source

[packages/core/src/api/API.ts:88](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/f9023ae676220bedb04ba32015467653a5c722bf/packages/core/src/api/API.ts#L88)

***

### jsViewFieldParser

> **`readonly`** **jsViewFieldParser**: `JsViewFieldParser`

#### Inherited from

`API.jsViewFieldParser`

#### Source

[packages/core/src/api/API.ts:90](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/f9023ae676220bedb04ba32015467653a5c722bf/packages/core/src/api/API.ts#L90)

***

### plugin

> **`readonly`** **plugin**: `default`

#### Inherited from

`API.plugin`

#### Source

[packages/core/src/api/API.ts:86](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/f9023ae676220bedb04ba32015467653a5c722bf/packages/core/src/api/API.ts#L86)

***

### syntaxHighlighting

> **`readonly`** **syntaxHighlighting**: `SyntaxHighlightingAPI`

#### Inherited from

`API.syntaxHighlighting`

#### Source

[packages/core/src/api/API.ts:100](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/f9023ae676220bedb04ba32015467653a5c722bf/packages/core/src/api/API.ts#L100)

***

### viewFieldFactory

> **`readonly`** **viewFieldFactory**: `ViewFieldFactory`

#### Inherited from

`API.viewFieldFactory`

#### Source

[packages/core/src/api/API.ts:95](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/f9023ae676220bedb04ba32015467653a5c722bf/packages/core/src/api/API.ts#L95)

***

### viewFieldParser

> **`readonly`** **viewFieldParser**: `ViewFieldParser`

#### Inherited from

`API.viewFieldParser`

#### Source

[packages/core/src/api/API.ts:89](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/f9023ae676220bedb04ba32015467653a5c722bf/packages/core/src/api/API.ts#L89)

## Methods

### constructMDRCWidget()

> **constructMDRCWidget**(`inlineFieldType`, `content`, `filePath`, `component`): `MarkdownRenderChildWidget`

Creates a CM6 widget from a given widget type.

This is only useful fur use in a CodeMirror plugin.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `inlineFieldType` | [`InlineFieldType`](/obsidian-meta-bind-plugin-docs/api/type-aliases/inlinefieldtype/) |  |
| `content` | `string` |  |
| `filePath` | `string` |  |
| `component` | `Component` |  |

#### Returns

`MarkdownRenderChildWidget`

#### Source

[packages/obsidian/src/ObsidianAPI.ts:81](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/f9023ae676220bedb04ba32015467653a5c722bf/packages/obsidian/src/ObsidianAPI.ts#L81)

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

[packages/core/src/api/API.ts:642](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/f9023ae676220bedb04ba32015467653a5c722bf/packages/core/src/api/API.ts#L642)

***

### createButtonGroupMountable()

> **createButtonGroupMountable**(`filePath`, `options`): `ButtonGroupMountable`

Creates a button group from an options object.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `filePath` | `string` | the file path that the field is located in or an empty string |
| `options` | [`ButtonGroupOptions`](/obsidian-meta-bind-plugin-docs/api/interfaces/buttongroupoptions/) |  |

#### Returns

`ButtonGroupMountable`

#### Inherited from

`API.createButtonGroupMountable`

#### Source

[packages/core/src/api/API.ts:437](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/f9023ae676220bedb04ba32015467653a5c722bf/packages/core/src/api/API.ts#L437)

***

### createButtonMountable()

> **createButtonMountable**(`filePath`, `options`): `ButtonMountable`

Creates a button from an options object.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `filePath` | `string` | the file path that the field is located in or an empty string |
| `options` | [`ButtonOptions`](/obsidian-meta-bind-plugin-docs/api/interfaces/buttonoptions/) |  |

#### Returns

`ButtonMountable`

#### Inherited from

`API.createButtonMountable`

#### Source

[packages/core/src/api/API.ts:474](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/f9023ae676220bedb04ba32015467653a5c722bf/packages/core/src/api/API.ts#L474)

***

### createEmbedMountable()

> **createEmbedMountable**(`filePath`, `options`): `EmbedMountable`

Creates a meta bind embed fields from an options object.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `filePath` | `string` | the file path that the field is located in or an empty string |
| `options` | [`EmbedOptions`](/obsidian-meta-bind-plugin-docs/api/interfaces/embedoptions/) |  |

#### Returns

`EmbedMountable`

#### Inherited from

`API.createEmbedMountable`

#### Source

[packages/core/src/api/API.ts:504](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/f9023ae676220bedb04ba32015467653a5c722bf/packages/core/src/api/API.ts#L504)

***

### createExcludedMountable()

> **createExcludedMountable**(`filePath`): `ExcludedMountable`

Creates an excluded notification mountable for the excluded folders setting.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `filePath` | `string` | the file path that the field is located in or an empty string |

#### Returns

`ExcludedMountable`

#### Inherited from

`API.createExcludedMountable`

#### Source

[packages/core/src/api/API.ts:525](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/f9023ae676220bedb04ba32015467653a5c722bf/packages/core/src/api/API.ts#L525)

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
| `type` | `Type` | `undefined` | the type of the field |
| `filePath` | `string` | `undefined` | the file path that the field is located in, or an empty string if it is not in a file |
| `options` | [`FieldOptionMap`](/obsidian-meta-bind-plugin-docs/api/interfaces/fieldoptionmap/)\[`Type`\] | `undefined` |  |
| `honorExcludedSetting` | `boolean` | `true` | whether to honor the excluded folders settings for this field |

#### Returns

`FieldMountable`

#### Inherited from

`API.createField`

#### Source

[packages/core/src/api/API.ts:128](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/f9023ae676220bedb04ba32015467653a5c722bf/packages/core/src/api/API.ts#L128)

***

### createInlineFieldFromString()

> **createInlineFieldFromString**(`fieldString`, `filePath`, `scope`, `renderChildType`, `position`?, `honorExcludedSetting`?): `FieldMountable`

Creates an inline field from a string.
Will throw an error if the string is not a valid declaration.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `fieldString` | `string` | `undefined` | the declaration string of the field |
| `filePath` | `string` | `undefined` | the file path that the field is located in |
| `scope` | `undefined` \| `BindTargetScope` | `undefined` | optional bind target scope |
| `renderChildType` | [`RenderChildType`](/obsidian-meta-bind-plugin-docs/api/enumerations/renderchildtype/) | `RenderChildType.INLINE` | the render child type, default INLINE |
| `position`? | [`NotePosition`](/obsidian-meta-bind-plugin-docs/api/classes/noteposition/) | `undefined` | an optional note position |
| `honorExcludedSetting`? | `boolean` | `true` | whether to honor the excluded folders settings for this field |

#### Returns

`FieldMountable`

#### Inherited from

`API.createInlineFieldFromString`

#### Source

[packages/core/src/api/API.ts:188](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/f9023ae676220bedb04ba32015467653a5c722bf/packages/core/src/api/API.ts#L188)

***

### createInlineFieldOfTypeFromString()

> **createInlineFieldOfTypeFromString**(`type`, `declaration`, `filePath`, `scope`, `renderChildType`, `position`?, `honorExcludedSetting`?): `FieldMountable`

Creates an inline field of a given type and string.
Will throw an error if the string is not a valid inline field type.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `type` | [`InlineFieldType`](/obsidian-meta-bind-plugin-docs/api/type-aliases/inlinefieldtype/) | `undefined` | the field type |
| `declaration` | `string` | `undefined` | the declaration string of the field |
| `filePath` | `string` | `undefined` | the file path that the field is located in |
| `scope` | `undefined` \| `BindTargetScope` | `undefined` | optional bind target scope |
| `renderChildType` | [`RenderChildType`](/obsidian-meta-bind-plugin-docs/api/enumerations/renderchildtype/) | `RenderChildType.INLINE` | the render child type, default INLINE |
| `position`? | [`NotePosition`](/obsidian-meta-bind-plugin-docs/api/classes/noteposition/) | `undefined` | an optional note position |
| `honorExcludedSetting`? | `boolean` | `true` | whether to honor the excluded folders settings for this field |

#### Returns

`FieldMountable`

#### Inherited from

`API.createInlineFieldOfTypeFromString`

#### Source

[packages/core/src/api/API.ts:245](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/f9023ae676220bedb04ba32015467653a5c722bf/packages/core/src/api/API.ts#L245)

***

### createInputFieldMountable()

> **createInputFieldMountable**(`filePath`, `options`): `InputFieldMountable`

Creates an input field from an options object.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `filePath` | `string` | the file path that the field is located in or an empty string |
| `options` | [`InputFieldOptions`](/obsidian-meta-bind-plugin-docs/api/interfaces/inputfieldoptions/) |  |

#### Returns

`InputFieldMountable`

#### Inherited from

`API.createInputFieldMountable`

#### Source

[packages/core/src/api/API.ts:316](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/f9023ae676220bedb04ba32015467653a5c722bf/packages/core/src/api/API.ts#L316)

***

### createJsViewFieldMountable()

> **createJsViewFieldMountable**(`filePath`, `options`): `JsViewFieldMountable`

Creates a JS view field from an options object.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `filePath` | `string` | the file path that the field is located in or an empty string |
| `options` | [`JsViewFieldOptions`](/obsidian-meta-bind-plugin-docs/api/interfaces/jsviewfieldoptions/) |  |

#### Returns

`JsViewFieldMountable`

#### Inherited from

`API.createJsViewFieldMountable`

#### Source

[packages/core/src/api/API.ts:384](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/f9023ae676220bedb04ba32015467653a5c722bf/packages/core/src/api/API.ts#L384)

***

### createNotePosition()

> **createNotePosition**(`lineStart`, `lineEnd`): [`NotePosition`](/obsidian-meta-bind-plugin-docs/api/classes/noteposition/)

Creates a note position from a line start and line end number.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `lineStart` | `number` |  |
| `lineEnd` | `number` |  |

#### Returns

[`NotePosition`](/obsidian-meta-bind-plugin-docs/api/classes/noteposition/)

#### Inherited from

`API.createNotePosition`

#### Source

[packages/core/src/api/API.ts:809](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/f9023ae676220bedb04ba32015467653a5c722bf/packages/core/src/api/API.ts#L809)

***

### createSignal()

> **createSignal**\<`T`\>(`value`): `Signal`\<`T`\>

Creates a signal.

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` |  |

#### Returns

`Signal`\<`T`\>

#### Inherited from

`API.createSignal`

#### Source

[packages/core/src/api/API.ts:630](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/f9023ae676220bedb04ba32015467653a5c722bf/packages/core/src/api/API.ts#L630)

***

### createTableMountable()

> **createTableMountable**(`filePath`, `options`): `TableMountable`

Creates a table from an options object.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `filePath` | `string` | the file path that the field is located in or an empty string |
| `options` | [`TableOptions`](/obsidian-meta-bind-plugin-docs/api/interfaces/tableoptions/) |  |

#### Returns

`TableMountable`

#### Inherited from

`API.createTableMountable`

#### Source

[packages/core/src/api/API.ts:414](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/f9023ae676220bedb04ba32015467653a5c722bf/packages/core/src/api/API.ts#L414)

***

### createViewFieldMountable()

> **createViewFieldMountable**(`filePath`, `options`): `ViewFieldMountable`

Creates a view field from an options object.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `filePath` | `string` | the file path that the field is located in or an empty string |
| `options` | [`ViewFieldOptions`](/obsidian-meta-bind-plugin-docs/api/interfaces/viewfieldoptions/) |  |

#### Returns

`ViewFieldMountable`

#### Inherited from

`API.createViewFieldMountable`

#### Source

[packages/core/src/api/API.ts:350](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/f9023ae676220bedb04ba32015467653a5c722bf/packages/core/src/api/API.ts#L350)

***

### getInlineFieldDeclarationPrefix()

> **getInlineFieldDeclarationPrefix**(`fieldType`): `string`

Gets the prefix of a given widget type. (e.g. INPUT or VIEW).

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `fieldType` | [`FieldType`](/obsidian-meta-bind-plugin-docs/api/enumerations/fieldtype/) |  |

#### Returns

`string`

#### Inherited from

`API.getInlineFieldDeclarationPrefix`

#### Source

[packages/core/src/api/API.ts:544](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/f9023ae676220bedb04ba32015467653a5c722bf/packages/core/src/api/API.ts#L544)

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

[packages/core/src/api/API.ts:724](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/f9023ae676220bedb04ba32015467653a5c722bf/packages/core/src/api/API.ts#L724)

***

### isInlineFieldDeclaration()

> **isInlineFieldDeclaration**(`fieldType`, `str`): `boolean`

Checks if a string is a declaration of a given widget type.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `fieldType` | [`FieldType`](/obsidian-meta-bind-plugin-docs/api/enumerations/fieldtype/) |  |
| `str` | `string` | the declaration string |

#### Returns

`boolean`

#### Inherited from

`API.isInlineFieldDeclaration`

#### Source

[packages/core/src/api/API.ts:575](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/f9023ae676220bedb04ba32015467653a5c722bf/packages/core/src/api/API.ts#L575)

***

### isInlineFieldDeclarationAndGetType()

> **isInlineFieldDeclarationAndGetType**(`str`): `undefined` \| [`InlineFieldType`](/obsidian-meta-bind-plugin-docs/api/type-aliases/inlinefieldtype/)

Checks if a string is any declaration and if yes returns the widget type.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | the declaration string |

#### Returns

`undefined` \| [`InlineFieldType`](/obsidian-meta-bind-plugin-docs/api/type-aliases/inlinefieldtype/)

#### Inherited from

`API.isInlineFieldDeclarationAndGetType`

#### Source

[packages/core/src/api/API.ts:598](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/f9023ae676220bedb04ba32015467653a5c722bf/packages/core/src/api/API.ts#L598)

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

[packages/core/src/api/API.ts:678](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/f9023ae676220bedb04ba32015467653a5c722bf/packages/core/src/api/API.ts#L678)

***

### reactiveMetadata()

> **reactiveMetadata**(`bindTargets`, `lifecycleHook`, `callback`): `ReactiveComponent`

Creates a JS Engine reactive component that will re-render when the given bind targets change.

This requires JS Engine to be installed and enabled!

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `bindTargets` | `BindTargetDeclaration`[] | the bind targets to listen to |
| `lifecycleHook` | `LifecycleHook` | a [Component](https://docs.obsidian.md/Reference/TypeScript+API/Component) |
| `callback` | (...`values`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`unknown`\> | the callback to call with all the values of the bind targets when one of them changes. What ever this callback returns will be rendered by the reactive component. |

#### Returns

`ReactiveComponent`

#### Source

[packages/obsidian/src/ObsidianAPI.ts:107](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/f9023ae676220bedb04ba32015467653a5c722bf/packages/obsidian/src/ObsidianAPI.ts#L107)

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

[packages/core/src/api/API.ts:705](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/f9023ae676220bedb04ba32015467653a5c722bf/packages/core/src/api/API.ts#L705)

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

[packages/core/src/api/API.ts:769](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/f9023ae676220bedb04ba32015467653a5c722bf/packages/core/src/api/API.ts#L769)

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

[packages/core/src/api/API.ts:743](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/f9023ae676220bedb04ba32015467653a5c722bf/packages/core/src/api/API.ts#L743)

***

### wrapInMDRC()

> **wrapInMDRC**(`mountable`, `containerEl`, `component`): `MountableMDRC`

Wraps any mountable in a [MarkdownRenderChild](https://docs.obsidian.md/Reference/TypeScript+API/MarkdownRenderChild)
and adds it as a child to the passed in [ComponentLike](../../../../../obsidian-meta-bind-plugin-docs/api/interfaces/componentlike).

A [ComponentLike](../../../../../obsidian-meta-bind-plugin-docs/api/interfaces/componentlike) is either a [Component](https://docs.obsidian.md/Reference/TypeScript+API/Component) or a [MarkdownPostProcessorContext](https://docs.obsidian.md/Reference/TypeScript+API/MarkdownPostProcessorContext)

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `mountable` | `Mountable` | the mountable to wrap in a [MarkdownRenderChild](https://docs.obsidian.md/Reference/TypeScript+API/MarkdownRenderChild) |
| `containerEl` | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) | the element to mount the [MarkdownRenderChild](https://docs.obsidian.md/Reference/TypeScript+API/MarkdownRenderChild) to |
| `component` | [`ComponentLike`](/obsidian-meta-bind-plugin-docs/api/interfaces/componentlike/) | the [ComponentLike](../../../../../obsidian-meta-bind-plugin-docs/api/interfaces/componentlike) to register the [MarkdownRenderChild](https://docs.obsidian.md/Reference/TypeScript+API/MarkdownRenderChild) to |

#### Returns

`MountableMDRC`

#### Source

[packages/obsidian/src/ObsidianAPI.ts:51](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/f9023ae676220bedb04ba32015467653a5c722bf/packages/obsidian/src/ObsidianAPI.ts#L51)
