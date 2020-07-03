<template>
    <div class="px-4 py-3 border-teal-300 border-top d-flex justify-content-between align-items-center">
        <p class="mb-0">Zeigt {{ data.from }} bis {{ data.to }} von {{ data.total }} Ergebnissen.</p>
        <pagination :data="data" @pagination-change-page="visitPage" :limit="limit" class="mb-0"></pagination>
    </div>
</template>

<script>
    export default {
        props: {
            data: null,
            limit: {
                default: 3,
                type: Number,
            }
        },
        methods: {
            visitPage(page = 1) {
                this.$inertia.visit(`?page=${page}`);
            }
        }
    }
</script>

<style scoped>

</style>
