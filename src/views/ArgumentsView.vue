<template>
    <div class="content">
        <h1>Arguments</h1>
        <p>
            This is a list of all the different arguments you can apply to input fields.
        </p>


        <h2 id="class">Class Argument</h2>
        <div class="table">
            <div class="table-row">
                <div class="table-cell">Identifier</div>
                <div class="table-cell"><code class="inline">class</code></div>
            </div>
            <div class="table-row">
                <div class="table-cell">Applicable to</div>
                <div class="table-cell">all input fields</div>
            </div>
            <div class="table-row">
                <div class="table-cell">Values</div>
                <div class="table-cell">the css class name</div>
            </div>
            <div class="table-row">
                <div class="table-cell">Allows multiple</div>
                <div class="table-cell">true</div>
            </div>
        </div>

        <h3>Description</h3>
        <p>
            The class argument adds a css class to an input field. The css class can be an obsidian inbuilt one, from a theme or a snippet.
        </p>

        <h3>Example</h3>
        <code-block-component><pre>```meta-bind
INPUT[input_type(class(class_name_1), class(class_name_2):bind_target]
```</pre></code-block-component>


        <h2 id="addLabels">Add Labels Argument</h2>
        <div class="table">
            <div class="table-row">
                <div class="table-cell">Identifier</div>
                <div class="table-cell"><code class="inline">addLabels</code></div>
            </div>
            <div class="table-row">
                <div class="table-cell">Applicable to</div>
                <div class="table-cell"><router-link to="/inputTypes#slider">Slider</router-link></div>
            </div>
            <div class="table-row">
                <div class="table-cell">Values</div>
                <div class="table-cell">none</div>
            </div>
            <div class="table-row">
                <div class="table-cell">Allows multiple</div>
                <div class="table-cell">false</div>
            </div>
        </div>

        <h3>Description</h3>
        <p>
            The <code class="inline">addLabels</code> argument adds labels to the slider input field that mark the min and max value.
        </p>

        <h3>Example</h3>
        <code-block-component><pre>```meta-bind
INPUT[slider(addLabels):bind_target]
```</pre></code-block-component>


        <h2 id="minmaxValue">Min and Max Value Argument</h2>
        <div class="table">
            <div class="table-row">
                <div class="table-cell">Identifier</div>
                <div class="table-cell"><code class="inline">minValue</code> or <code class="inline">maxValue</code></div>
            </div>
            <div class="table-row">
                <div class="table-cell">Applicable to</div>
                <div class="table-cell"><router-link to="/inputTypes#slider">Slider</router-link></div>
            </div>
            <div class="table-row">
                <div class="table-cell">Values</div>
                <div class="table-cell">a number for the min or max value respectively</div>
            </div>
            <div class="table-row">
                <div class="table-cell">Allows multiple</div>
                <div class="table-cell">false, but both are allowed</div>
            </div>
        </div>

        <h3>Description</h3>
        <p>
            The <code class="inline">minValue</code> and <code class="inline">maxValue</code> arguments set a min and max value for a slider respectively.
            The default for the min value is 0 and 100 for the max value.
        </p>

        <h3>Example</h3>
        <code-block-component><pre>```meta-bind
INPUT[slider(minValue(0), maxValue(10):bind_target]
```</pre></code-block-component>


        <h2 id="option">Option Argument</h2>
        <div class="table">
            <div class="table-row">
                <div class="table-cell">Identifier</div>
                <div class="table-cell"><code class="inline">option</code></div>
            </div>
            <div class="table-row">
                <div class="table-cell">Applicable to</div>
                <div class="table-cell"><router-link to="/inputTypes#select">select</router-link>, <router-link to="/inputTypes#multi_select">multi_select</router-link>, <router-link to="/inputTypes#suggester">suggester</router-link> and <router-link to="/inputTypes#image_suggester">image_suggester</router-link></div>
            </div>
            <div class="table-row">
                <div class="table-cell">Values</div>
                <div class="table-cell">the name of the option</div>
            </div>
            <div class="table-row">
                <div class="table-cell">Allows multiple</div>
                <div class="table-cell">true</div>
            </div>
        </div>

        <h3>Description</h3>
        <p>
            The <code class="inline">option</code> argument adds an option to the select, multi select, suggester and image_suggester input field.
            The name displayed and written to the metadata is the value specified for this argument.
        </p>

        <h3>Example</h3>
        <code-block-component><pre>```meta-bind
INPUT[select(option(option_name_1), option(option_name_2)):bind_target]
```</pre></code-block-component>


        <h2 id="title">Title Argument</h2>
        <div class="table">
            <div class="table-row">
                <div class="table-cell">Identifier</div>
                <div class="table-cell"><code class="inline">title</code></div>
            </div>
            <div class="table-row">
                <div class="table-cell">Applicable to</div>
                <div class="table-cell">all input fields</div>
            </div>
            <div class="table-row">
                <div class="table-cell">Values</div>
                <div class="table-cell">the title</div>
            </div>
            <div class="table-row">
                <div class="table-cell">Allows multiple</div>
                <div class="table-cell">false</div>
            </div>
        </div>

        <h3>Description</h3>
        <p>
            The <code class="inline">title</code> argument adds a title displayed above all option in a select or multi select input field.
        </p>

        <h3>Example</h3>
        <code-block-component><pre>```meta-bind
INPUT[toggle(title(input_field_title)):bind_target]
```</pre></code-block-component>


        <h2 id="alignRight">Align Right Argument</h2>
        <callout-component callout-type="danger" header="Deprecated">
            <p>
                This input field argument is deprecated and will be removed in a future release.
            </p>
        </callout-component>
        <div class="table">
            <div class="table-row">
                <div class="table-cell">Identifier</div>
                <div class="table-cell"><code class="inline">alignRight</code></div>
            </div>
            <div class="table-row">
                <div class="table-cell">Applicable to</div>
                <div class="table-cell"><router-link to="/inputTypes#date_picker">date_picker</router-link></div>
            </div>
            <div class="table-row">
                <div class="table-cell">Values</div>
                <div class="table-cell">none</div>
            </div>
            <div class="table-row">
                <div class="table-cell">Allows multiple</div>
                <div class="table-cell">false</div>
            </div>
        </div>

        <h3>Description</h3>
        <p>
            The <code class="inline">alignRight</code> argument aligns the date picker to the right of the input field.
        </p>

        <h3>Example</h3>
        <code-block-component><pre>```meta-bind
INPUT[date_picker(align_right):bind_target]
```</pre></code-block-component>

        <h2 id="optionQuery">Option Query Argument</h2>
        <div class="table">
            <div class="table-row">
                <div class="table-cell">Identifier</div>
                <div class="table-cell"><code class="inline">optionQuery</code></div>
            </div>
            <div class="table-row">
                <div class="table-cell">Applicable to</div>
                <div class="table-cell"><router-link to="/inputTypes#suggester">suggester</router-link> and <router-link to="/inputTypes#image_suggester">image_suggester</router-link></div>
            </div>
            <div class="table-row">
                <div class="table-cell">Values</div>
                <div class="table-cell">a <external-link to="https://blacksmithgu.github.io/obsidian-dataview/reference/sources/">dataview data source</external-link></div>
            </div>
            <div class="table-row">
                <div class="table-cell">Allows multiple</div>
                <div class="table-cell">true</div>
            </div>
        </div>

        <h3>Description</h3>
        <p>
            The <code class="inline">optionQuery</code> argument adds a query to the suggester or image suggester input field.
            The query takes form of a <external-link to="https://blacksmithgu.github.io/obsidian-dataview/reference/sources/">dataview data source</external-link>.
            The suggester input field uses dataview to resolve the query.
            The image suggester input field only supports folder queries (<code class="inline">"path/to/folder"</code>) and doesn't need dataview to resolve the query.
        </p>

        <h3>Example</h3>
        <code-block-component><pre>```meta-bind
INPUT[suggester(optionQuery(#tag)):bind_target]
```</pre></code-block-component>
        <code-block-component><pre>```meta-bind
INPUT[suggester(optionQuery("path/to/folder")):bind_target]
```</pre></code-block-component>
        <code-block-component><pre>```meta-bind
INPUT[image_suggester(optionQuery("path/to/folder")):bind_target]
```</pre></code-block-component>

        <h2 id="alignRight">Showcase Argument</h2>
        <div class="table">
            <div class="table-row">
                <div class="table-cell">Identifier</div>
                <div class="table-cell"><code class="inline">showcase</code></div>
            </div>
            <div class="table-row">
                <div class="table-cell">Applicable to</div>
                <div class="table-cell">all input fields</div>
            </div>
            <div class="table-row">
                <div class="table-cell">Values</div>
                <div class="table-cell">none</div>
            </div>
            <div class="table-row">
                <div class="table-cell">Allows multiple</div>
                <div class="table-cell">false</div>
            </div>
        </div>

        <h3>Description</h3>
        <p>
            The <code class="inline">showcase</code> argument creates a card around the input field, showing the input field declaration at the bottom.
            This is used in the <router-link to="exampleVault">Example Vault</router-link>.
        </p>

        <h3>Example</h3>
        <code-block-component><pre>```meta-bind
INPUT[toggle(showcase):bind_target]
```</pre></code-block-component>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import CalloutComponent from '@/components/CalloutComponent.vue';
import CodeBlockComponent from '@/components/CodeBlockComponent.vue';
import ExternalLink from '@/components/ExternalLinkComponent.vue';

@Options({
    name: 'ArgumentsView',

    components: {ExternalLink, CodeBlockComponent, CalloutComponent},
})
export default class ArgumentsView extends Vue {
}
</script>

<style>
</style>