<template>
    <div class="content">
        <h1>Mata Bind Tutorial</h1>
        <p>
            This is a quick tutorial that should make you familliar with the plugin.
        </p>

        <h3>Installation</h3>
        <p>
            Before you can start using the plugin you have to install it.
            You can do that either from the <external-link to="https://github.com/mProjectsCode/obsidian-meta-bind-plugin/releases/latest">latest release on GitHub</external-link>
            or from obsidian's plugin browser once <external-link to="https://github.com/obsidianmd/obsidian-releases/pull/1030">this</external-link> PR gets through.
        </p>
        <p>
            Should you choose to install the plugin manually from GitHub, extract the zip-archive into the .obsidian/plugins folder in your vault. <br>
            The folder structure should look like this.

        </p>
        <code-block-component><pre>[path to your vault]
|_ .obsidian
   |_ plugins
      |_ obsidian-meta-bind-plugin
         |_ main.js
         |_ manifest.json
         |_ styles.css</pre></code-block-component>

        <h3>Getting started</h3>
        <p>
            There are two ways of creating an input field in your note.
        </p>
        <p>
            The first is using an inline code block, like this <code class="inline">`INPUT[input_type]`</code>. <br>
            The second one is using a code block with <code class="inline">meta-bind</code> as the language, something like this.
        </p>
        <code-block-component><pre>```meta-bind
INPUT[input_type]
```</pre></code-block-component>
        <p>
            Where <code class="inline">input_type</code> is a valid input type, like <code class="inline">toggle</code>.
        </p>
        <callout-component callout-type="warning" header="Inline code blocks">
            <p>
                Not all input types work inside of inline code blocks.
            </p>
        </callout-component>
        <callout-component callout-type="info" header="List of input types">
            <p>
                A full list of input types can be found <router-link to="/inputTypes">here</router-link>.
            </p>
        </callout-component>

        <h3>Binding to Metadata</h3>
        <p>
            Input fields can and should be bound to metadata fields, so properties in your front-matter.
            This is achieved by adding the bind target behind the input type, seperated by a colon.
        </p>
        <code-block-component><pre>```meta-bind
INPUT[input_type:bind_target]
```</pre></code-block-component>
        <p>
            By default the bind target points to the same file as the input field is in.
            But it can also point to a different file like this.
        </p>
        <code-block-component><pre>```meta-bind
INPUT[input_type:file_name#bind_target]
```</pre></code-block-component>
        <p>
            This will show an error message when there are multiple files with that name.
            Therefore you can also optionally specify the file path.
        </p>
        <code-block-component><pre>```meta-bind
INPUT[input_type:path/to/file_name#bind_target]
```</pre></code-block-component>
        <callout-component callout-type="danger" header="Input fields without a bind target">
            <p>
                Specifying a bind target is optional, but recommended. <br>
                If there is no bind target present, the input field will <strong>not preserve its state</strong> on note reopen or restart of obsidian,
                since the input field has nowhere to store its data.
            </p>
        </callout-component>

        <h3>Arguments</h3>
        <p>
            Some input types also support arguments to further customize them. <br/>
            Arguments are specified in parathesies behind the input type.
        </p>
        <code-block-component><pre>```meta-bind
INPUT[input_type(argument_name, argument_name_2):bind_target]
```</pre></code-block-component>
        <p>
            Some arguments require a value. Values are passed like this.
        </p>
        <code-block-component><pre>```meta-bind
INPUT[input_type(argument_name(value)):bind_target]
```</pre></code-block-component>
        <p>
            An example is the <code class="inline">class(css_class_name)</code> argument,
            that lets you add a custom css class to an input field to for example modify its size. <br>
            This is a full width, <code class="inline">200px</code> high text input field.
        </p>
        <code-block-component><pre>```meta-bind
INPUT[text_area(class(meta-bind-full-width), class(meta-bind-high)):bind_target]
```</pre></code-block-component>
        <callout-component callout-type="info" header="List of arguments">
            <p>
                A full list of all available arguments can be found <router-link to="/arguments">here</router-link>.
            </p>
        </callout-component>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import CalloutComponent from '@/components/CalloutComponent.vue';
import CodeBlockComponent from '@/components/CodeBlockComponent.vue';
import ExternalLink from '@/components/ExternalLinkComponent.vue';

@Options({
    name: 'TutorialView',

    components: {ExternalLink, CodeBlockComponent, CalloutComponent},
})
export default class TutorialView extends Vue {
}
</script>

<style>
</style>