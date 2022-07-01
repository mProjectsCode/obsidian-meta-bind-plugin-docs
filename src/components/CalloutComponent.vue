<template>

    <div class="callout">
        <div class="callout-bg" :style="{background: getColor()}">
            <div class="callout-header" :style="{background: getColorLight()}">
                <span class="callout-icon material-symbols-outlined">{{ getIcon() }}</span>
                <span class="callout-title">{{ header }}</span>
            </div>
            <div class="callout-content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {CalloutType} from '@/main';
import {defineComponent} from 'vue';


export default defineComponent ({
    name: 'CalloutComponent',

    props: {
        calloutType: String,
        header: String,
    },

    methods: {
        getColor(): string {
            if (this.calloutType === CalloutType.INFO) {
                return 'var(--info)'
            } else if (this.calloutType === CalloutType.SUCCESS) {
                return 'var(--success)'
            } else if (this.calloutType === CalloutType.WARNING) {
                return 'var(--warning)'
            } else if (this.calloutType === CalloutType.DANGER) {
                return 'var(--danger)'
            } else if (this.calloutType === CalloutType.ERROR) {
                return 'var(--error)'
            } else if (this.calloutType === CalloutType.QUOTE) {
                return 'var(--quote)'
            } else {
                return '#000000';
            }
        },

        getColorLight(): string {
            if (this.calloutType === CalloutType.INFO) {
                return 'var(--info-light)'
            } else if (this.calloutType === CalloutType.SUCCESS) {
                return 'var(--success-light)'
            } else if (this.calloutType === CalloutType.WARNING) {
                return 'var(--warning-light)'
            } else if (this.calloutType === CalloutType.DANGER) {
                return 'var(--danger-light)'
            } else if (this.calloutType === CalloutType.ERROR) {
                return 'var(--error-light)'
            } else if (this.calloutType === CalloutType.QUOTE) {
                return 'var(--quote-light)'
            } else {
                return '#000000';
            }
        },

        getIcon(): string {
            if (this.calloutType === CalloutType.INFO) {
                return 'info'
            } else if (this.calloutType === CalloutType.SUCCESS) {
                return 'check_circle'
            } else if (this.calloutType === CalloutType.WARNING) {
                return 'warning'
            } else if (this.calloutType === CalloutType.DANGER) {
                return 'error'
            } else if (this.calloutType === CalloutType.ERROR) {
                return 'dangerous'
            } else if (this.calloutType === CalloutType.QUOTE) {
                return 'format_quote'
            } else {
                return 'info';
            }
        }
    }
})
</script>

<style scoped>
.callout {
    background: var(--background-secondary);
    border-radius: var(--default-border-radius);
    margin-block: 1em;
}

.callout-bg {
    border-radius: var(--default-border-radius);
}

.callout-header {
    padding: var(--default-spacing);
    display: flex;
    gap: var(--default-spacing);
    border-radius: var(--default-border-radius);
}

.callout-icon {
    color: #000000;
}

.callout-title {
    flex: 1;
    color: #000000;
    font-weight: bold;
}

.callout-content {
    padding: var(--default-spacing);
}
</style>