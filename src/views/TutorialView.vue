<template>
    <div class="content">
        <h1>Mata Bind Tutorial</h1>
        <p>
            This is a quick tutorial that should make you familliar with the plugin.
        </p>

        <h2 id="installation">Installation</h2>
        <p>
            Before you can start using the plugin you have to install it.
            You can do that either from the <external-link to="https://github.com/mProjectsCode/obsidian-meta-bind-plugin/releases/latest">latest release on GitHub</external-link>
            or from obsidian's plugin browser.
        </p>
        <p>
            Should you choose to install the plugin manually from GitHub, extract the zip-archive into the .obsidian/plugins folder in your vault. <br>
            The folder structure should look like this.

        </p>
        <code-block-component><pre>[path to your vault]
|_ .obsidian
   |_ plugins
      |_ obsidian-meta-bind-plugin
         |_ main.js
         |_ manifest.json
         |_ styles.css</pre></code-block-component>

        <h2>Features</h2>
        <p>
            Now you can explore the features of the plugin.
        </p>
        <ul>
            <li><router-link to="/inputFields">Input Fields</router-link></li>
            <li><router-link to="/viewFields">View Fields</router-link></li>
        </ul>

    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import CalloutComponent from '@/components/CalloutComponent.vue';
import CodeBlockComponent from '@/components/CodeBlockComponent.vue';
import ExternalLink from '@/components/ExternalLinkComponent.vue';

@Options({
    name: 'TutorialView',

    components: {ExternalLink, CodeBlockComponent, CalloutComponent},
})
export default class TutorialView extends Vue {
}
</script>

<style>
</style>