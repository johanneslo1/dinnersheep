<template>
    <PageLayout :title="`Restaurantbesuch bearbeiten`">
        <template #body>
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <ResponseMessage :hide-errors="true"/>
                        <form @submit.prevent="submit">

                            <div  class="form-group row">
                                <label class="col-md-3 control-label" for="restaurant_id">Restaurant</label>
                                <div class="col-md-9">
                                    <AutocompleteModelSearch v-model="form.data.restaurant_id" id="restaurant_id"
                                                             model="restaurants" primary-key="id"
                                                             :resultValueCallback="(res) => `${res.name} - ${res.address ? res.address.city : ''}`"/>
                                </div>
                            </div>




                            <div class="form-group row">
                                <label class="col-md-3 control-label" for="meals">Verzehrte Gerichte</label>
                                <div class="col-md-9">
                                    <AutocompleteModelMultiselect v-model="form.data.meals" id="meals"
                                                                  :disabled="!form.data.restaurant_id"
                                                                  :model="`restaurants/${form.data.restaurant_id}/meals`"
                                                                  primary-key="id" :item-multiselect="true"
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
                                               text="Speichern">
                                    <i class="mdi mdi-content-save"></i>
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
            restaurantVisit: null,
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
                        visit_date: this.$moment(this.restaurantVisit.visit_date).format('YYYY-MM-DDTHH:mm'),
                        meals: [],
                        restaurant_id: this.restaurantVisit.restaurant ? this.restaurantVisit.restaurant.id : '',
                    },
                    isLoading: false,
                }
            }
        },
        layout: Layout,
        methods: {
            submit() {
                this.form.isLoading = true;


                this.$inertia.patch('/visits', this.form.data).then(() => {
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
