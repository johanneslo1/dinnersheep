<template>
    <button  @click="toggleFilters" :class="`btn ${sortFilter.showFilters ? 'btn-secondary' : 'btn-outline-secondary'} ml-3`">
        <i v-if="sortFilter.showFilters" class="mdi mdi-filter-remove"></i>
        <i v-else class="mdi mdi-filter"></i>
    </button>
</template>

<script>
    export default {
        props: {
            sortFilter: Object
        },
        mounted() {
            if(this.hasFilterParams()) {
                this.sortFilter.showFilters = true;
            }
        },
        methods: {

            toggleFilters() {
                this.sortFilter.showFilters = !this.sortFilter.showFilters;

                if(!this.sortFilter.showFilters && this.hasFilterParams()) {
                    this.$inertia.visit('?', {
                    })
                }
            },

            hasFilterParams()
            {
                return new URLSearchParams(window.location.search).get('filters');
            }
        }
    }
</script>

<style scoped>

</style>
