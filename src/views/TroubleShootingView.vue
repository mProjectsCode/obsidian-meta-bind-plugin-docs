<template>
    <div class="content">
        <h1>Trouble Shooting</h1>
        <p>
            Please open a bug report on <external-link to="https://github.com/mProjectsCode/obsidian-meta-bind-plugin/issues">GitHub</external-link>.
        </p>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import CalloutComponent from '@/components/CalloutComponent.vue';
import CodeBlockComponent from '@/components/CodeBlockComponent.vue';
import ExternalLink from '@/components/ExternalLinkComponent.vue';

@Options({
    name: 'TroubleShootingView',

    components: {ExternalLink, CodeBlockComponent, CalloutComponent},
})
export default class TroubleShootingView extends Vue {
}
</script>

<style>
</style>