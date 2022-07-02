<template>
    <div class="sidebar">
        <div v-for="sidebarItem in sidebarItems" class="sidebar-item-container">
            <router-link :class="sidebarItem.active ? 'sidebar-item-active': ''" :to="sidebarItem.route"
                         class="sidebar-item"
                         v-on:click="() => setActive(sidebarItem)">{{ sidebarItem.name }}
            </router-link>
            <router-link v-for="sidebarSubItem in sidebarItem.subItems" v-if="sidebarItem.active"
                         :to="`${sidebarItem.route}#${sidebarSubItem.id}`" class="sidebar-item sidebar-sub-item">{{
                    sidebarSubItem.name
                }}
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

interface Data {
    sidebarItems: SidebarItem[];
}

interface SidebarItem {
    name: string;
    route: string;
    subItems: SidebarSubItem[];
    active: boolean;
}

interface SidebarSubItem {
    name: string;
    id: string;
}

export default defineComponent({
    name: 'SidebarComponent',

    data(): Data {
        return {
            sidebarItems: [
                {
                    name: 'Home',
                    route: '/',
                    subItems: [{
                        name: 'Getting Started',
                        id: 'getting-started',
                    }, {
                        name: 'Bugs, Errors or Unexpected Behavior?',
                        id: 'issues',
                    }, {
                        name: 'Features Requests and Contributing',
                        id: 'contributing',
                    }, {
                        name: 'Check out my other work',
                        id: 'other-work',
                    }],
                    active: false,
                },
                {
                    name: 'Tutorial',
                    route: '/tutorial',
                    subItems: [],
                    active: false,
                },
                {
                    name: 'Input Fields',
                    route: '/inputFields',
                    subItems: [],
                    active: false,
                },
                {
                    name: 'Arguments',
                    route: '/arguments',
                    subItems: [],
                    active: false,
                },
                {
                    name: 'Trouble Shooting',
                    route: '/troubleShooting',
                    subItems: [],
                    active: false,
                },
                {
                    name: 'Example Vault',
                    route: '/exampleVault',
                    subItems: [],
                    active: false,
                },
                {
                    name: 'Website Layout Test',
                    route: '/test',
                    subItems: [],
                    active: false,
                },
            ],
        };
    },

    watch: {
        '$route': 'currentRoute',
    },

    mounted() {

    },

    methods: {
        setActive(sidebarItem: SidebarItem): void {
            for (const otherSidebarItem of this.sidebarItems) {
                otherSidebarItem.active = otherSidebarItem.name === sidebarItem.name;
            }
        },
        currentRoute() {
            this.$nextTick(() => {
                for (const sidebarItem of this.sidebarItems) {
                    sidebarItem.active = sidebarItem.route === this.$route.path;
                }
            });
        },
    },
});
</script>

<style scoped>

</style>