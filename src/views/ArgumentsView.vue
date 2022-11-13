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
                <div class="table-cell"><router-link to="/inputTypes#select">select</router-link> and <router-link to="/inputTypes#multi_select">multi_select</router-link></div>
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
            The <code class="inline">option</code> argument adds an option to the select or multi select input field.
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
                <div class="table-cell"><router-link to="/inputTypes#select">select</router-link> and <router-link to="/inputTypes#multi_select">multi_select</router-link></div>
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
INPUT[select(title(select_title)):bind_target]
```</pre></code-block-component>


        <h2 id="alignRight">Align Right Argument</h2>
        <div class="table">
            <div class="table-row">
                <div class="table-cell">Identifier</div>
                <div class="table-cell"><code class="inline">alignRight</code></div>
            </div>
            <div class="table-row">
                <div class="table-cell">Applicable to</div>
                <div class="table-cell"><router-link to="/inputTypes#date_picker">select</router-link></div>
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
INPUT[select(title(select_title)):bind_target]
```</pre></code-block-component>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import CalloutComponent from '@/components/CalloutComponent.vue';
import CodeBlockComponent from '@/components/CodeBlockComponent.vue';

@Options({
    name: 'ArgumentsView',

    components: {CodeBlockComponent, CalloutComponent},
})
export default class ArgumentsView extends Vue {
}
</script>

<style>
</style>