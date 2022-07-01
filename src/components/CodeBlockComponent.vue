<template>
    <div class="code-block">
        <div class="code-block-copy tooltip"  v-on:click="copy()" v-on:mouseenter="mouseEnter()" v-on:mouseleave="mouseLeave()">
            <span class="material-symbols-outlined">
                content_copy
            </span>
            <div class="bottom" v-show="hover" :style="{color: copied ? 'var(--success-light)' : 'var(--text-important)'}">
                {{ copied ? 'copied' : 'copy' }}
                <i></i>
            </div>
        </div>
        <div class="code-block-block"><code class="block" ref="code"><slot></slot></code></div>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';


@Options({
    name: 'CodeBlockComponent',

    data() {
        return {
            hover: false,
            copied: false,
        }
    },

    props: {

    },

    methods: {
        copy() {
            navigator.clipboard.writeText(this.$refs.code.innerText);
            this.copied = true;
        },

        mouseEnter() {
            this.hover = true;
            this.copied = false;
        },

        mouseLeave() {
            this.hover = false;
            this.copied = false;
        }
    }
})
export default class CodeBlockComponent extends Vue {

}
</script>

<style scoped>

</style>