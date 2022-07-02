<template>
    <div class="content">
        <p>
            <strong>Obsidian Meta Bind Plugin</strong> is a plugin for <a href="https://obsidian.md/">Obsidian</a>,
            that allows you to create input fields inside your notes.
            Those input fields can then be bound to metadata fields in your notes.
        </p>
        <p>
            So you can for example add a toggle on your task note, that automatically marks the note as completed when
            toggled.
            And the best thing is, it even works inside your <a
                href="https://github.com/blacksmithgu/obsidian-dataview">Dataview</a> tables. :D
        </p>

        <h3 id="getting-started">Getting Started</h3>
        <p>
            I made a small
            <router-link to="/tutorial">tutorial</router-link>
            you can follow. <br>
            Alternatively you can explore these docs or the
            <router-link to="/exampleVault">example vault</router-link>
            I use for testing.
        </p>

        <h3 id="issues">Bugs, Errors or Unexpected Behavior?</h3>
        <p>
            Please take a look at the
            <router-link to="troubleShooting">trouble shooting</router-link>
            page.
        </p>

        <h3 id="contributing">Features Requests and Contributing</h3>
        <p>
            Contributions are always welcome. If you have an idea, feel free to open a feature request under the <a
                href="https://github.com/mProjectsCode/obsidian-meta-bind-plugin/issues">issues tab on GitHub</a> or
            even create a pull request.
        </p>

        <h3 id="other-work">Check out my other work</h3>
        <p>
            Other Plugins that i meade for Obsidian <br/>
            - <a href="https://github.com/mProjectsCode/obsidian-media-db-plugin">Obsidian Media DB Plugin</a>
        </p>
        <p>
            Take a look at my other projects on my <a href="https://mprojectscode.github.io/">website</a>. Alternatively
            you can check me out on <a href="https://github.com/mProjectsCode">GitHub</a>.
        </p>


    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import CalloutComponent from '@/components/CalloutComponent.vue';

@Options({
    name: 'HomeView',
    components: {CalloutComponent},
})
export default class HomeView extends Vue {
}
</script>
