<template>
    <div class="content">
        <h1>Input Types</h1>
        <p>
            This is a list of all the different types of input fields the plugin can create.
        </p>

        <h3 id="toggle">Toggle</h3>
        <p>
            A simple toggle input field.
        </p>

        <h3 id="slider">Slider</h3>
        <p>
            A simple slider input field that can be controlled by
            <router-link to="/arguments#minValue"><code class="inline">minValue(value)</code></router-link>
            ,
            <router-link to="/arguments#maxValue"><code class="inline">maxValue(value)</code></router-link>
            and with optional labels using
            <router-link to="/arguments#addLabels"><code class="inline">addLabels</code></router-link>
            .
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
export default class InputFieldsView extends Vue {
}
</script>

<style>
</style>