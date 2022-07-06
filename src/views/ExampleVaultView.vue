<template>
    <div class="content">
        <h1>Example Vault</h1>
        <p>
            The example vault that I use for testing can be found <external-link
                to="https://github.com/mProjectsCode/obsidian-meta-bind-plugin/tree/master/exampleVault">here</external-link>.
        </p>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import CalloutComponent from '@/components/CalloutComponent.vue';
import CodeBlockComponent from '@/components/CodeBlockComponent.vue';
import ExternalLink from '@/components/ExternalLinkComponent.vue';

@Options({
    name: 'ExampleVaultView',

    components: {ExternalLink, CodeBlockComponent, CalloutComponent},
})
export default class ExampleVaultView extends Vue {
}
</script>

<style>
</style>