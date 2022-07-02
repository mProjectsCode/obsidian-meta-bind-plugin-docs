<template>
    <div class="code-block">
        <div class="code-block-copy tooltip" v-on:click="copy()" v-on:mouseenter="mouseEnter()"
             v-on:mouseleave="mouseLeave()">
            <span class="material-symbols-outlined">
                content_copy
            </span>
            <div v-show="hover" :style="{color: copied ? 'var(--success-light)' : 'var(--text-important)'}"
                 class="bottom">
                {{ copied ? 'copied' : 'copy' }}
                <i></i>
            </div>
        </div>
        <div class="code-block-block"><code ref="code" class="block">
            <slot></slot>
        </code></div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';


export default defineComponent({
    name: 'CodeBlockComponent',

    data() {
        return {
            hover: false,
            copied: false,
        };
    },

    props: {},

    methods: {
        copy() {
            navigator.clipboard.writeText((this.$refs.code as HTMLElement).innerText);
            this.copied = true;
        },

        mouseEnter() {
            this.hover = true;
            this.copied = false;
        },

        mouseLeave() {
            this.hover = false;
            this.copied = false;
        },
    },
});
</script>

<style scoped>

</style>