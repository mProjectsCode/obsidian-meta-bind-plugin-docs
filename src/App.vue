<template>
    <div class="header">
        <div class="header-text">
            Obsidian Meta Bind Plugin
        </div>
    </div>
    <div class="main">
        <SidebarComponent/>
        <div class="content-wrapper">
            <RouterView/>
        </div>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import SidebarComponent from '@/components/SidebarComponent.vue';


@Options({
    components: {SidebarComponent},
})
export default class App extends Vue {

}
</script>

<style>
@import "@/assets/base.css";


</style>
