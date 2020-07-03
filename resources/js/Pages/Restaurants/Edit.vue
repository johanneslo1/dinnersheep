<template>
    <PageLayout title="Restaurant bearbeiten">
        <template #action>
<!--            <inertia-link class="btn btn-default" href="/restaurants">-->
<!--                <i class="mdi mdi-arrow-left"></i> Zurück zur Übersicht-->
<!--            </inertia-link>-->
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
                                <label class="col-md-3 control-label" for="input_street_address">Straße & Hausnummer</label>
                                <div class="col-md-9">
                                    <InputWithErrorMessage :model-data="form.data" model-key="street_address" placeholder="Straße & Hausnummer" type="text" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 control-label" for="input_city">Stadt</label>
                                <div class="col-md-9">
                                    <InputWithErrorMessage :model-data="form.data" model-key="city" placeholder="Stadt" type="text" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 control-label" for="input_postal_code">PLZ</label>
                                <div class="col-md-9">
                                    <InputWithErrorMessage :model-data="form.data" model-key="postal_code" placeholder="PLZ" type="text" />
                                </div>
                            </div>


                            <div class="form-group form-submit text-center d-flex float-right">
                                <inertia-link class="btn btn-default" href="/restaurants">
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
    import LocationPicker from "../../Shared/LocationPicker";

    export default {
        props: {
            restaurant: Object,
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
                        name: this.restaurant.name,
                        street_address: this.restaurant.address.street_address,
                        city: this.restaurant.address.city,
                        postal_code: this.restaurant.address.postal_code,
                    },
                    isLoading: false,
                }
            }
        },
        layout: Layout,
        methods: {
            submit() {
                this.form.isLoading = true;


                this.$inertia.patch(`/restaurants/${this.restaurant.id}`, this.form.data).then(() => {
                    this.form.isLoading = false;
                });
            }
        }
    }
</script>

<style scoped>

</style>
