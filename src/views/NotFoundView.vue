<template>
    <div class="content">
        <h1 style="text-align: center">404 - Not Found</h1>
        <p style="text-align: center">It seems like you are lost... May
            <router-link to="/">this</router-link>
            guide you on you future journeys.
        </p>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({
    name: 'NotFoundView',
})
export default class NotFoundView extends Vue {
}
</script>

<style>
</style>