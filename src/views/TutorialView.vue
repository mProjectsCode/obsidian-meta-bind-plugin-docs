<template>
    <div class="content">
        <h1>Tutorial</h1>
        <p>
            This is a tutorial.
        </p>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import CalloutComponent from '@/components/CalloutComponent.vue';
import CodeBlockComponent from '@/components/CodeBlockComponent.vue';

@Options({
    name: 'TutorialView',

    components: {CodeBlockComponent, CalloutComponent},
})
export default class TutorialView extends Vue {
}
</script>

<style>
</style>