<template>
    <a class="external" target="_blank" :href="to">
        <slot></slot>
    </a>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'ExternalLink',

    props: {
        to: {
            type: String,
            value: '/',
        },
    },
});
</script>

<style scoped>

</style>