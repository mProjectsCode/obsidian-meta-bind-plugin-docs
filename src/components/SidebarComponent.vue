<template>
 <div class="sidebar">
     <div class="sidebar-item-container" v-for="sidebarItem in sidebarItems">
         <router-link :to="sidebarItem.route" class="sidebar-item" :class="sidebarItem.active ? 'sidebar-item-active': ''" v-on:click="() => setActive(sidebarItem)">{{ sidebarItem.name }}</router-link>
         <router-link :to="`${sidebarItem.route}#${sidebarSubItem.id}`" class="sidebar-item sidebar-sub-item" v-for="sidebarSubItem in sidebarItem.subItems" v-if="sidebarItem.active">{{ sidebarSubItem.name }}</router-link>
     </div>
 </div>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue';

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

export default defineComponent ({
    name: 'SidebarComponent',

    data(): Data {
        return {
            sidebarItems: [
                {
                    name: 'Home',
                    route: '/',
                    subItems: [{
                        name: 'Sub Item 1',
                        id: 'heading 1',
                    }, {
                        name: 'Sub Item 2',
                        id: 'heading 2',
                    }],
                    active: false,
                },
                {
                    name: 'About',
                    route: '/about',
                    subItems: [{
                        name: 'Sub Item 3',
                        id: 'heading 1',
                    }, {
                        name: 'Sub Item 4',
                        id: 'heading 2',
                    }],
                    active: false,
                },
                {
                    name: 'Website Layout Tests',
                    route: '/test',
                    subItems: [],
                    active: false,
                },
            ],
        };
    },

    watch: {
        '$route': 'currentRoute'
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
        }
    }
})
</script>

<style scoped>

</style>