---
title: View Fields
description: A tutorial for Meta Bind View Fields.
---

View Fields are a powerful way to reactively display your metadata in your notes. 
They can bind to multiple frontmatter fields and update as soon as you change them, much like dataview inline queries, but with Obsidian Publish support. 
View Fields use [mathjs expressions](https://mathjs.org/docs/expressions/syntax.html) under the hood. 

## Creating View Fields

Imagine we have a note which we use to plan an upcoming hiking trip. 
In the frontmatter we already created a field that tracks the distance in kilometers of the trip.
And we created an input field to change the distance from within our note.
It looks something like this.

````
Distance: `INPUT[number:distance]` km
````

But now we want to, for our american friends, know how long that is in freedom units. 
This is where view fields come in.

````
Distance: `INPUT[number:distance]` km
Distance in freedom units: `VIEW[{distance}]`
````

This will display the distance and change when we change the value using the input field above, but we are still missing the conversion.
At this point mathjs becomes useful. With it, we can simply convert the km into miles.

````
Distance: `INPUT[number:distance]` km
Distance in freedom units: `VIEW[number({distance} km, miles)]` miles
````

To make it a bit nicer to view, we can also round the number to two decimal places. And the displayed value still changes instantly when we change the distance using the input field.

````
Distance: `INPUT[number:distance]` km
Distance in freedom units: `VIEW[round(number({distance} km, miles), 2)]` miles
````

The references to the frontmatter in the curly brackets follow the same bind target rules as the bind target for input fields.

## Creating JS View Fields

The plugin also offers to create view fields with JavaScript from inside your notes. 
You can activate them in the plugins settings. 
By default, js view fields are disabled, as they can pose a security risk.

Js view fields consist of two sections. 
First the bind target section and then the JS section. 
When rendered, the JS view field displays the value returned in the JS section.

````
```meta-bind-js-view
{bind_target} as var1
{other_note#bind_target} as var2
---
return `${context.var1 * context.var2} km`;
```
````

There are multiple global variables available in the JS section.

| Name       | Description                                                                                 |
|------------|---------------------------------------------------------------------------------------------|
| `app`      | Reference to the obsidian app instance.                                                     | 
| `mb`       | Reference to the meta-bind api.                                                             |
| `dv`       | Reference to the dataview api, if dataview is installed and enabled.                        | 
| `filePath` | The file path of the note that is view field is in.                                         |
| `context`  | This object contains your bound metadata. Updating the values in this object has no effect. |


