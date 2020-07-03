<template>
    <PageLayout title="Gerichte">
        <template #action>
            <div class="d-flex align-items-center">
                <InertiaSearch />

                <inertia-link class="btn btn-primary ml-3" href="/meals/create">
                    <i class="mdi mdi-plus"></i> Gericht erstellen
                </inertia-link>
            </div>
        </template>
        <template #body>
            <div class="col-md-12">
                <ResponseMessage />
                <div class="card">
                    <div class="card-body p-0">
                        <table class="table border-top-0">
                            <thead>
                            <tr>
                                <th>
                                    <InertiaSortFilter :sortFilter="sortFilter" sort-name="name" filter-name="name" placeholder="Name" input-type="text"   />
                                </th>
                                <th>
                                    <InertiaSortFilter :sortFilter="sortFilter" sort-name="is_favorite" filter-name="is_favorite" placeholder="Lieblingsgericht?" input-type="select"   />
                                </th>

                                <th>
                                    <InertiaSortFilter :sortFilter="sortFilter" sort-name="note" filter-name="note" placeholder="Notiz" input-type="text"   />
                                </th>
                                <th>Aktionen</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="meal in mealsPagination.data">
                                <td>
                                    {{ meal.name }}
                                </td>
                                <td>
                                    {{ meal.is_favorite }}
                                </td>

                                <td>
                    {{ meal.note }}
                                </td>
                                <td>

                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <InertiaPagination :data="mealsPagination"></InertiaPagination>
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

    export default {
        props: {
            mealsPagination: null,
        },
        components: {
            PageLayout,
            InertiaPagination,
            ResponseMessage,
            InertiaSearch,
            InertiaSortFilter
        },
        data() {
            return {
                sortFilter: {
                    filters: {
                        name: '',
                        restaurant: '',
                        note: ''
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

        }
    }
</script>

<style>
</style>
