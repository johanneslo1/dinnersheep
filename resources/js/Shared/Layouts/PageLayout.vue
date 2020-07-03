<template>
    <div class="container page-container">
        <div class="row">
            <div class="col-md-12 mb-4 d-flex justify-content-between align-items-center">
                <h3 class="page-title">{{ title }}</h3>
                <slot name="action"></slot>
            </div>
            <slot name="body"></slot>
        </div>
    </div>
</template>

<script>
    import Layout from "./Layout";
    import AddRestaurantVisit from "../AddRecordCards/AddRestaurantVisit";
    import AddFavouriteMeal from "../AddRecordCards/AddFavouriteMeal";
    import AddVisitorGroup from "../AddRecordCards/AddVisitorGroup";
    import AveragePerWeekday from "../Charts/VisitsPerWeekday";

    export default {
        props: {
            title: {
                default: 'Titel',
                type: String
            }
        },
        layout: Layout,
        components: {}
    }
</script>

<style scoped>

</style>
