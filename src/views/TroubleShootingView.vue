<template>
    <div class="content">
        <h1>Trouble Shooting</h1>
        <p>
            Please open a bug report on <a href="https://github.com/mProjectsCode/obsidian-meta-bind-plugin/issues">GitHub</a>.
        </p>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import CalloutComponent from '@/components/CalloutComponent.vue';
import CodeBlockComponent from '@/components/CodeBlockComponent.vue';

@Options({
    name: 'TroubleShootingView',

    components: {CodeBlockComponent, CalloutComponent},
})
export default class TroubleShootingView extends Vue {
}
</script>

<style>
</style>