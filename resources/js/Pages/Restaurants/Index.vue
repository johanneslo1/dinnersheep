<template>
    <PageLayout title="Restaurants">
        <template #action>
           <div class="d-flex align-items-center">
               <InertiaSearch />

               <inertia-link class="btn btn-primary ml-3" href="/restaurants/create">
                   <i class="mdi mdi-plus"></i> Restaurant erstellen
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
    import InertiaSearch from "../../Shared/InertiaSearch";

    export default {
        props: {
            restaurantsPagination: null,
        },
        components: {
            PageLayout,
            InertiaPagination,
            ResponseMessage,
            InertiaSearch
        },
        data() {
          return {

          }
        },
        layout: Layout,
        methods: {
            getResultValue(result) {
                return result.name;
            },
            submit() {

            },
            search(input) {



                const url = `/api/search/restaurants/${input}?limit=5`;

                console.log(url);
                if (input.length < 1) {
                    return []
                }

                return new Promise(resolve => {
                    if (input.length < 3) {
                        return resolve([])
                    }
                    fetch(url)
                        .then(response => response.json())
                        .then(data => {
                            resolve(data)
                        })
                })
            }
        }
    }
</script>

<style>
    .autocomplete-input {
        padding: 0.375rem 0.75rem;
        background-image: none;
        border-radius: 0.25rem;
    }
</style>
