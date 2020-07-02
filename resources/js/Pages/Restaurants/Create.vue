<template>
    <PageLayout title="Restaurant erstellen">
        <template #action>
            <inertia-link class="btn btn-default" href="/restaurants">
                <i class="mdi mdi-arrow-left"></i> Zurück zur Übersicht
            </inertia-link>
        </template>
        <template #body>
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <ResponseMessage :hide-errors="true" />
                        <form @submit.prevent="submit">
                            <div class="form-group row">
                                <label class="col-md-3 control-label" for="input_name">Name des Restaurants</label>
                                <div class="col-md-9">
                                    <InputWithErrorMessage :model-data="form.data" model-key="name" placeholder="Sultan" type="text" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 control-label" for="inputStreet">Straße & Hausnummer</label>
                                <div class="col-md-7">
                                    <InputWithErrorMessage :model-data="form.data" model-key="street" placeholder="Straße" type="text" />
                                </div>
                                <div class="col-md-2">
                                    <InputWithErrorMessage :model-data="form.data" model-key="street_number" placeholder="Hausnummer" type="text" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 control-label" for="inputCity">Stadt & PLZ</label>
                                <div class="col-md-7">
                                    <InputWithErrorMessage :model-data="form.data" model-key="city" placeholder="Stadt" type="text" />
                                </div>
                                <div class="col-md-2">
                                    <InputWithErrorMessage :model-data="form.data" model-key="postal_code" placeholder="PLZ" type="text" />
                                </div>
                            </div>

                            <div class="form-group text-center">
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
    import LocationPicker from "../../Shared/LocationPicker";

    export default {
        props: {
            //
        },
        components: {
            PageLayout,
            LoadingButton,
            ResponseMessage,
            InputWithErrorMessage
        },
        data() {
            return {
                form: {
                    data: {
                        name: '',
                        street: '',
                        street_number: '',
                        city: '',
                        postal_code: '',
                    },
                    isLoading: false,
                }
            }
        },
        layout: Layout,
        methods: {
            submit() {
                this.form.isLoading = true;


                this.$inertia.post('/restaurants', this.form.data).then(() => {
                    this.form.isLoading = false;
                });
            }
        }
    }
</script>

<style scoped>

</style>
