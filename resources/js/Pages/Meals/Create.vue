<template>
    <PageLayout title="Gericht erstellen">
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

                            <div class="form-group row">
                                <label class="col-md-3 control-label" for="input_name">Name des Gerichs</label>
                                <div class="col-md-9">
                                    <InputWithErrorMessage :model-data="form.data" model-key="name"
                                                           placeholder="Dönerplatte Pommes" type="text"/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 control-label" for="input_shorthand">Kürzel</label>
                                <div class="col-md-9">
                                    <InputWithErrorMessage :model-data="form.data" model-key="shorthand"
                                                           placeholder="Kürzel (z.B. die Nummer des Gerichts)"
                                                           type="text"/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 control-label" for="input_price">Preis</label>
                                <div class="col-md-9">
                                    <InputWithErrorMessage :model-data="form.data" model-key="price" placeholder="Preis"
                                                           type="text"/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 control-label" for="input_note">Notitzen</label>
                                <div class="col-md-9">
                                    <InputWithErrorMessage :model-data="form.data" model-key="note"
                                                           placeholder="Notiz für Extras" type="textarea"/>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-md-3 control-label"
                                       for="checkbox_favorite_meal">Lieblingsgericht?</label>
                                <div class="col-md-9">
                                    <div class="custom-control custom-checkbox">
                                        <input v-model="form.data.is_favorite" type="checkbox"
                                               class="custom-control-input" id="checkbox_favorite_meal">
                                        <label class="custom-control-label" for="checkbox_favorite_meal">Ist das Gericht
                                            eines deiner Lieblingsgeriche?</label>
                                    </div>
                                </div>
                            </div>


                            <div class="form-group form-submit text-center d-flex float-right">
                                <inertia-link class="btn btn-default" href="/meals">
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

    export default {
        props: {
            restaurant: null,
        },
        components: {
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
                        name: '',
                        shorthand: '',
                        price: '',
                        note: '',
                        restaurant_id: '',
                        is_favorite: false,
                    },
                    isLoading: false,
                }
            }
        },
        layout: Layout,
        methods: {
            submit() {
                this.form.isLoading = true;


                this.$inertia.post('/meals', this.form.data).then(() => {
                    this.form.isLoading = false;
                });
            },
        }
    }
</script>

<style scoped>

</style>
