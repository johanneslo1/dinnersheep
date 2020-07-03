<template>
    <PageLayout title="Restaurantbesuch erstellen">
        <template #body>
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <ResponseMessage :hide-errors="true"/>
                        <form @submit.prevent="submit">

                            <div v-if="!restaurant" class="form-group row">
                                <label class="col-md-3 control-label" for="restaurant_id">Restaurant</label>
                                <div class="col-md-9">
                                    <AutocompleteModelSearch v-model="form.data.restaurant_id" id="restaurant_id"
                                                             model="restaurants" primary-key="id"
                                                             :resultValueCallback="(res) => `${res.name} - ${res.address ? res.address.city : ''}`"/>
                                </div>
                            </div>

                            <div v-else class="form-group row">
                                <label class="col-md-3 control-label" for="restaurant_id">Restaurant</label>
                                <div class="col-md-9">
                                    <!-- TODO: Nutzer sollte trotzdem noch überlassen bleiben die auswahl zu ändern. Daher nicht einfach auf disabled sondern autocomplete vorausgefüllt. -->
                                    <input :value="restaurant.name" id="restaurant_id" type="text" class="form-control"  disabled>
                                </div>
                            </div>


                            <div class="form-group row">
                                <label class="col-md-3 control-label" for="meals">Verzehrte Gerichte</label>
                                <div class="col-md-9">
                                    <AutocompleteModelMultiselect v-model="form.data.meals" id="meals"
                                                             :model="`restaurants/${form.data.restaurant_id}/meals`" primary-key="id"
                                                                  :resultValueCallback="(res) => `${res.name} für ${res.price_formated}`">
                                        <template v-if="total > 0" #table_end>
                                            <tr>
                                                <td>Insgesamt:</td>
                                                <td>{{ total | money }}</td>
                                            </tr>
                                        </template>
                                    </AutocompleteModelMultiselect>
                                </div>
                            </div>


                            <div class="form-group row">
                                <label class="col-md-3 control-label" for="input_visit_date">Zeitpunkt</label>
                                <div class="col-md-9">
                                    <InputWithErrorMessage :model-data="form.data" model-key="visit_date"
                                                           type="datetime-local"/>
                                </div>
                            </div>


                            <div class="form-group form-submit text-center d-flex float-right">
                                <inertia-link class="btn btn-default" href="/visits">
                                    Abbrechen
                                </inertia-link>
                                <LoadingButton :isLoading="form.isLoading" type="submit" className="btn btn-primary"
                                               text="Hinzufügen">
                                    <i class="mdi mdi-plus"></i>
                                </LoadingButton>
                            </div>
                        </form>
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
    import LoadingButton from "../../Shared/LoadingButton";
    import ResponseMessage from "../../Shared/ResponseMessage";
    import InputErrorMessages from "../../Shared/Form/InputErrorMessages";
    import InputWithErrorMessage from "../../Shared/Form/InputWithErrorMessage";
    import AutocompleteModelSearch from "../../Shared/Form/Autocompletes/AutocompleteModelSearch";
    import AutocompleteModelMultiselect from "../../Shared/Form/Autocompletes/AutocompleteModelMultiselect";

    export default {
        props: {
            restaurant: null,
        },
        components: {
            AutocompleteModelMultiselect,
            AutocompleteModelSearch,
            PageLayout,
            LoadingButton,
            ResponseMessage,
            InputWithErrorMessage,
        },
        data() {
            return {
                form: {
                    data: {
                        visit_date: '',
                        meals: [],
                        restaurant_id: this.restaurant ? this.restaurant.id : '',
                    },
                    isLoading: false,
                }
            }
        },
        layout: Layout,
        methods: {
            submit() {
                this.form.isLoading = true;


                this.$inertia.post('/visits', this.form.data).then(() => {
                    this.form.isLoading = false;
                });
            },
        },
        computed: {
            total() {
                let total = _.sumBy(this.form.data.meals, (item) => {
                    return Number(item.price);
                });

                return Math.round(total * 1000) / 1000;
            }
        }
    }
</script>

<style scoped>

</style>
