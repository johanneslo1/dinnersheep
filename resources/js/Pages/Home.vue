<template>
    <PageLayout title="Dashboard">
        <template #body>

            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        Deine Statistik
                    </div>
                    <div class="card-body">
                        <AveragePerWeekday />
                    </div>
                </div>

                <div class="card mt-3">
                    <div class="card-header">
                        Dein Lieblingsrestaurant
                    </div>
                    <div class="card-body">
                        <p>Dein Lieblingsrestaurant ist derzeit Sultan.</p>
                    </div>
                </div>

                <div class="card mt-3">
                    <div class="card-header">
                        Dein Lieblingsgericht
                    </div>
                    <div class="card-body">
                        <p>Dein Lieblingsrestaurant ist derzeit Sultan.</p>
                    </div>
                </div>

                <div class="card mt-3">
                    <div class="card-header">
                        Dein Lieblingsgericht
                    </div>
                    <div class="card-body">
                        <p>Dein Lieblingsrestaurant ist derzeit Sultan.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <AddRestaurantVisit />
                <AddFavouriteMeal class="mt-3" />
                <AddVisitorGroup class="mt-3" />
            </div>
        </template>
    </PageLayout>
</template>

<script>
    import Layout from "../Shared/Layouts/Layout";
    import AddRestaurantVisit from "../Shared/AddRecordCards/AddRestaurantVisit";
    import AddFavouriteMeal from "../Shared/AddRecordCards/AddFavouriteMeal";
    import AddVisitorGroup from "../Shared/AddRecordCards/AddVisitorGroup";
    import AveragePerWeekday from "../Shared/Charts/AveragePerWeekday";
    import PageLayout from "../Shared/Layouts/PageLayout";

    export default {
        layout: Layout,
        components: {
            AddRestaurantVisit,
            AddFavouriteMeal,
            AddVisitorGroup,
            AveragePerWeekday,
            PageLayout
        }
    }
</script>

<style scoped>

</style>
