<template>
    <PageLayout title="Meine Restaurants">
        <template #action>
            <div class="d-flex align-items-center">
                <InertiaSearch/>

                <inertia-link class="btn btn-primary ml-3" href="/restaurants/create">
                    <i class="mdi mdi-plus"></i> Restaurant erstellen
                </inertia-link>

                <FilterToggleButton :sort-filter="sortFilter"/>
            </div>
        </template>
        <template #body>
            <div class="col-md-12">
                <ResponseMessage/>
                <div class="card">
                    <div class="card-body p-0">
                        <div v-if="restaurantsPagination.data.length > 0">
                            <table class="table border-top-0">
                                <thead>
                                <tr>
                                    <th>
                                        <InertiaSortFilter :sortFilter="sortFilter" sort-name="name" filter-name="name"
                                                           placeholder="Name" input-type="text"/>
                                    </th>
                                    <th>
                                        <InertiaSortFilter :sortFilter="sortFilter" sort-name="favorite_meal"
                                                           filter-name="favorite_meal" placeholder="Lieblingsgericht"
                                                           input-type="text"/>
                                    </th>
                                    <th>
                                        <InertiaSortFilter :sortFilter="sortFilter" sort-name="visits"
                                                           filter-name="visits" placeholder="Besuche"
                                                           input-type="text"/>
                                    </th>
                                    <th>Aktionen</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="restaurant in restaurantsPagination.data">
                                    <td>
                                        <inertia-link :href="`/restaurants/${restaurant.id}`">
                                            {{ restaurant.name }}
                                        </inertia-link>
                                    </td>
                                    <td>
                                        <inertia-link v-if="restaurant.favorite_meal"
                                                      :href="`/restaurants/${restaurant.id}/meals/${restaurant.favorite_meal.id}`">
                                            {{ restaurant.favorite_meal.name }}
                                        </inertia-link>
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
                        <p v-else class="text-center my-3">Es wurden keine Datensätze gefunden!</p>

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
    import InertiaSearch from "../../Shared/InertiaSearch";
    import InertiaSortFilter from "../../Shared/InertiaSortFilter";
    import FilterToggleButton from "../../Shared/Table/FilterToggleButton";

    export default {
        props: {
            restaurantsPagination: null,
        },
        components: {
            PageLayout,
            InertiaPagination,
            ResponseMessage,
            InertiaSearch,
            InertiaSortFilter,
            FilterToggleButton
        },
        data() {
            return {
                sortFilter: {
                    showFilters: false,
                    filters: {
                        name: '',
                    },
                    sort: {
                        attribute: 'id',
                        direction: 'asc'
                    }
                }
            }
        },
        layout: Layout,
        methods: {}
    }
</script>

<style>

</style>
