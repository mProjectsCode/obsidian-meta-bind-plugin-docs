<template>
    <div class="content">
        <h1>Arguments</h1>
        <p>
            This is a list of all the different arguments you can apply to input fields.
        </p>
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