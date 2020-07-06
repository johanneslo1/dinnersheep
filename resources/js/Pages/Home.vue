<template>
    <PageLayout title="Dashboard">
        <template #body>

            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        Deine Besuchsstatistik
                    </div>
                    <div class="card-body">
                        <VisitsPerWeekday :visitsPerWeekday="visitsPerWeekday"/>
                    </div>
                </div>

                <div class="card mt-3">
                    <div class="card-header">
                        Deinen Ausgabenstatistik
                    </div>
                    <div class="card-body">
                        <p>In den letzten 30 Tagen hast du bei {{ monthlyVisitsCount }} Besuchen im Schnitt {{
                            monthlyAverageSpending | money }} ausgegeben.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <AddRestaurantVisit/>
                <AddFavouriteMeal class="mt-3"/>
                <AddVisitorGroup class="mt-3"/>
            </div>
        </template>
    </PageLayout>
</template>

<script>
    import Layout from "../Shared/Layouts/Layout";
    import AddRestaurantVisit from "../Shared/AddRecordCards/AddRestaurantVisit";
    import AddFavouriteMeal from "../Shared/AddRecordCards/AddFavouriteMeal";
    import AddVisitorGroup from "../Shared/AddRecordCards/AddVisitorGroup";
    import PageLayout from "../Shared/Layouts/PageLayout";
    import VisitsPerWeekday from "../Shared/Charts/VisitsPerWeekday";

    export default {
        props: {
            visitsPerWeekday: {
                default: [],
                type: Array,
            },
            monthlyAverageSpending: {
                default: 0,
                type: Number,
            },
            monthlyVisitsCount: {
                default: 0,
                type: Number,
            }
        },
        layout: Layout,
        components: {
            AddRestaurantVisit,
            AddFavouriteMeal,
            AddVisitorGroup,
            VisitsPerWeekday,
            PageLayout,
        }
    }
</script>

<style scoped>

</style>
