<template>
    <PageLayout title="Restaurants">
        <template #action>
            <inertia-link class="btn btn-primary" href="/restaurants/create">
                <i class="mdi mdi-plus"></i> Restaurant erstellen
            </inertia-link>
        </template>
        <template #body>
            <div class="col-md-12">
                <ResponseMessage />
                <div class="card">
                    <div class="card-body p-0">
                        <table class="table border-top-0">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Lieblingsgericht</th>
                                <th>Besuche</th>
                                <th>Aktionen</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="restaurant in restaurantsPagination.data">
                                <td>
                                    {{ restaurant.name }}
                                </td>
                                <td>
                                    {{ restaurant.favorite_meal ? restaurant.favorite_meal.name : '' }}
                                </td>
                                <td>
                                    {{ restaurant.visits }}
                                </td>
                                <td>

                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <InertiaPagination :data="restaurantsPagination"></InertiaPagination>
                    </div>
                </div>
            </div>
        </template>
    </PageLayout>
</template>

<script>
    import Layout from "../../Shared/Layouts/Layout";
    import PageLayout from "../../Shared/Layouts/PageLayout";
    import InertiaPagination from "../../Shared/InertiaPagination";
    import ResponseMessage from "../../Shared/ResponseMessage";

    export default {
        props: {
            restaurantsPagination: null,
        },
        components: {
            PageLayout,
            InertiaPagination,
            ResponseMessage
        },
        data() {
          return {

          }
        },
        layout: Layout,
        methods: {

        }
    }
</script>

<style scoped>

</style>
