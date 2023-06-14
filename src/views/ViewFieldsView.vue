<template>
    <div class="content">
        <h1>View Fields</h1>
        <p>
            View Fields are a powerful way to reactively display your metadata in your notes.
            They can bind to multiple frontmatter fields and update as soon as you change them, much like dataview inline queries,
            but with <router-link to="/publishSupport">Obsidian Publish support</router-link>.
            View Fields use <external-link to="https://mathjs.org/">mathjs</external-link> under the hood.
        </p>

        <h2 id="examples">Examples</h2>
        <p>
            A simple view field mirroring a frontmatter field looks like this.
        </p>
        <code-block-component><pre>`VIEW[{bind_target}]`</pre></code-block-component>
        <p>
            Of-course vie fields can also be bound to a different file.
        </p>
        <code-block-component><pre>`VIEW[{file_name#bind_target}]`</pre></code-block-component>
        <p>
            View fields can also make use of mathjs to calculate using your metadata things.
        </p>
        <code-block-component><pre>`VIEW[{bind_target} in cm]`</pre></code-block-component>
        <code-block-component><pre>`VIEW[{bind_target} * {other_bind_target}]`</pre></code-block-component>

        <h2 id="js_view_fields">JS View Fields</h2>
        <p>
            The plugin also offers to create view fields with JavaScript from inside of your notes.
            You can activate them in the plugins settings.
            By default js view fields are disabled, as they create a security risk.
        </p>
        <p>
            Js view fields consist of two sections. First the bind target section and then the js section.
            The return value of the js section is then displayed.
        </p>
        <code-block-component><pre>```meta-bind-js-view
{bind_target} as var1
{other_note#bind_target} as var2
---
return `${context.var1 * context.var2} km`;
```</pre></code-block-component>
        <p>
            There are multiple global variables available in the js section.
        </p>
        <div class="table">
            <div class="table-row">
                <div class="table-cell"><code class="inline">app</code></div>
                <div class="table-cell">Reference to the obsidian app instance.</div>
            </div>
            <div class="table-row">
                <div class="table-cell"><code class="inline">mb</code></div>
                <div class="table-cell">Reference to the <external-link to="https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/master/src/api/API.ts">meta-bind api</external-link>.</div>
            </div>
            <div class="table-row">
                <div class="table-cell"><code class="inline">dv</code></div>
                <div class="table-cell">Reference to the the dataview api, if dataview is installed and enabled.</div>
            </div>
            <div class="table-row">
                <div class="table-cell"><code class="inline">filePath</code></div>
                <div class="table-cell">The file path of the note that is view field is in.</div>
            </div>
            <div class="table-row">
                <div class="table-cell"><code class="inline">context</code></div>
                <div class="table-cell">This object contains your bound metadata. Updating the values in this object has no effect.</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import CalloutComponent from '@/components/CalloutComponent.vue';
import CodeBlockComponent from '@/components/CodeBlockComponent.vue';
import ExternalLink from '@/components/ExternalLinkComponent.vue';

@Options({
    name: 'ViewFieldsView',

    components: {ExternalLink, CodeBlockComponent, CalloutComponent},
})
export default class ViewFieldsView extends Vue {
}
</script>

<style>
</style>