<template>
    <div class="sidebar">
        <div v-for="sidebarItem in sidebarItems" class="sidebar-item-container">
            <router-link :class="sidebarItem.active ? 'sidebar-item-active': ''" :to="sidebarItem.path"
                         class="sidebar-item no-icon"
                         v-on:click="() => setActive(sidebarItem)">
                {{ sidebarItem.name }}
            </router-link>
            <router-link v-for="sidebarSubItem in subItems" v-if="sidebarItem.active"
                         :to="`${sidebarItem.path}#${sidebarSubItem.id}`" class="sidebar-item sidebar-sub-item no-icon">
                {{ sidebarSubItem.name }}
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import HomeView from '@/views/HomeView.vue';
import {getSidebarRoutes} from '@/router/routes';

interface Data {
    sidebarItems: any[];
    subItems: SidebarSubItem[];
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
            subItems: [],
            sidebarItems: getSidebarRoutes(),
        };
    },

    watch: {
        '$route': 'currentRoute',
    },

    mounted() {
        console.log(HomeView);

        // console.log((router.getRoutes()[0].components?.['default'] as any).data());
    },

    methods: {
        setActive(sidebarItem: any): void {
            for (const otherSidebarItem of this.sidebarItems) {
                otherSidebarItem.active = otherSidebarItem.name === sidebarItem.name;
            }
        },
        currentRoute() {
            this.$nextTick(() => {
                for (const sidebarItem of this.sidebarItems) {
                    sidebarItem.active = sidebarItem.path === this.$route.path;
                }
                this.subItems = [];
                const headings = document.querySelectorAll('h1,h2,h3,h4,h6,h6');
                for (const heading of headings) {
                    if (!heading.id) {
                        continue;
                    }
                    this.subItems.push({id: heading.id, name: heading.innerHTML})
                }
            });
        },
    },
});
</script>

<style scoped>

</style>