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
    <div class="footer">
        <span>Copyright All Rights Reserved</span>
        <a href="https://mprojectscode.github.io/privacy_statement_english">Privacy Policy</a>
        <a href="https://mprojectscode.github.io/privacy_statement_german">Datenschutz</a>
        <a href="https://mprojectscode.github.io/impressum">Impressum</a>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import SidebarComponent from '@/components/SidebarComponent.vue';
import CalloutComponent from '@/components/CalloutComponent.vue';


@Options({
    components: {SidebarComponent, CalloutComponent},
})
export default class App extends Vue {

}
</script>

<style>
@import "@/assets/base.css";


</style>
