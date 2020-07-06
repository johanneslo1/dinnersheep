<template>
    <div>
        <AutocompleteModelSearch  id="restaurant_id"
                                 :model="model" primary-key="id" :submit-callback="submit"
                                 :resultValueCallback="resultValueCallback" :disabled="disabled"/>


        <p v-if="autocomplete_message" class="mt-2 mb-2 text-danger">{{ autocomplete_message }}</p>
        <div class="table-responsive mt-3">
            <table class="table">
                <tbody>
                <tr v-for="(item, index) in selectedValues">
                    <td>{{ resultValueCallback(item) }}</td>
                    <td class="text-right">
                        <button @click="removeItem(index)" class="btn btn-xs btn-danger">
                            <i class="mdi mdi-minus"></i>
                        </button>
                    </td>
                </tr>
                <slot name="table_end"></slot>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import AutocompleteModelSearch from "./AutocompleteModelSearch";

    export default {
        props: {
            //Name des Models. Wird genutzt um den richtigen API-Endpunkt anzusprechen.
            model: {
                type: String,
                default: 'model'
            },
            resultValueCallback: Function,
            // Primary-Key des Models (wird zurückgegeben)
            primaryKey: {
                type: String,
                default: 'id',
            },
            // Für v-model
            value: Array,
            disabled: {
                default: false,
                type: Boolean,
            },
            // Kann ein Item mehrmals ausgewählt werden?
            itemMultiselect: {
                default: false,
                type: Boolean,
            }
        },
        components: {
            AutocompleteModelSearch,
        },
        data() {
            return {
                autocomplete_message: '',
                selectedValues: this.value,
            }
        },
        mounted() {

        },
        methods: {
            removeItem(index) {
                this.selectedValues.splice(index, 1);
            },
            submit(result) {

                // Prüfe hier ob das Element bereits ausgewählt wurde, wenn itemMultiselect aktiv ist.

                let el = this.selectedValues.find(element => element[this.primaryKey] === result[this.primaryKey]);

                if (!this.itemMultiselect && el) {
                    this.autocomplete_message = 'Der Eintrag wurde bereits ausgewählt!';
                } else {

                    this.selectedValues = this.selectedValues.push(result);
                    this.$emit('input', this.selectedValues);
                }
            },
        }

    }
</script>

<style>
</style>
