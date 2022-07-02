<template>
    <div class="content">
        <h1>Example Vault</h1>
        <p>
            The example vault that I use for testing can be found <a
                href="https://github.com/mProjectsCode/obsidian-meta-bind-plugin/tree/master/exampleVault">here</a>.
        </p>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import CalloutComponent from '@/components/CalloutComponent.vue';
import CodeBlockComponent from '@/components/CodeBlockComponent.vue';

@Options({
    name: 'ExampleVaultView',

    components: {CodeBlockComponent, CalloutComponent},
})
export default class ExampleVaultView extends Vue {
}
</script>

<style>
</style>