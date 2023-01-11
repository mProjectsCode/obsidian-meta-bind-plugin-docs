<template>
    <div class="content">
        <h1>Input Types</h1>
        <p>
            This is a list of all the different types of input fields the plugin can create.
        </p>

        <h2 id="toggle">Toggle</h2>
        <div class="table">
            <div class="table-row">
                <div class="table-cell">Identifier</div>
                <div class="table-cell"><code class="inline">toggle</code></div>
            </div>
            <div class="table-row">
                <div class="table-cell">Allowed in</div>
                <div class="table-cell">code block and inline code block</div>
            </div>
        </div>

        <h3>Description</h3>
        <p>
            A simple toggle input field.
        </p>


        <h2 id="slider">Slider</h2>
        <div class="table">
            <div class="table-row">
                <div class="table-cell">Identifier</div>
                <div class="table-cell"><code class="inline">slider</code></div>
            </div>
            <div class="table-row">
                <div class="table-cell">Allowed in</div>
                <div class="table-cell">code block and inline code block</div>
            </div>
        </div>

        <h3>Description</h3>
        <p>
            A simple slider input field that can be controlled by
            <router-link to="/arguments#minmaxValue"><code class="inline">minValue(value)</code></router-link>
            ,
            <router-link to="/arguments#minmaxValue"><code class="inline">maxValue(value)</code></router-link>
            and with optional labels using
            <router-link to="/arguments#addLabels"><code class="inline">addLabels</code></router-link>
            .
        </p>


        <h2 id="text">Text</h2>
        <div class="table">
            <div class="table-row">
                <div class="table-cell">Identifier</div>
                <div class="table-cell"><code class="inline">text</code></div>
            </div>
            <div class="table-row">
                <div class="table-cell">Allowed in</div>
                <div class="table-cell">code block and inline code block</div>
            </div>
        </div>

        <h3>Description</h3>
        <p>
            A simple inline text field.
        </p>


        <h2 id="text_area">Text Area</h2>
        <div class="table">
            <div class="table-row">
                <div class="table-cell">Identifier</div>
                <div class="table-cell"><code class="inline">text_area</code></div>
            </div>
            <div class="table-row">
                <div class="table-cell">Allowed in</div>
                <div class="table-cell">code block and inline code block</div>
            </div>
        </div>

        <h3>Description</h3>
        <p>
            A simple text area field.
        </p>


        <h2 id="select">Select</h2>
        <div class="table">
            <div class="table-row">
                <div class="table-cell">Identifier</div>
                <div class="table-cell"><code class="inline">select</code></div>
            </div>
            <div class="table-row">
                <div class="table-cell">Allowed in</div>
                <div class="table-cell">code block</div>
            </div>
        </div>

        <h3>Description</h3>
        <p>
            A select input field. This input field only supports a single selection.
            Select options can be added using the
            <router-link to="/arguments#option"><code class="inline">option(option_name)</code></router-link>
            argument.
            A title can be set using the
            <router-link to="/arguments#title"><code class="inline">title(title_name)</code></router-link>
            argument.
        </p>


        <h2 id="multi_select">Multi Select</h2>
        <div class="table">
            <div class="table-row">
                <div class="table-cell">Identifier</div>
                <div class="table-cell"><code class="inline">multi_select</code></div>
            </div>
            <div class="table-row">
                <div class="table-cell">Allowed in</div>
                <div class="table-cell">code block</div>
            </div>
        </div>

        <h3>Description</h3>
        <p>
            A multi select input field. This input field supports a multi selection.
            Select options can be added using the
            <router-link to="/arguments#option"><code class="inline">option(option_name)</code></router-link>
            argument.
            A title can be set using the
            <router-link to="/arguments#title"><code class="inline">title(title_name)</code></router-link>
            argument.
        </p>


        <h2 id="date">Date</h2>
        <div class="table">
            <div class="table-row">
                <div class="table-cell">Identifier</div>
                <div class="table-cell"><code class="inline">date</code></div>
            </div>
            <div class="table-row">
                <div class="table-cell">Allowed in</div>
                <div class="table-cell">code block and inline code block</div>
            </div>
        </div>

        <h3>Description</h3>
        <p>
            A date input field with 3 inputs for day, month and year.
        </p>


        <h2 id="time">Time</h2>
        <div class="table">
            <div class="table-row">
                <div class="table-cell">Identifier</div>
                <div class="table-cell"><code class="inline">time</code></div>
            </div>
            <div class="table-row">
                <div class="table-cell">Allowed in</div>
                <div class="table-cell">code block and inline code block</div>
            </div>
        </div>

        <h3>Description</h3>
        <p>
            A time input field with 2 inputs for minute and hour.
        </p>


        <h2 id="date_picker">Date Picker</h2>
        <div class="table">
            <div class="table-row">
                <div class="table-cell">Identifier</div>
                <div class="table-cell"><code class="inline">date_picker</code></div>
            </div>
            <div class="table-row">
                <div class="table-cell">Allowed in</div>
                <div class="table-cell">code block and inline code block</div>
            </div>
        </div>

        <h3>Description</h3>
        <p>
            A date picker input field.
            The date picker can be aligned to the right of the inout field using the
            <router-link to="/arguments#alignRight"><code class="inline">alignRight</code></router-link>
            argument.
        </p>


        <h2 id="number">Number</h2>
        <div class="table">
            <div class="table-row">
                <div class="table-cell">Identifier</div>
                <div class="table-cell"><code class="inline">number</code></div>
            </div>
            <div class="table-row">
                <div class="table-cell">Allowed in</div>
                <div class="table-cell">code block and inline code block</div>
            </div>
        </div>

        <h3>Description</h3>
        <p>
            A text input field limited only to numbers.
        </p>


        <h2 id="suggester">Suggester</h2>
        <div class="table">
            <div class="table-row">
                <div class="table-cell">Identifier</div>
                <div class="table-cell"><code class="inline">suggester</code></div>
            </div>
            <div class="table-row">
                <div class="table-cell">Allowed in</div>
                <div class="table-cell">code block and inline code block</div>
            </div>
        </div>

        <h3>Description</h3>
        <p>
            An input field that allows selection from a fuzzy search modal.
        </p>


        <h2 id="image-suggester">Image Suggester</h2>
        <div class="table">
            <div class="table-row">
                <div class="table-cell">Identifier</div>
                <div class="table-cell"><code class="inline">image_suggester</code></div>
            </div>
            <div class="table-row">
                <div class="table-cell">Allowed in</div>
                <div class="table-cell">code block and inline code block</div>
            </div>
        </div>

        <h3>Description</h3>
        <p>
            An input field that allows selection of images.
        </p>


        <h2 id="editor">Editor</h2>
        <div class="table">
            <div class="table-row">
                <div class="table-cell">Identifier</div>
                <div class="table-cell"><code class="inline">editor</code></div>
            </div>
            <div class="table-row">
                <div class="table-cell">Allowed in</div>
                <div class="table-cell">code block and inline code block</div>
            </div>
        </div>

        <h3>Description</h3>
        <p>
            A text area with full markdown support.
        </p>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import CalloutComponent from '@/components/CalloutComponent.vue';
import CodeBlockComponent from '@/components/CodeBlockComponent.vue';

@Options({
    name: 'InputFieldsView',

    components: {CodeBlockComponent, CalloutComponent},
})
export default class InputTypesView extends Vue {
}
</script>

<style>
</style>