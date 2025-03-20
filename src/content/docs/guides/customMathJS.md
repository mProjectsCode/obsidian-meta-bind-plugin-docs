---
title: Customizing MathJS
description: An example on how to import customizations into mathjs
---

You may find yourself wanting to add functionality to the [math view fields](/obsidian-meta-bind-plugin-docs/reference/viewfields/math/).
And as they use [mathjs](https://mathjs.org/) internally, you actually can!

## Importing new options into mathJS

The mathjs library allows the user to define his own functions and constants, as described in [their documentation](https://mathjs.org/docs/core/extension.html).

To leverage that, Meta Bind exposed its mathjs instance for you to modify.
The most sensible place to do this, is inside a [JS Engine startup script](https://www.moritzjung.dev/obsidian-js-engine-plugin-docs/guides/startupscripts/).
This ensures the modifications are loaded early and will be immediately available when the first documents gets rendered.

:::caution
Modifying mathJS via a `js-engine` codeblock inside a document may cause timing problems and is not recommended!
:::

### Adding a custom function `clamp`

As an example, we will define a `clamp()` function, which is not part of default mathJS, but can be very helpful.
The function should take in three parameters, the current value, a minimum, and a maximum. It returns the current value as long as its inside the range otherwise the boundary-value.

```js
clamp: (val, min, max) => Math.min(Math.max(min, val), max);
```

Add this definitions inside a JavaScrypt file stored in you Vault and enable that file to be [run as a startup script](https://www.moritzjung.dev/obsidian-js-engine-plugin-docs/guides/startupscripts/).
Inside the file you can use the `mathJSImport(dict, options)` function from the API to import you definitions into mathjs.

```js
const mb = engine.getPlugin('obsidian-meta-bind-plugin').api;

mb.mathJSImport({
	// definition of the clamp function
	clamp: (val, min, max) => Math.min(Math.max(min, val), max),

	// we can also define useful constants here
	foo: 42,
});
```

Now you can use this newly defined function in a view field.
This example will always display values between 0 and 10, even if `num` gets outside that range.

```meta-bind
VIEW[clamp({num}, 0, 10)]
```

You can also use the new constant `foo`. The following example will display `52`.

```meta-bind
VIEW[foo + 10]
```
