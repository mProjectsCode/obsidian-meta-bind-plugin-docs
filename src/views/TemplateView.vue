<template>
    <div class="content">
        <h1>Templates</h1>
        <p>
            Templates can be specified in the settings using this syntax.
        </p>
        <code-block-component><pre>template_name -> template</pre></code-block-component>
        <p>
            Where the template is a input field declaration on one line.
        </p>
        <h3>Example</h3>
        <code-block-component><pre>slider_template -> INPUT[slider(addLabels, minValue(0), maxValue(10)]</pre></code-block-component>
        <h2>Usage</h2>
        <p>
            Templates can be used in notes, by referencing it's name.
        </p>
        <code-block-component><pre>INPUT[template_name][overrides]</pre></code-block-component>
        <callout-component callout-type="danger" header="Brackets are important">
            <p>
                Overrides are optional, but the square brackets are not.
            </p>
            <h4>Valid</h4>
            <code-block-component><pre>INPUT[template_name][]</pre></code-block-component>
            <h4>Invalid</h4>
            <code-block-component><pre>INPUT[template_name]</pre></code-block-component>
        </callout-component>

        <h3>Example</h3>
        <code-block-component><pre>INPUT[slider_template][:slider_value]</pre></code-block-component>
        <p>
            This creates an input field of the <code class="inline">slider_template</code> template and adds <code class="inline">:slider_value</code> as a bind target.
        </p>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import CalloutComponent from '@/components/CalloutComponent.vue';
import CodeBlockComponent from '@/components/CodeBlockComponent.vue';
import ExternalLink from '@/components/ExternalLinkComponent.vue';

@Options({
    name: 'TemplateView',

    components: {ExternalLink, CodeBlockComponent, CalloutComponent},
})
export default class TemplateView extends Vue {
}
</script>

<style>
</style>