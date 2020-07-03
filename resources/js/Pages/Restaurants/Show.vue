<template>
    <PageLayout :title="`${restaurant.name}`">
        <template #body>

            <div class="col-md-7">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        Restaurant Daten
                      <div>
                          <inertia-link :href="`/visits/create?restaurant=${restaurant.id}`" class="btn btn-outline-primary">
                              <i class="mdi mdi-plus"></i> Besuch hinzufügen
                          </inertia-link>
                          <inertia-link :href="`/restaurants/${restaurant.id}/edit`" class="btn btn-outline-primary ml-3">
                              <i class="mdi mdi-pencil"></i> Bearbeiten
                          </inertia-link>
                      </div>
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="form-group row">
                                <label class="col-md-3 control-label" for="input_name">Name des Restaurants</label>
                                <div class="col-md-9">
                                    <input v-model="restaurant.name" class="form-control" id="input_name" placeholder="Sultan" type="text" disabled />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 control-label" for="input_street_address">Straße & Hausnummer</label>
                                <div class="col-md-9">
                                    <input v-model="restaurant.address.street_address" class="form-control" id="input_street_address" placeholder="Straße & Hausnummer" type="text" disabled />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 control-label" for="input_city">Stadt</label>
                                <div class="col-md-9">
                                    <input v-model="restaurant.address.city" class="form-control" id="input_city" placeholder="Stadt" type="text" disabled />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 control-label" for="input_postal_code">PLZ</label>
                                <div class="col-md-9">
                                    <input v-model="restaurant.address.postal_code" class="form-control" id="input_postal_code" placeholder="PLZ" type="text" disabled />
                                </div>
                            </div>

                            <div class="form-group">
                                <iframe
                                    :src="encodeURI(`https://www.google.com/maps/embed/v1/place?key=${google_maps_api_key}&q=${restaurant.address.street_address}+${restaurant.address.postal_code}+${restaurant.address.city}`)"
                                    style="border:0;width:100%" class="rounded" allowfullscreen></iframe>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            <div class="col-md-5">
                <div class="card">
                    <div class="card-header d-flex justify-content-between">
                        Besuchverlauf
                        <FilterToggleButton :sortFilter="sortFilter" />
                    </div>
                    <div class="card-body">
                        <table class="table border-top-0">
                            <thead>
                            <tr>
                                <th>
                                    <InertiaSortFilter :sortFilter="sortFilter" sort-name="user" filter-name="user"
                                                       placeholder="Mitarbeiter" input-type="text"/>
                                </th>
                                <th>
                                    <InertiaSortFilter :sortFilter="sortFilter" sort-name="visit_date"
                                                       filter-name="date" placeholder="Datum"
                                                       input-type="text"/>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="visit in restaurantVisitsPagination.data">
                                <td>
                                    <inertia-link :href="`/users/${visit.user.id}`">
                                        {{ visit.user.name }}
                                    </inertia-link>
                                </td>
                                <td>
                                    {{ $moment(visit.date).format('DD.MM.YYYY HH:mm') }}
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <InertiaPagination :data="restaurantVisitsPagination" :showInfo="false" />
                    </div>
                </div>
            </div>


        </template>
    </PageLayout>
</template>

<script>

    import Layout from "../../Shared/Layouts/Layout";
    import PageLayout from "../../Shared/Layouts/PageLayout";
    import InertiaSortFilter from "../../Shared/InertiaSortFilter";
    import FilterToggleButton from "../../Shared/Table/FilterToggleButton";
    import InertiaPagination from "../../Shared/InertiaPagination";

    export default {
        props: {
            restaurant: Object,
            restaurantVisitsPagination: Object,
        },
        layout: Layout,
        components: {
            PageLayout,
            InertiaSortFilter,
            FilterToggleButton,
            InertiaPagination
        },
        data() {
            return {
                sortFilter: {
                    showFilters: false,
                    sort: {
                        attribute: 'id',
                        direction: 'asc'
                    },
                    filters: {
                        user: '',
                        date: '',
                    }
                }
            }
        },
        computed: {
            google_maps_api_key() {
                return window.googleMapsApiKey;
            }
        }
    }
</script>

<style scoped>

</style>
