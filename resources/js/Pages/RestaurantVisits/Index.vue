<template>
    <PageLayout title="Meine Restaurantbesuche">
        <template #action>
            <div class="d-flex align-items-center">

                <inertia-link class="btn btn-primary ml-3" href="/visits/create">
                    <i class="mdi mdi-plus"></i> Besuch hinzufügen
                </inertia-link>

                <FilterToggleButton :sort-filter="sortFilter"/>
            </div>
        </template>
        <template #body>
            <div class="col-md-12">
                <ResponseMessage/>
                <div class="card">
                    <div class="card-body p-0">
                        <div v-if="restaurantVisitsPagination.data.length > 0">
                            <table class="table border-top-0">
                                <thead>
                                <tr>
                                    <th>
                                        <InertiaSortFilter :sortFilter="sortFilter" sort-name="restaurant"
                                                           filter-name="restaurant"
                                                           placeholder="Restaurant" input-type="text"/>
                                    </th>
                                    <th>
                                        <InertiaSortFilter :sortFilter="sortFilter" sort-name="visit_date"
                                                           filter-name="visit_date" placeholder="Datum"
                                                           input-type="text"/>
                                    </th>
                                    <th>
                                        <InertiaSortFilter :sortFilter="sortFilter" sort-name="costs"
                                                           filter-name="costs" placeholder="Kosten"
                                                           input-type="text"/>
                                    </th>
                                    <th>Aktionen</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="visit in restaurantVisitsPagination.data">
                                    <td>
                                        <inertia-link v-if="visit.restaurant"
                                                      :href="`/restaurants/${visit.restaurant.id}`">
                                            {{ visit.restaurant.name }}
                                        </inertia-link>
                                    </td>
                                    <td>
                                        {{ visit.visit_date | moment('DD.MM.YYYY HH:mm') }}
                                    </td>
                                    <td>
                                        {{ visit.costs | money }}
                                    </td>
                                    <td>
                                        <inertia-link class="btn btn-outline-primary btn-xs"
                                                      :href="`/visits/${visit.id}/edit`">
                                            <i class="mdi mdi-pencil"></i>
                                        </inertia-link>
                                        <InertiaModelDeleteButton :model="visit" modelPath="visits" />

                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <InertiaPagination :data="restaurantVisitsPagination"></InertiaPagination>
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
    import InertiaSortFilter from "../../Shared/InertiaSortFilter";
    import FilterToggleButton from "../../Shared/Table/FilterToggleButton";
    import InertiaModelDeleteButton from "../../Shared/InertiaModelDeleteButton";

    export default {
        props: {
            restaurantVisitsPagination: null,
        },
        components: {
            PageLayout,
            InertiaPagination,
            ResponseMessage,
            InertiaSortFilter,
            FilterToggleButton,
            InertiaModelDeleteButton
        },
        data() {
            return {
                sortFilter: {
                    showFilters: false,
                    filters: {
                        restaurant: '',
                        visit_date: '',
                        costs: '',
                    },
                    sort: {
                        attribute: 'id',
                        direction: 'asc'
                    }
                }
            }
        },
        layout: Layout,
        methods: {
            deleteItem(item) {

            }
        }
    }
</script>

<style>

</style>
